Public Class MERCE

    Private IdMerce As Integer
    Private QuantitaMerce As Integer
    Private ProdottoMerce As PRODOTTO
    Private QuantitaInitialMerce As Integer
    Private DataCreationMerce As DateTime
    Private AllOrdineMerce As List(Of ORDINE)
    Private ModificheMerce As String

    Public Property Id As Integer
        Get
            Return IdMerce
        End Get
        Set(value As Integer)
            IdMerce = value
        End Set
    End Property

    Public Property Quantita As Integer
        Get
            Return QuantitaMerce
        End Get
        Set(value As Integer)
            QuantitaMerce = value
        End Set
    End Property


    Public Property IdProdotto As PRODOTTO
        Get
            Return ProdottoMerce
        End Get
        Set(value As PRODOTTO)
            ProdottoMerce = value
        End Set
    End Property

    Public Property Modifiche As String
        Get
            Return ModificheMerce
        End Get
        Set(value As String)
            ModificheMerce = value
        End Set
    End Property

    Public Property QuantitaInitial As Integer
        Get
            Return QuantitaInitialMerce
        End Get
        Set(value As Integer)
            QuantitaInitialMerce = value
        End Set
    End Property

    Public Property DataCreation As DateTime
        Get
            Return DataCreationMerce
        End Get
        Set(value As DateTime)
            DataCreationMerce = value

        End Set
    End Property

    Public Property AllOrdine As List(Of ORDINE)
        Get
            Return AllOrdineMerce
        End Get
        Set(value As List(Of ORDINE))
            AllOrdineMerce = value
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

    Public Sub New(QuantitaInitialMerce)


        Me.QuantitaInitial = QuantitaInitialMerce


    End Sub

End Class
