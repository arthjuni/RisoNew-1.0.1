Public Class Lavorazion
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        Dim Tipo As String = Request.Params("Type")
        If Tipo = "creazioneLavorazione" Then



            Dim TipoLavorazione As String = Request.Params("TipoLavoraz")
            Dim DescrionLavorazione As String = Request.Params("DescriptionLavoraz")

            Dim nuovoTipoLavorazione As New DaoTipolavorazione()
            nuovoTipoLavorazione.Crea(New TIPOLAVORAZIONE(TipoLavorazione, DescrionLavorazione))

            If nuovoTipoLavorazione.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoTipoLavorazione.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If
        End If

        If Tipo = "TipoLavorazionLista" Then

            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)

            tgd.Add("IdTipoLavorazione")
            tgd.Add("TipoLavorazione")
            tgd.Add("DescriptionLavorazione")


            Dim flusso As String = xeletion.CreaJsonTable("ListaTipoLavorazione", tgd).ToString()
            Response.Write(flusso)

        End If


    End Sub

End Class