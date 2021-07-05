Public Class MESSAGGIO

    Private IdMessagio As Integer
    Private TempoMessaggio As DateTime
    Private TitoloMessaggio As String
    Private ContenutoMessaggio As String
    Private MittenteMessaggio As Integer
    Private DestinatarioMessaggio As Integer
    Private OrdineIdMessagio As Integer



    Public Property OrdineId As Integer
        Get
            Return OrdineIdMessagio
        End Get
        Set(value As Integer)
            OrdineIdMessagio = value
        End Set
    End Property
    Public Property Id As Integer
        Get
            Return IdMessagio
        End Get
        Set(value As Integer)
            IdMessagio = value
        End Set
    End Property
    Public Property Tempo As DateTime
        Get
            Return TempoMessaggio
        End Get
        Set(value As DateTime)
            TempoMessaggio = value
        End Set
    End Property

    Public Property Titolo As String
        Get
            Return TitoloMessaggio
        End Get
        Set(value As String)
            TitoloMessaggio = value
        End Set
    End Property

    Public Property Contenuto As String
        Get
            Return ContenutoMessaggio
        End Get
        Set(value As String)
            ContenutoMessaggio = value
        End Set
    End Property

    Public Property Mittente As Integer
        Get
            Return MittenteMessaggio
        End Get
        Set(value As Integer)
            MittenteMessaggio = value
        End Set
    End Property

    Public Property Destinatario As Integer
        Get
            Return DestinatarioMessaggio
        End Get
        Set(value As Integer)
            DestinatarioMessaggio = value
        End Set
    End Property

    Public Sub New()

    End Sub

    Public Sub New(TitoloMessaggio, ContenutoMessaggio, MittenteMessaggio, DestinatarioMessaggio, OrdineIdMessagio)

        Me.Titolo = TitoloMessaggio
        Me.Contenuto = ContenutoMessaggio
        Me.Mittente = MittenteMessaggio
        Me.Destinatario = DestinatarioMessaggio
        Me.OrdineId = OrdineIdMessagio
    End Sub
End Class
