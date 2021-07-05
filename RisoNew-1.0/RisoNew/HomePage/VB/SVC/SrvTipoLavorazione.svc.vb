Imports System.ServiceModel
Imports System.ServiceModel.Activation
Imports System.ServiceModel.Web

<ServiceContract(Namespace:="")>
<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)>
Public Class SrvTipoLavorazione

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

        Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("CancellaZionTipoLavorazione"), Id), msg)


        If msg = "" Then
            Erreura.EsitoP = True

        Else
            Erreura.EsitoP = False

        End If

        Return Erreura

    End Function
    ''' <summary>
    ''' 
    ''' </summary>
    ''' <param name="obj">un objetto chi permette di modificate qualsiasi grid</param>
    ''' <returns> la class erreur ,chi ha un attributo EsitoP chi è un booleen </returns>
    <OperationContract>
    <WebInvoke(Method:="PUT", UriTemplate:="", RequestFormat:=WebMessageFormat.Json, ResponseFormat:=WebMessageFormat.Json)>
    Function Update(obj As List(Of ElementModif)) As Erreurs
        Dim msg As String = ""
        Dim Erreura As New Erreurs()
        Dim sSQLList As New List(Of String)

        For Each items As ElementModif In obj
            sSQLList.Add(String.Format(ConfigurationManager.AppSettings("ModificaTipoLavorazione"), items.NomeColumnP, items.valeur1P, items.Id))

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
    Function Crea(obj As InserimentoTipoLavorazione) As Erreurs

        Dim msg As String = ""
        Dim Erreura As New Erreurs()

        Dim nuovoProdotto As New DaoTipolavorazione()
        'Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoTipoLavorazione"), obj.TipoLavorazione, obj.Description), msg)
        nuovoProdotto.Crea(New TIPOLAVORAZIONE(obj.TipoLavorazione, obj.Description))

        If nuovoProdotto.erreur = "existente" Then
            Erreura.EsitoP = False
        ElseIf nuovoProdotto.erreur = "fatto" Then
            Erreura.EsitoP = True
        Else
            Erreura.EsitoP = False
        End If

        Return Erreura

    End Function


    ' Aggiungere altre operazioni qui e contrassegnarle con <OperationContract()>

End Class
