Public Class Client
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim Tipo As String = Request.Params("Type")
        If Tipo = "inserimentoClient" Then
            Dim CodiceFiscale As String = Request.Params("CodiceFiscaleCli")
            Dim Sede As String = Request.Params("SedeCli")
            Dim Via As String = Request.Params("ViaCorsoCli")
            Dim RagineSociale As String = Request.Params("RagioneSoCiale")

            Dim nuovoCliente As New DaoCliente()
            nuovoCliente.Crea(New CLIENTE(CodiceFiscale, Sede, Via, RagineSociale))
            If nuovoCliente.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoCliente.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If
        End If

        If Tipo = "ClientLista" Then
            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)

            tgd.Add("IdCliente")
            tgd.Add("CodiceFiscale /p.iva")
            tgd.Add("Sede in")
            tgd.Add("Via/Corso")
            tgd.Add("Ragione Sociale Azienda")

            Dim flusso As String = xeletion.CreaJsonTable("ListaClienti", tgd).ToString()
            Response.Write(flusso)

        End If

        If Tipo = "DialogClientLista" Then
            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)

            tgd.Add("Codice")
            tgd.Add("Description")
            tgd.Add("Sede")


            Dim flusso As String = xeletion.CreaJsonTable("DialogCLIENTI", tgd).ToString()
            Response.Write(flusso)

        End If

    End Sub

End Class