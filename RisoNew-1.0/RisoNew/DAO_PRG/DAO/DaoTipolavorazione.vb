Public Class DaoTipolavorazione
    Implements DAO_Int(Of TIPOLAVORAZIONE)

    Public erreur As String
    Public Sub Crea(obj As TIPOLAVORAZIONE) Implements DAO_Int(Of TIPOLAVORAZIONE).Crea
        Try

            Dim SQLS = DAL.SelectCount(String.Format(ConfigurationManager.AppSettings("ClienteTipoLavorazione"), obj.TipoLavorazione, obj.Description))
            If SQLS > 0 Then
                erreur = "existente"

            Else
                Dim msg As String = ""
                Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoTipoLavorazione"), obj.TipoLavorazione, obj.Description), msg)

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

    Public Sub Cerca(obj As TIPOLAVORAZIONE) Implements DAO_Int(Of TIPOLAVORAZIONE).Cerca
        Throw New NotImplementedException()
    End Sub

    Public Sub Update(obj As TIPOLAVORAZIONE) Implements DAO_Int(Of TIPOLAVORAZIONE).Update
        Throw New NotImplementedException()
    End Sub

    Public Sub Delete(obj As TIPOLAVORAZIONE) Implements DAO_Int(Of TIPOLAVORAZIONE).Delete
        Throw New NotImplementedException()
    End Sub
End Class
