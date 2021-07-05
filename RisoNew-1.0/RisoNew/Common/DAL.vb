Imports System.Web.Configuration
Imports System.Data.Common

Public Enum FxReturn
    Ok = 0
    GenericError
    SQLError
    OkCancelNextEvent
    NoDataFound
    UserError
End Enum

Public Class DAL
    Private Const MAX_RETRY As Integer = 5
    Private Const MAX_WAIT_TOUT As Integer = 600
    Private Shared sConnectionString As String
    Private Shared sNameProvider As String
    Private Shared objDbProviderFactory As DbProviderFactory

    Shared Sub New()
        Dim cnConnectionStringsSettings As ConnectionStringSettings = Nothing

        Try
            cnConnectionStringsSettings = WebConfigurationManager.ConnectionStrings("DAL_ConnectionString")
            sConnectionString = cnConnectionStringsSettings.ConnectionString
            sNameProvider = cnConnectionStringsSettings.ProviderName
            objDbProviderFactory = DbProviderFactories.GetFactory(sNameProvider)
        Catch ex As Exception
            sConnectionString = Nothing
            sNameProvider = Nothing
            objDbProviderFactory = Nothing
        Finally
        End Try

    End Sub

    Public Shared Property ConnectionString() As String
        Get
            ConnectionString = sConnectionString
        End Get

        Set(ByVal Value As String)
            sConnectionString = Value
        End Set
    End Property

    Public Shared Function SelectDV(ByVal sSel As String) As DataView
        Dim cmd As DbCommand = Nothing
        Dim da As DbDataAdapter = Nothing
        Dim ds As DataSet = Nothing
        Dim dv As DataView = Nothing
        Dim nRetry As Integer = 0

        Using cnn As DbConnection = objDbConnection
            If cnn Is Nothing Then
                Return Nothing
            End If
            cmd = objDbCommand
            cmd.CommandText = sSel
            cmd.Connection = cnn
            da = objDbDataAdapter
            da.SelectCommand = cmd
            da.SelectCommand.CommandTimeout = GetQueryTimeout()
            ds = New DataSet()

            nRetry = 0
            Do
                Try
                    cnn.Open()
                    da.Fill(ds, "view")
                    dv = New DataView(ds.Tables("view"))
                    nRetry = MAX_RETRY
                Catch ex As DbException
                    nRetry = nRetry + 1
                Catch ex As Exception
                    nRetry = MAX_RETRY
                Finally
                    If cnn.State.Equals(ConnectionState.Open) Then
                        cnn.Close()
                    End If
                End Try
            Loop Until nRetry >= MAX_RETRY

            If Not ds Is Nothing Then
                ds.Dispose()
                ds = Nothing
            End If
            If Not da Is Nothing Then
                da.Dispose()
                da = Nothing
            End If
            If Not cmd Is Nothing Then
                cmd.Dispose()
                cmd = Nothing
            End If
        End Using

        Return dv
    End Function

    Public Shared Sub SelectDAAndFill(ByVal sSel As String, ByRef ds As DataSet, ByVal sTable As String)
        Dim cmd As DbCommand = Nothing
        Dim da As DbDataAdapter = Nothing
        Dim nRetry As Integer

        Using cnn As DbConnection = objDbConnection
            If cnn Is Nothing Then
                Return
            End If

            cmd = objDbCommand
            cmd.CommandText = sSel
            cmd.Connection = cnn
            cmd.CommandTimeout = GetQueryTimeout()
            da = objDbDataAdapter
            da.SelectCommand = cmd

            nRetry = 0
            Do
                Try
                    cnn.Open()
                    da.Fill(ds, sTable)
                    nRetry = MAX_RETRY
                Catch ex As DbException
                    nRetry = nRetry + 1
                Catch ex As Exception
                    nRetry = MAX_RETRY
                Finally
                    If cnn.State.Equals(ConnectionState.Open) Then
                        cnn.Close()
                    End If
                End Try
            Loop Until nRetry >= MAX_RETRY

            If Not da Is Nothing Then
                da.Dispose()
                da = Nothing
            End If
            If Not cmd Is Nothing Then
                cmd.Dispose()
                cmd = Nothing
            End If
        End Using

    End Sub

    Public Shared Function Execute(ByVal sSql As String, ByRef rsMess As String, Optional ByRef rowsaffected As Integer = 0) As FxReturn
        Dim cmd As DbCommand = Nothing
        Dim eRetCode As FxReturn
        Dim nRetry As Integer

        Using cnn As DbConnection = objDbConnection
            If cnn Is Nothing Then
                Return FxReturn.SQLError
            End If
            cmd = objDbCommand
            cmd.CommandText = sSql
            cmd.Connection = cnn
            cmd.CommandTimeout = GetQueryTimeout()
            nRetry = 0
            Do
                rsMess = ""
                Try
                    cnn.Open()
                    rowsaffected = cmd.ExecuteNonQuery()
                    eRetCode = FxReturn.Ok
                    nRetry = MAX_RETRY
                Catch ex As DbException
                    rsMess = ex.Message
                    eRetCode = FxReturn.SQLError
                    nRetry = nRetry + 1
                Catch ex As Exception
                    rsMess = ex.Message
                    eRetCode = FxReturn.SQLError
                    nRetry = MAX_RETRY
                Finally
                    If cnn.State.Equals(ConnectionState.Open) Then
                        cnn.Close()
                    End If
                End Try
            Loop Until nRetry >= MAX_RETRY

            If Not cmd Is Nothing Then
                cmd.Dispose()
                cmd = Nothing
            End If
        End Using

        Return eRetCode
    End Function


    ''' <summary>
    ''' 
    ''' </summary>
    ''' <param name="sSqlList"></param>
    ''' <param name="rsMess"></param>
    ''' <param name="rowsaffected"></param>
    ''' <returns></returns>
    Public Shared Function ExecuteTransaction(ByVal sSqlList As List(Of String), ByRef rsMess As String, Optional ByRef rowsaffected As Integer = 0) As FxReturn
        Dim cmd As DbCommand = Nothing
        Dim eRetCode As FxReturn
        Dim nRetry As Integer

        If sSqlList Is Nothing OrElse sSqlList.Count = 0 Then
            Return eRetCode
        End If

        Using cnn As DbConnection = objDbConnection
            If cnn Is Nothing Then
                Return FxReturn.SQLError
            End If


            cmd = objDbCommand
            'cmd.CommandText = sSql
            cmd.Connection = cnn
            Dim transaction As DbTransaction = Nothing

            cmd.CommandTimeout = GetQueryTimeout()
            nRetry = 0
            Do
                rsMess = ""
                Try
                    cnn.Open()
                    transaction = cnn.BeginTransaction(IsolationLevel.Unspecified)
                    cmd.Transaction = transaction
                    For Each sSql As String In sSqlList
                        cmd.CommandText = sSql
                        rowsaffected = cmd.ExecuteNonQuery()
                    Next

                    eRetCode = FxReturn.Ok
                    transaction.Commit()
                    nRetry = MAX_RETRY
                Catch ex As DbException
                    rsMess = ex.Message
                    transaction.Rollback()
                    eRetCode = FxReturn.SQLError
                    nRetry = nRetry + 1
                Catch ex As Exception
                    rsMess = ex.Message
                    eRetCode = FxReturn.SQLError
                    nRetry = MAX_RETRY
                Finally
                    If cnn.State.Equals(ConnectionState.Open) Then
                        cnn.Close()
                    End If
                End Try
            Loop Until nRetry >= MAX_RETRY

            If Not cmd Is Nothing Then
                cmd.Dispose()
                cmd = Nothing
            End If
        End Using

        Return eRetCode
    End Function

    Public Shared Function SelectCount(ByVal sSel As String) As Integer
        Return CInt(SelectScalar(sSel))
    End Function

    Public Shared Function SelectScalar(ByVal sSel As String)
        Dim cmd As DbCommand = Nothing
        Dim r As Object = Nothing
        Dim nRetry As Integer

        Using cnn As DbConnection = objDbConnection
            If cnn Is Nothing Then
                Return Nothing
            End If

            cmd = objDbCommand
            cmd.CommandText = sSel
            cmd.Connection = cnn
            cmd.CommandTimeout = GetQueryTimeout()
            nRetry = 0
            Do
                Try
                    cnn.Open()
                    r = cmd.ExecuteScalar()
                    nRetry = MAX_RETRY
                Catch ex As DbException
                    nRetry = nRetry + 1
                Catch ex As Exception
                    nRetry = MAX_RETRY
                Finally
                    If cnn.State.Equals(ConnectionState.Open) Then
                        cnn.Close()
                    End If
                End Try
            Loop Until nRetry >= MAX_RETRY

            If Not cmd Is Nothing Then
                cmd.Dispose()
                cmd = Nothing
            End If
        End Using

        Return r
    End Function

    Private Shared ReadOnly Property objDbConnection() As DbConnection
        Get
            Dim objDbConnectionTmp As DbConnection = Nothing

            If Not objDbProviderFactory Is Nothing Then
                objDbConnectionTmp = objDbProviderFactory.CreateConnection
                objDbConnectionTmp.ConnectionString = sConnectionString
            End If

            Return objDbConnectionTmp
        End Get
    End Property

    Private Shared ReadOnly Property objDbCommand() As DbCommand
        Get
            Dim objDbCommandTmp As DbCommand = Nothing

            If Not objDbProviderFactory Is Nothing Then
                objDbCommandTmp = objDbProviderFactory.CreateCommand
            End If

            Return objDbCommandTmp
        End Get
    End Property

    Private Shared ReadOnly Property objDbParameter() As DbParameter
        Get
            Dim objDbParameterTmp As DbParameter = Nothing

            If Not objDbProviderFactory Is Nothing Then
                objDbParameterTmp = objDbProviderFactory.CreateParameter
            End If

            Return objDbParameterTmp
        End Get
    End Property

    Private Shared ReadOnly Property objDbDataAdapter() As DbDataAdapter
        Get
            Dim objDbDataAdapterTmp As DbDataAdapter = Nothing

            If Not objDbProviderFactory Is Nothing Then
                objDbDataAdapterTmp = objDbProviderFactory.CreateDataAdapter
            End If

            Return objDbDataAdapterTmp
        End Get
    End Property

    Public Shared Function GetQueryTimeout() As Integer
        Return MAX_WAIT_TOUT
    End Function

    Public Shared Function SelectDVSP(ByVal nomeStoredProcedure As String, ByVal parametri As Hashtable) As DataView
        Dim cmd As DbCommand = Nothing
        Dim da As DbDataAdapter = Nothing
        Dim ds As DataSet = Nothing
        Dim dv As DataView = Nothing
        Dim nRetry As Integer = 0

        Using cnn As DbConnection = objDbConnection
            If cnn Is Nothing Then
                Return Nothing
            End If
            cmd = objDbCommand
            cmd.CommandText = nomeStoredProcedure
            cmd.CommandType = CommandType.StoredProcedure

            For Each de As DictionaryEntry In parametri
                Dim parametro As DbParameter = objDbParameter
                parametro.ParameterName = de.Key.ToString
                parametro.Value = de.Value.ToString
                cmd.Parameters.Add(parametro)
            Next de

            cmd.Connection = cnn
            da = objDbDataAdapter
            da.SelectCommand = cmd
            da.SelectCommand.CommandTimeout = GetQueryTimeout()
            ds = New DataSet()

            nRetry = 0
            Do
                Try
                    cnn.Open()
                    da.Fill(ds, "view")
                    dv = New DataView(ds.Tables("view"))
                    nRetry = MAX_RETRY
                Catch ex As DbException
                    nRetry = nRetry + 1
                Catch ex As Exception
                    nRetry = MAX_RETRY
                Finally
                    If cnn.State.Equals(ConnectionState.Open) Then
                        cnn.Close()
                    End If
                End Try
            Loop Until nRetry >= MAX_RETRY

            If Not ds Is Nothing Then
                ds.Dispose()
                ds = Nothing
            End If
            If Not da Is Nothing Then
                da.Dispose()
                da = Nothing
            End If
            If Not cmd Is Nothing Then
                cmd.Dispose()
                cmd = Nothing
            End If
        End Using

        Return dv
    End Function

    Public Shared Function SelectIntSP(ByVal nomeStoredProcedure As String, ByVal parametri As Hashtable) As Integer
        Dim cmd As DbCommand = Nothing
        Dim nRetry As Integer = 0
        Dim intero As Integer = 0

        Using cnn As DbConnection = objDbConnection
            If cnn Is Nothing Then
                Return Nothing
            End If
            cmd = objDbCommand
            cmd.CommandText = nomeStoredProcedure
            cmd.CommandType = CommandType.StoredProcedure

            For Each de As DictionaryEntry In parametri
                Dim parametro As DbParameter = objDbParameter
                parametro.ParameterName = de.Key.ToString
                parametro.Value = de.Value.ToString
                cmd.Parameters.Add(parametro)
            Next de

            cmd.Connection = cnn

            nRetry = 0
            Do
                Try
                    cnn.Open()
                    intero = cmd.ExecuteScalar()
                    nRetry = MAX_RETRY
                Catch ex As DbException
                    nRetry = nRetry + 1
                Catch ex As Exception
                    nRetry = MAX_RETRY
                Finally
                    If cnn.State.Equals(ConnectionState.Open) Then
                        cnn.Close()
                    End If
                End Try
            Loop Until nRetry >= MAX_RETRY

            If Not cmd Is Nothing Then
                cmd.Dispose()
                cmd = Nothing
            End If
        End Using

        Return intero
    End Function

End Class
