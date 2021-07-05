Public Class Messagi
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        Dim tipo As String = Request.Params("Type")
        If tipo = "messagJQgrid" Then

            Dim Titolo As String = Request.Params("titolo")
            Dim Contenuto As String = Request.Params("contenuto")
            Dim Mittente As Integer = Request.Params("mittente")
            Dim Ordine As Integer = Request.Params("ordine")
            Dim destinatario As Integer = Request.Params("destinatario")


            Dim nuovoMessagio As New DaoMessaggio()
            nuovoMessagio.Crea(New MESSAGGIO(Titolo, Contenuto, Mittente, destinatario, Ordine))


            If nuovoMessagio.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoMessagio.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If
        End If

        If tipo = "messagJqNormale" Then

            Dim Titolo As String = Request.Params("titolo")
            Dim Contenuto As String = Request.Params("contenuto")
            Dim Mittente As Integer = Request.Params("mittente")
            Dim Ordine As Integer = Request.Params("ordine")
            Dim destinatario As Integer = Request.Params("destinatario")


            Dim nuovoMessagio As New DaoMessaggio()
            nuovoMessagio.Crea(New MESSAGGIO(Titolo, Contenuto, Mittente, destinatario, Ordine))


            If nuovoMessagio.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoMessagio.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If
        End If

        If tipo = "MessagioJqTAbleau" Then

            Dim IDuser As Integer = Request.Params("idUser")

            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)
            tgd.Add("idnotifica")
            tgd.Add("OrdineId")
            tgd.Add("Tempo")
            tgd.Add("Mitente")
            tgd.Add("Destinatario")
            tgd.Add("Contenuto")
            tgd.Add("Stato")
            tgd.Add("Titolo")

            Dim flusso As String = xeletion.CreaJsonTableRic("NOTIFICAGENERAL", tgd, IDuser).ToString()
            Response.Write(flusso)
            ' Response.Write(xeletion.CreaJsonTable("ORDINE", tgd).ToString())


        End If

        If tipo = "RicercaMessagioJqTAbleau" Then

            Dim IDuser As Integer = Request.Params("idUser")

            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)
            tgd.Add("idnotifica")
            tgd.Add("OrdineId")
            tgd.Add("Tempo")
            tgd.Add("Mitente")
            tgd.Add("Destinatario")
            tgd.Add("Contenuto")
            tgd.Add("Stato")
            tgd.Add("Titolo")

            Dim flusso As String = xeletion.CreaJsonTableRicTab("RicercaNOTIFICAGENERAL", tgd, IDuser).ToString()
            Response.Write(flusso)
            ' Response.Write(xeletion.CreaJsonTable("ORDINE", tgd).ToString())


        End If

        If tipo = "LavoroAcceptato" Then
            Dim idordine As Integer = Request.Params("idOrdine")
            Dim IdNotifica As Integer = Request.Params("idNotifica")
            Dim Stato As Integer = Request.Params("stato")
            Dim messagio As New DaoMessaggio()
            messagio.letturaMessagio_Ordine(idordine, IdNotifica, Stato)
            If messagio.erreur = "existente" Then
                Response.Write(1)
            ElseIf messagio.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If

        End If
        If tipo = "LavoroRiffiutato" Then
            Dim idordine As Integer = Request.Params("idOrdine")
            Dim IdNotifica As Integer = Request.Params("idNotifica")
            Dim Stato As Integer = Request.Params("stato")

            Dim messagio As New DaoMessaggio()
            messagio.RifiutoMessagio_Ordine(idordine, IdNotifica, Stato)
            If messagio.erreur = "existente" Then
                Response.Write(1)
            ElseIf messagio.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If

        End If

        If tipo = "mailvista" Then
            Dim idordine As Integer = Request.Params("idOrdine")
            Dim IdNotifica As Integer = Request.Params("idNotifica")
            Dim Stato As Integer = Request.Params("stato")
            Dim messagio As New DaoMessaggio()
            messagio.ModificaStatoMessagio_Ordine(idordine, IdNotifica, Stato)
            If messagio.erreur = "existente" Then
                Response.Write(1)
            ElseIf messagio.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If

        End If


    End Sub

End Class