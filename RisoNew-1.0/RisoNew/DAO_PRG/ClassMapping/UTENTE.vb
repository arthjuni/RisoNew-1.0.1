Imports System.Runtime.Serialization
<DataContract>
Public Class UTENTE

    Private IdImpiegati As Integer
    Private NomeUtente As String
    Private CognomeUtente As String
    Private RuoloUtente As Integer
    Private UtenteUtente As String
    Private Passwordutente As String
    Private MessagioUtente As String
    Private ALLLavoroUtente As List(Of LAVORO)



    Public Property Messagio As String
        Get
            Return MessagioUtente
        End Get
        Set(value As String)
            MessagioUtente = value
        End Set
    End Property
    Public Property Id As Integer
        Get
            Return IdImpiegati
        End Get
        Set(value As Integer)
            IdImpiegati = value
        End Set
    End Property

    <DataMember>
    Public Property Nome As String
        Get
            Return NomeUtente
        End Get
        Set(value As String)
            NomeUtente = value
        End Set
    End Property

    <DataMember>
    Public Property Cognome As String
        Get
            Return CognomeUtente
        End Get
        Set(value As String)
            CognomeUtente = value
        End Set
    End Property

    <DataMember>
    Public Property Ruolo As Integer
        Get
            Return RuoloUtente
        End Get
        Set(value As Integer)
            RuoloUtente = value
        End Set
    End Property

    <DataMember>
    Public Property Utente As String
        Get
            Return UtenteUtente
        End Get
        Set(value As String)
            UtenteUtente = value
        End Set
    End Property

    <DataMember>
    Public Property Password As String
        Get
            Return Passwordutente
        End Get
        Set(value As String)
            Passwordutente = value
        End Set
    End Property


    Public Property ALLLavoro As List(Of LAVORO)
        Get
            Return ALLLavoroUtente
        End Get
        Set(value As List(Of LAVORO))
            ALLLavoroUtente = value
        End Set
    End Property

    Public Sub AddLavoro(LAVA As LAVORO)
        Me.ALLLavoro.Add(LAVA)

    End Sub

    Public Sub RemoveLavoro(LAVA As LAVORO)
        Me.ALLLavoro.Remove(LAVA)
    End Sub


    Public Sub New()

    End Sub

    Public Sub New(IdImpiegati)
        Me.Id = IdImpiegati
    End Sub

    Public Sub New(NomeUtente, CognomeUtente, RuoloUtente, UtenteUtente, PasswordUtente)
        Me.Nome = NomeUtente
        Me.Cognome = CognomeUtente
        Me.Ruolo = RuoloUtente
        Me.Utente = UtenteUtente
        Me.Password = PasswordUtente



    End Sub

End Class
