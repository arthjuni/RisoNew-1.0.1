Public Class DaoOrdine
    Implements DAO_Int(Of ORDINE)

    Public erreur As String
    Public Sub Crea(obj As ORDINE) Implements DAO_Int(Of ORDINE).Crea

        Try

            Dim SQLS = DAL.SelectCount(String.Format(ConfigurationManager.AppSettings("OrdineExistente"), obj.IdMerce, obj.DataConsegna.ToString("yyyy/MM/dd"), obj.IdClient))
            If SQLS > 0 Then
                erreur = "existente"

            Else
                Dim msg As String = ""
                Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoOrdine"), obj.IdMerce, obj.QuantitaRichiesta, obj.IdClient, obj.Description, obj.DataConsegna.ToString("yyyy/MM/dd"), obj.TipoLavorazione, obj.TipoLavorazione1, obj.TipoLavorazione2, obj.TipoLavorazione3), msg)

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

    Public Sub Cerca(obj As ORDINE) Implements DAO_Int(Of ORDINE).Cerca
        Throw New NotImplementedException()
    End Sub

    Public Sub Update(obj As ORDINE) Implements DAO_Int(Of ORDINE).Update
        Throw New NotImplementedException()
    End Sub

    Public Sub Delete(obj As ORDINE) Implements DAO_Int(Of ORDINE).Delete
        Throw New NotImplementedException()
    End Sub


    Public Sub ChiusuraOrdine(obj As ORDINE)

        Try


            Dim msg As String = ""

            Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("chiudereLavoro"), obj.ID), msg)

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
