Public Class LAVORO

    Private IdLavoro As Integer
    Private IdUtenteAssegnazioneLavoro As Integer
    Private DataAssegnazioneLavoro As DateTime
    Private DataChiusureLavoro As DateTime
    Private IdUtenteLavorazioneLavoro As Integer
    Private AllOrdineLavoro As List(Of ORDINE)
    Private CommentoLAvoro As String
    Private AvanzamentoLavoroLavoro As Integer

    Private Ordinamento As Integer

    Public Property AvanzamentoLavoro As Integer
        Get
            Return AvanzamentoLavoroLavoro
        End Get
        Set(value As Integer)
            AvanzamentoLavoroLavoro = value
        End Set
    End Property


    Public Property Commento As String
        Get
            Return CommentoLAvoro
        End Get
        Set(value As String)
            CommentoLAvoro = value
        End Set
    End Property
    Public Property Id As Integer
        Get
            Return IdLavoro
        End Get
        Set(value As Integer)
            IdLavoro = value
        End Set
    End Property

    Public Property IdUtenteAssegnazione As Integer
        Get
            Return IdUtenteAssegnazioneLavoro
        End Get
        Set(value As Integer)
            IdUtenteAssegnazioneLavoro = value
        End Set
    End Property

    Public Property DataAssegnazione As DateTime
        Get
            Return DataAssegnazioneLavoro
        End Get
        Set(value As DateTime)
            DataAssegnazioneLavoro = value
        End Set
    End Property

    Public Property DataChiusure As DateTime
        Get
            Return DataChiusureLavoro
        End Get
        Set(value As DateTime)
            DataChiusureLavoro = value
        End Set
    End Property

    Public Property IdUtenteLavorazione As Integer
        Get
            Return IdUtenteLavorazioneLavoro
        End Get
        Set(value As Integer)
            IdUtenteLavorazioneLavoro = value
        End Set
    End Property

    Public Property AllOrdine As List(Of ORDINE)
        Get
            Return AllOrdineLavoro
        End Get
        Set(value As List(Of ORDINE))
            AllOrdineLavoro = value
        End Set
    End Property

    Public Sub AddOrdine(ORDI As ORDINE)
        Me.AllOrdine.Add(ORDI)

    End Sub

    Public Sub RemoveOrdine(ORDI As ORDINE)
        Me.AllOrdine.Remove(ORDI)
    End Sub

    Public Property ordinelavoro As Integer
        Get
            Return Ordinamento
        End Get
        Set(value As Integer)
            Ordinamento = value
        End Set
    End Property

    Public Sub New(IdUtenteAssegnazioneLavoro, IdUtenteLavorazioneLavoro, DataChiusureLavoro, Ordinamento)
        Me.IdUtenteAssegnazione = IdUtenteAssegnazioneLavoro
        Me.IdUtenteLavorazione = IdUtenteLavorazioneLavoro
        Me.DataChiusure = DataChiusureLavoro
        Me.ordinelavoro = Ordinamento
    End Sub

    Public Sub New(IdLavoro, CommentoLAvoro)
        Me.Commento = CommentoLAvoro
        Me.Id = IdLavoro

    End Sub
    Public Sub New()

    End Sub





End Class
