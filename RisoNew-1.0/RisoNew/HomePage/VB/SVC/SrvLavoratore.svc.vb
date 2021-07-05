Imports System.ServiceModel
Imports System.ServiceModel.Activation
Imports System.ServiceModel.Web

<ServiceContract(Namespace:="")>
<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)>
Public Class SrvLavoratore

    ' Per utilizzare HTTP GET, aggiungere l'attributo <WebGet()>. (ResponseFormat predefinito è WebMessageFormat.Json)
    ' Per creare un'operazione che restituisca XML,
    '     aggiungere <WebGet(ResponseFormat:=WebMessageFormat.Xml)>,
    '     e includere la riga seguente nel corpo dell'operazione:
    '         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml"
    <OperationContract>
    <WebInvoke(Method:="DELETE", UriTemplate:="", RequestFormat:=WebMessageFormat.Json, ResponseFormat:=WebMessageFormat.Json)>
    Function Delete(Id As Integer) As Erreurs

        Dim msg As String = ""
        Dim Erreura As New Erreurs()

        Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("CancellaZionLavoratore"), Id), msg)


        If msg = "" Then
            Erreura.EsitoP = True

        Else
            Erreura.EsitoP = False

        End If

        Return Erreura

    End Function

    <OperationContract>
    <WebInvoke(Method:="PUT", UriTemplate:="", RequestFormat:=WebMessageFormat.Json, ResponseFormat:=WebMessageFormat.Json)>
    Function Update(obj As List(Of ElementModif)) As Erreurs
        Dim msg As String = ""
        Dim Erreura As New Erreurs()
        Dim sSQLList As New List(Of String)



        For Each items As ElementModif In obj

            sSQLList.Add(String.Format(ConfigurationManager.AppSettings("ModificaLavoratore"), items.NomeColumnP, items.valeur1P, items.Id))

        Next

        DAL.ExecuteTransaction(sSQLList, msg)
        If msg = "" Then
            Erreura.EsitoP = True
        Else
            Erreura.EsitoP = False
        End If

        Return Erreura


    End Function

    <OperationContract>
    <WebInvoke(Method:="POST", UriTemplate:="", RequestFormat:=WebMessageFormat.Json, ResponseFormat:=WebMessageFormat.Json)>
    Function Crea(obj As UTENTE) As Erreurs

        Dim msg As String = ""
        Dim Erreura As New Erreurs()

        Dim nuovoLavorator As New DaoUtente()

        nuovoLavorator.Crea(New UTENTE(obj.Nome, obj.Cognome, obj.Ruolo, obj.Utente, obj.Password))

        If nuovoLavorator.erreur = "existente" Then
            Erreura.EsitoP = False
        ElseIf nuovoLavorator.erreur = "fatto" Then
            Erreura.EsitoP = True
        Else
            Erreura.EsitoP = False
        End If
        If msg = "" Then


        Else


        End If

        Return Erreura

    End Function

    ' Aggiungere altre operazioni qui e contrassegnarle con <OperationContract()>

End Class
