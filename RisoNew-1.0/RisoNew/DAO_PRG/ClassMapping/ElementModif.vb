Imports System.Runtime.Serialization
<DataContract>
Public Class ElementModif

    Private valeur1 As String
    <DataMember>
    Public Property valeur1P() As String
        Get
            Return valeur1
        End Get
        Set(ByVal value As String)
            valeur1 = value
        End Set
    End Property

    Private IdP As Integer
    <DataMember>
    Public Property Id() As Integer
        Get
            Return IdP
        End Get
        Set(ByVal value As Integer)
            IdP = value
        End Set
    End Property

    Private NomeColumn As String
    <DataMember>
    Public Property NomeColumnP() As String
        Get
            Return NomeColumn
        End Get
        Set(ByVal value As String)
            NomeColumn = value
        End Set
    End Property



End Class
