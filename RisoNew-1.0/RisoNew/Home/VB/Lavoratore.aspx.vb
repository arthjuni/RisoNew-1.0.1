Public Class Lavoratore
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim Tipo As String = Request.Params("Type")
        If Tipo = "creazioneLavorator" Then

            Dim Nome As String = Request.Params("NomeLav")
            Dim Cognome As String = Request.Params("CognomeLav")
            Dim Ruolo As Integer = Request.Params("RuoloLav")
            Dim Utente As String = Request.Params("UtenteLav")
            Dim Password As String = Request.Params("PasswordLav")
            'Dim SqlS = DAL.SelectCount(String.Format(ConfigurationManager.AppSettings("UtenteExistente"), Nome, Cognome))
            'Dim msg As String = ""

            'Dim SqlV = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoLavorator"), Nome, Cognome, Ruolo, Utente, Password), msg)
            'If SqlS > 0 Then
            '    msg = "existente"
            '    Response.Write(msg)
            'Else
            '    Response.Write(msg)
            'End If

            'Response.Write(msg)

            Dim nuovoLavorator As New DaoUtente()
            nuovoLavorator.Crea(New UTENTE(Nome, Cognome, Ruolo, Utente, Password))
            If nuovoLavorator.erreur = "existente" Then
                Response.Write(1)
            ElseIf nuovoLavorator.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If
        End If

        If Tipo = "LavoratorLista" Then
            Dim xeletion As New JsonFile()
            Dim tgd As New List(Of String)

            tgd.Add("Idimpiegati")
            tgd.Add("Nome")
            tgd.Add("Cognome")
            tgd.Add("Ruolo")
            tgd.Add("Utente")

            Dim flusso As String = xeletion.CreaJsonTable("ListaLavoratore", tgd).ToString()
            Response.Write(flusso)

        End If

        If Tipo = "cancellaLavorator" Then

            Dim IdLavoratore As Integer = Request.Params("idlavoratore")

            Dim DeleteLavorator As New DaoUtente()
            DeleteLavorator.Delete(New UTENTE(IdLavoratore))
            If DeleteLavorator.erreur = "existente" Then
                Response.Write(1)
            ElseIf DeleteLavorator.erreur = "fatto" Then
                Response.Write(2)
            Else
                Response.Write(3)
            End If

        End If


    End Sub

End Class