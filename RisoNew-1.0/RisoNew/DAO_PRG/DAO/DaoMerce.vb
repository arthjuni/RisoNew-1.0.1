Public Class DaoMerce
    Implements DAO_Int(Of MERCE)


    Public erreur As String
    Public Sub Crea(obj As Merce) Implements DAO_Int(Of Merce).Crea
        Try


            Dim msg As String = ""
            Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoMerce"), obj.Quantita, obj.QuantitaInitial, obj.DataCreation, obj.Modifiche), msg)

            If msg = "" Then
                    erreur = "fatto"
                Else
                    erreur = "errore"
                End If



        Catch ex As Exception

            Console.WriteLine(ex.Message)
        End Try
    End Sub

    Public Sub Cerca(obj As Merce) Implements DAO_Int(Of Merce).Cerca
        Throw New NotImplementedException()
    End Sub

    Public Sub Update(obj As Merce) Implements DAO_Int(Of Merce).Update
        Throw New NotImplementedException()
    End Sub

    Public Sub Delete(obj As Merce) Implements DAO_Int(Of Merce).Delete
        Throw New NotImplementedException()
    End Sub
End Class
