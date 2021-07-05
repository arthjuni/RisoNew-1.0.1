Public Class DaoUtente
    Implements DAO_Int(Of UTENTE)

    Public erreur As String
    Public Sub Crea(obj As UTENTE) Implements DAO_Int(Of UTENTE).Crea

        Try

            Dim SQLS = DAL.SelectCount(String.Format(ConfigurationManager.AppSettings("UtenteExistente"), obj.Nome, obj.Cognome))
            If SQLS > 0 Then
                erreur = "existente"

            Else
                Dim msg As String = ""
                Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoLavorator"), obj.Nome, obj.Cognome, obj.Ruolo, obj.Utente, obj.Password), msg)
                
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

    Public Sub Cerca(obj As UTENTE) Implements DAO_Int(Of UTENTE).Cerca
        Throw New NotImplementedException()
    End Sub

    Public Sub Update(obj As UTENTE) Implements DAO_Int(Of UTENTE).Update
        Throw New NotImplementedException()
    End Sub

    Public Sub Delete(obj As UTENTE) Implements DAO_Int(Of UTENTE).Delete
        Try


            Dim msg As String = ""
            Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("DeleteLavoratore"), obj.Id), msg)

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
