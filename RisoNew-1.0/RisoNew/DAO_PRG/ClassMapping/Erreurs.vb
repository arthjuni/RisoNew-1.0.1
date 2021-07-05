Imports System.Runtime.Serialization
<DataContract>
Public Class Erreurs
    Private Esito As Boolean
    <DataMember>
    Public Property EsitoP() As Boolean
        Get
            Return Esito
        End Get
        Set(ByVal value As Boolean)
            Esito = value
        End Set
    End Property



End Class
