
Public Class TIPOLAVORAZIONE


    Private IdTipoLavorazione As Integer
    Private TipoLavorazioneLAV As String
    Private DescriptionLavorazione As String

    Private ALLOrdineLavorazione As List(Of ORDINE)


    Public Property ALLOrdineLavoro As List(Of ORDINE)
        Get
            Return ALLOrdineLavorazione
        End Get
        Set(value As List(Of ORDINE))
            ALLOrdineLavorazione = value
        End Set
    End Property

    Public Sub AddOrdine(LAVA As ORDINE)
        Me.ALLOrdineLavoro.Add(LAVA)

    End Sub

    Public Sub RemoveLavoro(LAVA As ORDINE)
        Me.ALLOrdineLavoro.Remove(LAVA)
    End Sub

    Public Property id As Integer
        Get
            Return IdTipoLavorazione
        End Get
        Set(value As Integer)
            IdTipoLavorazione = value
        End Set
    End Property

    Public Property TipoLavorazione As String
        Get
            Return TipoLavorazioneLAV
        End Get
        Set(value As String)
            TipoLavorazioneLAV = value
        End Set
    End Property

    Public Property Description As String
        Get
            Return DescriptionLavorazione
        End Get
        Set(value As String)
            DescriptionLavorazione = value
        End Set
    End Property



    Public Sub New()

    End Sub

    Public Sub New(TipoLavorazioneLAV, DescriptionLavorazione)
        Me.TipoLavorazione = TipoLavorazioneLAV
        Me.Description = DescriptionLavorazione

    End Sub

End Class
