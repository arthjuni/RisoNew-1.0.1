Public Class Lavor
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        Dim tipo As String = Request.Params("Type")

        If tipo = "selectutenteLav" Then

            Dim UT As String = Request.Params("term")

            Dim xeletion As New JsonFile()
            Dim visteXel As New List(Of String)

            visteXel.Add("Codice")
            visteXel.Add("Description")


            Response.Write(xeletion.CreaJsonSELEC("LAVORATORE_OCCUPATION", visteXel, "Description", UT))
        End If

        If tipo = "selectutentegest" Then

            Dim UT As String = Request.Params("term")

            Dim xeletion As New JsonFile()
            Dim visteXel As New List(Of String)

            visteXel.Add("Codice")
            visteXel.Add("Description")


            Response.Write(xeletion.CreaJsonSELEC("LAVORATORE_IMPIEGATO", visteXel, "Description", UT))
        End If

        If tipo = "selectLavoro" Then
            Dim lavoratore As Integer = Request.Params("utenteLavId")
            Dim Responsabile As Integer = Request.Params("utentegesId")
            Dim DataConsegna As String = Request.Params("Dataconsegna")
            Dim idOrdine As Integer = Request.Params("idOrdine")

            Dim nuovoLavoro As New DaoLavoro()
            nuovoLavoro.Crea(New LAVORO(Responsabile, lavoratore, DataConsegna, idOrdine))
            If nuovoLavoro.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoLavoro.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If

        End If

        If tipo = "modificaLavoro" Then
            Dim Commento As String = Request.Params("commentolavId")
            Dim idlavoro As Integer = Request.Params("idlavoro")


            Dim nuovoLavoro As New DaoLavoro()
            nuovoLavoro.AddCommento(New LAVORO(idlavoro, Commento))
            If nuovoLavoro.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoLavoro.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If

        End If

        If tipo = "AvanzamentoLavoro" Then
            Dim Nvaleur As Integer = Request.Params("Cella")
            Dim IdLavoro As Integer = Request.Params("riga")

            Dim nuovoLavoro As New DaoLavoro()
            nuovoLavoro.AvanzamentoLAvo(Nvaleur, IdLavoro)
            If nuovoLavoro.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoLavoro.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If
        End If


    End Sub

End Class