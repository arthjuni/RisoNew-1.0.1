Public Class Ordin
    Inherits System.Web.UI.Page

    Public erreur As String
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim tipo As String = Request.Params("Type")
        If tipo = "load" Then
            Dim xeletion As New JsonFile()
            Dim visteXel As New List(Of String)
            visteXel.Add("CLIENTJS")
            visteXel.Add("LAVOROJS")
            visteXel.Add("MERCEJS")
            visteXel.Add("LAVORATORJS")

            Response.Write(xeletion.CreaJson(visteXel))
        End If

        If tipo = "cp" Then
            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)
            tgd.Add("IdOrdine")
            tgd.Add("IdLavoro")
            tgd.Add("DataCreazione")
            tgd.Add("IdMerce")
            tgd.Add("QuantitaRichiesta")
            tgd.Add("IdCliente")
            tgd.Add("Stato")
            tgd.Add("description")
            tgd.Add("DataConsegna")
            tgd.Add("IdTipoLavorazione")
            tgd.Add("IdTipoLavorazione1")
            tgd.Add("IdTipoLavorazione2")
            tgd.Add("IdTipoLavorazione3")

            Dim flusso As String = xeletion.CreaJsonTable("ORDINE_VIEW", tgd).ToString()
            Response.Write(flusso)
            ' Response.Write(xeletion.CreaJsonTable("ORDINE", tgd).ToString())

        End If

        If tipo = "cpASS" Then
            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)
            tgd.Add("IdOrdine")
            tgd.Add("IdLavoro")
            tgd.Add("DataCreazione")
            tgd.Add("IdMerce")
            tgd.Add("DataChiusura")
            tgd.Add("Responsabile")
            tgd.Add("Lavoratore")
            tgd.Add("QuantitaRichiesta")
            tgd.Add("IdCliente")
            tgd.Add("Stato")
            tgd.Add("description")
            tgd.Add("DataConsegna")
            tgd.Add("IdTipoLavorazione")
            tgd.Add("IdTipoLavorazione1")
            tgd.Add("IdTipoLavorazione2")
            tgd.Add("IdTipoLavorazione3")
            tgd.Add("AvanzamentoLAvoro")
            tgd.Add("DescriptionLavoro")
            tgd.Add("Note")

            Dim flusso As String = xeletion.CreaJsonTable("ORDINEASSEGNATO_VIEW", tgd).ToString()
            Response.Write(flusso)
            ' Response.Write(xeletion.CreaJsonTable("ORDINE", tgd).ToString())

        End If

        If tipo = "select" Then

            Dim xeletion As New JsonFile()
            Dim visteXel As New List(Of String)

            visteXel.Add("LAVOROJS")


            Response.Write(xeletion.CreaJsonSELECCHOIX(visteXel))
        End If

        If tipo = "selectClient" Then

            Dim UT As String = Request.Params("term")

            Dim xeletion As New JsonFile()
            Dim visteXel As New List(Of String)

            visteXel.Add("Codice")
            visteXel.Add("Description")


            Response.Write(xeletion.CreaJsonSELEC("CLIENTJS", visteXel, "Description", UT))
        End If

        If tipo = "selectProdotto" Then

            Dim UT As String = Request.Params("term")

            Dim xeletion As New JsonFile()
            Dim visteXel As New List(Of String)

            visteXel.Add("Codice")
            visteXel.Add("Description")

            Response.Write(xeletion.CreaJsonSELEC("MERCEJS", visteXel, "Description", UT))
        End If

        If tipo = "inserimento" Then
            Dim lavorazione1ORD As Integer
            Dim lavorazione2ORD As Integer
            Dim lavorazione3ORD As Integer
            Dim lavorazione4ORD As Integer

            Dim ClienteNome As Integer = Request.Params("ClienteORD")
            Dim ProdottoNome As Integer = Request.Params("ProdottoORD")
            Dim QuantitaR As Integer = Request.Params("QuantitaORD")
            Dim DataFine As String = Request.Params("DataFineORD")
            Dim Anne As String = DataFine.Substring(6, 4)
            Dim mois As String = DataFine.Substring(3, 2)
            Dim Joura As String = DataFine.Substring(0, 2)
            Dim dDateStr As String = Anne + "-" + mois + "-" + Joura
            DataFine = dDateStr
            Dim DescriptionORD As String = Request.Params("DescriptionORD")

            If Request.Params("lavorazione1ORD") = "on" Then
                lavorazione1ORD = 0
            Else
                lavorazione1ORD = Request.Params("lavorazione1ORD")
            End If
            If Request.Params("lavorazione2ORD") = "on" Then
                lavorazione2ORD = 0
            Else
                lavorazione2ORD = Request.Params("lavorazione2ORD")
            End If
            If Request.Params("lavorazione3ORD") = "on" Then
                lavorazione3ORD = 0
            Else
                lavorazione3ORD = Request.Params("lavorazione3ORD")
            End If
            If Request.Params("lavorazione4ORD") = "on" Then
                lavorazione4ORD = 0
            Else
                lavorazione4ORD = Request.Params("lavorazione4ORD")
            End If

            Dim nuovoOrdine As New DaoOrdine()
            nuovoOrdine.Crea(New ORDINE(ProdottoNome, QuantitaR, ClienteNome, DescriptionORD, DataFine, lavorazione1ORD, lavorazione2ORD, lavorazione3ORD, lavorazione4ORD))
            If nuovoOrdine.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoOrdine.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If




        End If

        If tipo = "chiudereLavoro" Then

            Dim idlavoro As Integer = Request.Params("idlavoro")


            Dim chuideLavoro As New DaoOrdine()
            chuideLavoro.ChiusuraOrdine(New ORDINE(idlavoro))
            If chuideLavoro.erreur = "existente" Then
                Response.Write(1)
            ElseIf chuideLavoro.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If

        End If

        If tipo = "ChiusoOrdi" Then
            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)
            tgd.Add("IdOrdine")
            tgd.Add("IdLavoro")
            tgd.Add("DataCreazione")
            tgd.Add("IdMerce")
            tgd.Add("DataChiusura")
            tgd.Add("Responsabile")
            tgd.Add("Lavoratore")
            tgd.Add("QuantitaRichiesta")
            tgd.Add("IdCliente")
            tgd.Add("Stato")
            tgd.Add("description")
            tgd.Add("DataConsegna")
            tgd.Add("IdTipoLavorazione")
            tgd.Add("IdTipoLavorazione1")
            tgd.Add("IdTipoLavorazione2")
            tgd.Add("IdTipoLavorazione3")

            Dim flusso As String = xeletion.CreaJsonTable("ORDINE_CHIUSO_VIEW", tgd).ToString()
            Response.Write(flusso)
            ' Response.Write(xeletion.CreaJsonTable("ORDINE", tgd).ToString())

        End If

        If tipo = "ModificaOrdineP" Then

            Dim NuovaVAlore As String = Request.Params("Cella")
            Dim NomeColumn As String = Request.Params("ColCella")
            Dim RigaId As Integer = Request.Params("riga")

            Dim msg As String = ""

            DAL.Execute(String.Format(ConfigurationManager.AppSettings("ModificaOrdine"), NuovaVAlore, RigaId, NomeColumn), msg)
            If msg = "" Then
                erreur = "fatto"
            Else
                erreur = "errore"
            End If

            Response.Write(msg)
        End If
    End Sub

End Class