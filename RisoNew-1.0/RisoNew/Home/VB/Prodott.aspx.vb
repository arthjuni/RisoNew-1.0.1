Public Class Prodott
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim Tipo1 As String = Request.Params("Type")
        If Tipo1 = "creazioneProdotto" Then



            Dim Description As String = Request.Params("DescriptionProdotto")
            Dim Tipo As String = Request.Params("TipoProd")
            'Dim Quantita As Integer = Request.Params("quantita")
            Dim QuantitaInitial As Integer = Request.Params("QuantitainitialMerce")
            'Dim DataCreation As DateTime = Request.Params("DataCreazione")
            'Dim Modifiche As String = Request.Params("Modifiche")

            Dim nuovoProdotto As New DaoProdotto()
            nuovoProdotto.CreaprodotoMerce(New PRODOTTO(Description, Tipo), New MERCE(QuantitaInitial))


            If nuovoProdotto.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoProdotto.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If
        End If

        If Tipo1 = "ProdottoLista" Then

            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)

            tgd.Add("IdProdotto")
            tgd.Add("Description")
            tgd.Add("Tipo")

            Dim flusso As String = xeletion.CreaJsonTable("ListaProdotto", tgd).ToString()
            Response.Write(flusso)

        End If

    End Sub

End Class