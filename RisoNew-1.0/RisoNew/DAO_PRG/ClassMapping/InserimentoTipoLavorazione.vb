Imports System.Runtime.Serialization
<DataContract>
Public Class InserimentoTipoLavorazione

    Private TipoLavorazioneLAV As String
    Private DescriptionLavorazione As String
    <DataMember>
    Public Property TipoLavorazione As String
        Get
            Return TipoLavorazioneLAV
        End Get
        Set(value As String)
            TipoLavorazioneLAV = value
        End Set
    End Property
    <DataMember>
    Public Property Description As String
        Get
            Return DescriptionLavorazione
        End Get
        Set(value As String)
            DescriptionLavorazione = value
        End Set
    End Property
End Class
