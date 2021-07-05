Imports System.ServiceModel
Imports System.ServiceModel.Activation
Imports System.ServiceModel.Web


<ServiceContract(Namespace:="")>
<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)>
Public Class SrvCliente


    ' Per utilizzare HTTP GET, aggiungere l'attributo <WebGet()>. (ResponseFormat predefinito è WebMessageFormat.Json)
    ' Per creare un'operazione che restituisca XML,
    '     aggiungere <WebGet(ResponseFormat:=WebMessageFormat.Xml)>,
    '     e includere la riga seguente nel corpo dell'operazione:
    '         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml"
    <OperationContract>
    <WebInvoke(Method:="DELETE", UriTemplate:="", RequestFormat:=WebMessageFormat.Json, ResponseFormat:=WebMessageFormat.Json)>
    Function Delete(Id As Integer) As StringBuilder

        Dim msg As String = ""
        Dim erreur As String
        Dim dataHtml As New StringBuilder("")
        Try


            Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("CancellaZionCLiente"), Id), msg)

            dataHtml.Append("{")
            If msg = "" Then
                erreur = "fatto"

            Else
                erreur = "errore"

            End If
            dataHtml.Append(String.Format("""erreur"":""{0}""", erreur))
            dataHtml.Append("}")
            Return dataHtml

        Catch ex As Exception

            Console.WriteLine(ex.Message)
            Return dataHtml.Append(ex.Message)
        End Try

    End Function

    <OperationContract>
    <WebInvoke(Method:="PUT", UriTemplate:="", RequestFormat:=WebMessageFormat.Json, ResponseFormat:=WebMessageFormat.Json)>
    Function Update(obj As List(Of ElementModif)) As Erreurs
        Dim msg As String = ""

        Dim dataHtml As New StringBuilder("")
        Dim Erreura As New Erreurs()
        Dim sSQLList As New List(Of String)
        'sSQLList.Add(String.Format(ConfigurationManager.AppSettings("ModificaClienti"), obj.NomeColumnP, obj.valeur1P, obj.Id))

        For Each items As ElementModif In obj

            sSQLList.Add(String.Format(ConfigurationManager.AppSettings("ModificaClienti"), items.NomeColumnP, items.valeur1P, items.Id))

        Next


        DAL.ExecuteTransaction(sSQLList, msg)

        dataHtml.Append("{")
        If msg = "" Then
            Erreura.EsitoP = True
        Else
            Erreura.EsitoP = False
        End If
        'dataHtml.Append(String.Format(" ""erreur"":""{0}"" ", erreur))
        'dataHtml.Append("}")

        Return Erreura


        'Catch ex As Exception
        'Console.Write(ex.Message)
        'Return dataHtml.Append(ex.Message).ToString()
        'Html.Append(ex.Message)


        'End Try
        'Return dataHtml.ToString()
    End Function

    <OperationContract>
    <WebInvoke(Method:="POST", UriTemplate:="", RequestFormat:=WebMessageFormat.Json, ResponseFormat:=WebMessageFormat.Json)>
    Function Crea(obj As CLIENTE) As Erreurs
        Dim Erreura As New Erreurs()

        Dim nuovoCliente As New DaoCliente()
        nuovoCliente.Crea(New CLIENTE(obj.CodiceFiscale, obj.Sede, obj.ViaCorso, obj.RagioneSocialeAzienda))
        If nuovoCliente.erreur = "existente" Then
            Erreura.EsitoP = False
        ElseIf nuovoCliente.erreur = "fatto" Then
            Erreura.EsitoP = True
        Else
            Erreura.EsitoP = False
        End If

        Return Erreura
    End Function

    ' Aggiungere altre operazioni qui e contrassegnarle con <OperationContract()>

End Class
