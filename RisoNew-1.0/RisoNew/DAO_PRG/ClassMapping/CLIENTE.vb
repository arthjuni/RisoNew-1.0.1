Imports System.Runtime.Serialization
<DataContract>
Public Class CLIENTE

    Private IdCiente As Integer
    Private CodiceFiscaleCliente As String
    Private SedeCliente As String
    Private ViaCorsoCliente As String
    Private RagioneSocialeAziendaCliente As String
    Private AllOrdineClient As List(Of ORDINE)

    Public Property Id As Integer
        Get
            Return IdCiente
        End Get
        Set(value As Integer)
            IdCiente = value
        End Set
    End Property
    <DataMember>
    Property CodiceFiscale As String
        Get
            Return CodiceFiscaleCliente

        End Get
        Set(value As String)
            CodiceFiscaleCliente = value

        End Set
    End Property
    <DataMember>
    Public Property Sede As String
        Get
            Return SedeCliente
        End Get
        Set(value As String)
            SedeCliente = value
        End Set
    End Property
    <DataMember>
    Public Property ViaCorso As String
        Get
            Return ViaCorsoCliente
        End Get
        Set(value As String)
            ViaCorsoCliente = value
        End Set
    End Property
    <DataMember>
    Public Property RagioneSocialeAzienda As String
        Get
            Return RagioneSocialeAziendaCliente
        End Get
        Set(value As String)
            RagioneSocialeAziendaCliente = value
        End Set
    End Property

    Public Property AllOrdine As List(Of ORDINE)
        Get
            Return AllOrdineClient
        End Get
        Set(value As List(Of ORDINE))
            AllOrdineClient = value
        End Set
    End Property

    Public Sub AddOrdine(ORDI As ORDINE)
        Me.AllOrdine.Add(ORDI)

    End Sub

    Public Sub RemoveOrdine(ORDI As ORDINE)
        Me.AllOrdine.Remove(ORDI)
    End Sub

    Public Sub New()

    End Sub

    Public Sub New(CodiceFiscaleCliente, SedeCliente, ViaCorsoCliente, RagioneSocialeAziendaCliente)

        Me.CodiceFiscale = CodiceFiscaleCliente
        Me.Sede = SedeCliente
        Me.ViaCorso = ViaCorsoCliente
        Me.RagioneSocialeAzienda = RagioneSocialeAziendaCliente

    End Sub

End Class
