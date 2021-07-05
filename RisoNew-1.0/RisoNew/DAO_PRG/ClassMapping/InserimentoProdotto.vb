Imports System.Runtime.Serialization
<DataContract>
Public Class InserimentoProdotto
    Private QuantitaInitialMerce As Integer
    Private DescriptionProdotto As String
    Private TipoProdotto As String

    <DataMember>
    Public Property Description As String
        Get
            Return DescriptionProdotto
        End Get
        Set(value As String)
            DescriptionProdotto = value
        End Set
    End Property
    <DataMember>
    Public Property Tipo As String
        Get
            Return TipoProdotto
        End Get
        Set(value As String)
            TipoProdotto = value
        End Set
    End Property
    <DataMember>
    Public Property QuantitaInitial As Integer
        Get
            Return QuantitaInitialMerce
        End Get
        Set(value As Integer)
            QuantitaInitialMerce = value
        End Set
    End Property

End Class
