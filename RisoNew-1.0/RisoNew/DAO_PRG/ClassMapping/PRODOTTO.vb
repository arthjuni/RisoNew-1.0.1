Public Class PRODOTTO

    Private IdProdotto As Integer
    Private DescriptionProdotto As String
    Private TipoProdotto As String
    Private NomeProdotto As String
    Private ProdottoMerce As MERCE

    Public Property Id As Integer
        Get
            Return IdProdotto
        End Get
        Set(value As Integer)
            IdProdotto = value
        End Set
    End Property

    Public Property Description As String
        Get
            Return DescriptionProdotto
        End Get
        Set(value As String)
            DescriptionProdotto = value
        End Set
    End Property

    Public Property Tipo As String
        Get
            Return TipoProdotto
        End Get
        Set(value As String)
            TipoProdotto = value
        End Set
    End Property

    Public Property AllMerce As MERCE
        Get
            Return ProdottoMerce
        End Get
        Set(value As MERCE)
            ProdottoMerce = value
        End Set
    End Property

    'Public Sub AddMerce(MERCA As MERCE)
    '    Me.AllMerce.Add(MERCA)

    'End Sub

    'Public Sub RemoveMerce(MERCA As MERCE)
    '    Me.AllMerce.Remove(MERCA)
    'End Sub

    Public Property Nome As String
        Get
            Return NomeProdotto
        End Get
        Set(value As String)
            NomeProdotto = value
        End Set
    End Property

    Public Sub New()

    End Sub

    Public Sub New(DescriptionProdotto, TipoProdotto)
        Me.Description = DescriptionProdotto
        Me.Tipo = TipoProdotto

    End Sub




End Class
