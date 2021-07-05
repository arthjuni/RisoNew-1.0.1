Public Class Index
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        Dim Utent As String = Request.Params("UT")
        Dim PAssword As String = Request.Params("PSWD")
        Dim SqlADD As StringBuilder = New StringBuilder("")
        Dim pasutente As String = "Non"
        'Dim SqlD = DAL.SelectDV(String.Format("select * from RisoNew..LAVORATORE where LAVORATORE.Utente='{0}' and LAVORATORE.Password='{1}'", Utent, PAssword))
        Dim SqlD = DAL.SelectDV(String.Format(ConfigurationManager.AppSettings("Accesso"), Utent, PAssword))
        If SqlD.Count > 0 Then
            Dim utenteA As String
            Dim RuoloA As String
            Dim NomeA As String
            Dim CognomeA As String
            Dim IdimpiegatiA As Integer

            SqlADD.Append("{")
            For i = 0 To SqlD.Count - 1

                utenteA = SqlD.Item(i).Item("Utente")
                RuoloA = SqlD.Item(i).Item("Ruolo")
                NomeA = SqlD.Item(i).Item("Nome")
                CognomeA = SqlD.Item(i).Item("Cognome")
                IdimpiegatiA = SqlD.Item(i).Item("Idimpiegati")

                SqlADD.Append(String.Format("""utente"":""{0}"",""Ruolo"":""{1}"",""Nome"":""{2}"",""Cognome"":""{3}"",""Impiegati"":""{4}""", utenteA, RuoloA, NomeA, CognomeA, IdimpiegatiA))

            Next
            SqlADD.Append("}")
            Response.Write(SqlADD)
        Else
            Response.Write(pasutente)
        End If

    End Sub

End Class