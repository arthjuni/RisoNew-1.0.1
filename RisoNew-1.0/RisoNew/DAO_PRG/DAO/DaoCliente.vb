Public Class DaoCliente
    Implements DAO_Int(Of Cliente)



    Public erreur As String
    Public Sub Crea(obj As Cliente) Implements DAO_Int(Of Cliente).Crea

        Try

            Dim SQLS = DAL.SelectCount(String.Format(ConfigurationManager.AppSettings("ClienteExistente"), obj.CodiceFiscale, obj.Sede))
            If SQLS > 0 Then
                erreur = "existente"

            Else
                Dim msg As String = ""
                Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoCliente"), obj.CodiceFiscale, obj.Sede, obj.ViaCorso, obj.RagioneSocialeAzienda), msg)

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

    Public Sub Cerca(obj As Cliente) Implements DAO_Int(Of Cliente).Cerca
        Throw New NotImplementedException()
    End Sub

    Public Sub Update(obj As Cliente) Implements DAO_Int(Of Cliente).Update
        Throw New NotImplementedException()
    End Sub

    Public Sub Delete(obj As Cliente) Implements DAO_Int(Of Cliente).Delete
        Throw New NotImplementedException()
    End Sub
End Class
