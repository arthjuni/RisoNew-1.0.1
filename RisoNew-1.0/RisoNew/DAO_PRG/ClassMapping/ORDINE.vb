Public Class ORDINE
    Private IdOrdine As Integer
    Private IdLavoroOrdine As Integer
    Private IdMerceOrdine As Integer
    Private QuantitaRichiestaOrdine As Integer
    Private DataCreationOrdine As DateTime
    Private IdClienteOrdine As Integer
    Private StatoOrdine As Integer
    Private DescriptionOrdine As String
    Private DataConsegnaOrdine As DateTime

    Private TipoLavorazioneLAvoro As Integer
    Private TipoLavorazioneLAvoro1 As Integer
    Private TipoLavorazioneLAvoro2 As Integer
    Private TipoLavorazioneLAvoro3 As Integer


    Public Property TipoLavorazione As Integer
        Get
            Return TipoLavorazioneLAvoro
        End Get
        Set(value As Integer)
            TipoLavorazioneLAvoro = value
        End Set
    End Property
    Public Property TipoLavorazione1 As Integer
        Get
            Return TipoLavorazioneLAvoro1
        End Get
        Set(value As Integer)
            TipoLavorazioneLAvoro1 = value
        End Set
    End Property

    Public Property TipoLavorazione2 As Integer
        Get
            Return TipoLavorazioneLAvoro2
        End Get
        Set(value As Integer)
            TipoLavorazioneLAvoro2 = value
        End Set
    End Property

    Public Property TipoLavorazione3 As Integer
        Get
            Return TipoLavorazioneLAvoro3
        End Get
        Set(value As Integer)
            TipoLavorazioneLAvoro3 = value
        End Set
    End Property


    Public Property ID As Integer
        Get
            Return IdOrdine
        End Get
        Set(value As Integer)
            IdOrdine = value
        End Set
    End Property

    Public Property Idlavoro As Integer
        Get
            Return IdLavoroOrdine
        End Get
        Set(value As Integer)
            IdLavoroOrdine = value
        End Set
    End Property

    Public Property IdMerce As Integer
        Get
            Return IdMerceOrdine
        End Get
        Set(value As Integer)
            IdMerceOrdine = value
        End Set
    End Property

    Public Property IdClient As Integer
        Get
            Return IdClienteOrdine
        End Get
        Set(value As Integer)
            IdClienteOrdine = value
        End Set
    End Property

    Public Property QuantitaRichiesta As Integer
        Get
            Return QuantitaRichiestaOrdine
        End Get
        Set(value As Integer)
            QuantitaRichiestaOrdine = value
        End Set
    End Property
    Public Property DataConsegna As DateTime
        Get
            Return DataConsegnaOrdine
        End Get
        Set(value As DateTime)
            DataConsegnaOrdine = value
        End Set
    End Property

    Public Property DataCreation As DateTime
        Get
            Return DataCreationOrdine
        End Get
        Set(value As DateTime)
            DataCreationOrdine = value
        End Set
    End Property

    Public Property Stato As Integer
        Get
            Return StatoOrdine
        End Get
        Set(value As Integer)
            StatoOrdine = value
        End Set
    End Property

    Public Property Description As String
        Get
            Return DescriptionOrdine
        End Get
        Set(value As String)
            DescriptionOrdine = value
        End Set
    End Property

    Public Sub New()

    End Sub
    Public Sub New(IdMerceOrdine, QuantitaRichiestaOrdine, IdClienteOrdine, DescriptionOrdine, DataConsegnaOrdine, TipoLavorazioneLAvoro, TipoLavorazioneLAvoro1, TipoLavorazioneLAvoro2, TipoLavorazioneLAvoro3)

        Me.IdMerce = IdMerceOrdine
        Me.QuantitaRichiesta = QuantitaRichiestaOrdine
        Me.IdClient = IdClienteOrdine
        Me.Description = DescriptionOrdine
        Me.DataConsegna = DataConsegnaOrdine
        Me.TipoLavorazione = TipoLavorazioneLAvoro
        Me.TipoLavorazione1 = TipoLavorazioneLAvoro1
        Me.TipoLavorazione2 = TipoLavorazioneLAvoro2
        Me.TipoLavorazione3 = TipoLavorazioneLAvoro3

    End Sub

    Public Sub New(IdOrdine)

        Me.ID = IdOrdine

    End Sub

End Class
