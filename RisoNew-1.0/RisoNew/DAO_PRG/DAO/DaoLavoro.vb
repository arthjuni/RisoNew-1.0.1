Public Class DaoLavoro
    Implements DAO_Int(Of LAVORO)

    Public erreur As String
    Public Sub Crea(obj As LAVORO) Implements DAO_Int(Of LAVORO).Crea
        Try

            Dim SQLS = DAL.SelectCount(String.Format(ConfigurationManager.AppSettings("LavoroExistente"), obj.DataChiusure.ToString("yyyy/MM/dd"), obj.IdUtenteAssegnazione, obj.IdUtenteLavorazione))
            If SQLS > 0 Then
                erreur = "existente"

            Else
                Dim msg As String = ""

                Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoLavoro"), obj.IdUtenteLavorazione, obj.DataChiusure.ToString("yyyy/MM/dd"), obj.IdUtenteAssegnazione, obj.ordinelavoro), msg)

                If msg = "" Then
                    erreur = "fatto"
                Else
                    erreur = "errore"
                End If

            End If

        Catch ex As Exception

            Console.WriteLine(ex.Message)
        End Try
    End Sub

    Public Sub Cerca(obj As LAVORO) Implements DAO_Int(Of LAVORO).Cerca
        Throw New NotImplementedException()
    End Sub

    Public Sub Update(obj As LAVORO) Implements DAO_Int(Of LAVORO).Update
        Throw New NotImplementedException()
    End Sub

    Public Sub Delete(obj As LAVORO) Implements DAO_Int(Of LAVORO).Delete
        Throw New NotImplementedException()
    End Sub

    Public Sub AddCommento(obj As LAVORO)

        Try


            Dim msg As String = ""

            Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("AddCommentoLavoro"), obj.Commento, obj.Id), msg)

            If msg = "" Then
                erreur = "fatto"
            Else
                erreur = "errore"
            End If



        Catch ex As Exception

            Console.WriteLine(ex.Message)
        End Try
    End Sub

    Public Sub AvanzamentoLAvo(AvanzamentoLavoro As Integer, Id As Integer)

        Try


            Dim msg As String = ""

            Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NV_percentaleLavoro"), AvanzamentoLavoro, Id), msg)

            If msg = "" Then
                erreur = "fatto"
            Else
                erreur = "errore"
            End If



        Catch ex As Exception

            Console.WriteLine(ex.Message)
        End Try
    End Sub


End Class
