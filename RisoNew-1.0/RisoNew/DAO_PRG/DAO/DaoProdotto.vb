Public Class DaoProdotto
    Implements DAO_Int(Of Prodotto)

    Public erreur As String
    Public Sub Crea(obj As Prodotto) Implements DAO_Int(Of Prodotto).Crea
        Try

            Dim SQLS = DAL.SelectCount(String.Format(ConfigurationManager.AppSettings("ProdottoExistente"), obj.Nome, obj.Description))
            If SQLS > 0 Then
                erreur = "existente"

            Else
                Dim msg As String = ""
                Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoProdotto"), obj.Description, obj.Nome), msg)

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

    Public Sub Cerca(obj As Prodotto) Implements DAO_Int(Of Prodotto).Cerca
        Throw New NotImplementedException()
    End Sub

    Public Sub Update(obj As Prodotto) Implements DAO_Int(Of Prodotto).Update
        Throw New NotImplementedException()
    End Sub

    Public Sub Delete(obj As Prodotto) Implements DAO_Int(Of Prodotto).Delete
        Throw New NotImplementedException()
    End Sub

    Public Sub CreaprodotoMerce(odj1 As PRODOTTO, obj2 As MERCE)

        Try


            Dim msg As String = ""
            'Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("CreationProdottoMerce2"), odj1.Description, odj1.Nome, obj2.QuantitaInitial), msg)
            Dim SqlC = DAL.Execute(String.Format("Exec CreationProdottoMerce2 @Description='{0}',@Tipo='{1}',@QuantitaInitial={2}", odj1.Description, odj1.Tipo, obj2.QuantitaInitial), msg)

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
