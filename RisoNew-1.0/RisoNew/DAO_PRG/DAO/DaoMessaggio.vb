Public Class DaoMessaggio
    Implements DAO_Int(Of MESSAGGIO)

    Public erreur As String
    Public Sub Crea(obj As MESSAGGIO) Implements DAO_Int(Of MESSAGGIO).Crea
        Try

            'Dim SQLS = DAL.SelectCount(String.Format(ConfigurationManager.AppSettings("ClienteExistente"), obj.CodiceFiscale, obj.Sede))
            'If SQLS > 0 Then
            '    erreur = "existente"

            'Else
            Dim msg As String = ""
            Dim SqlC = DAL.Execute(String.Format(ConfigurationManager.AppSettings("NuovoMessaggio"), obj.Titolo, obj.Contenuto, obj.Mittente, obj.Destinatario, obj.OrdineId), msg)

            If msg = "" Then
                    erreur = "fatto"
                Else
                    erreur = "errore"
                End If

            'End If

        Catch ex As Exception

            Console.WriteLine(ex.Message)
        End Try
    End Sub

    Public Sub Cerca(obj As MESSAGGIO) Implements DAO_Int(Of MESSAGGIO).Cerca
        Throw New NotImplementedException()
    End Sub

    Public Sub Update(obj As MESSAGGIO) Implements DAO_Int(Of MESSAGGIO).Update
        Throw New NotImplementedException()
    End Sub

    Public Sub Delete(obj As MESSAGGIO) Implements DAO_Int(Of MESSAGGIO).Delete
        Throw New NotImplementedException()
    End Sub

    Public Sub ModificaStatoMessagio_Ordine(idOrdine As Integer, IdNotifica As Integer, stato As Integer)
        Dim msg As String = ""

        DAL.Execute(String.Format(ConfigurationManager.AppSettings("ModificastatoMessagio"), IdNotifica, idOrdine, stato), msg)
        If msg = "" Then
            erreur = "fatto"
        Else
            erreur = "errore"
        End If




    End Sub


    Public Sub RifiutoMessagio_Ordine(idOrdine As Integer, IdNotifica As Integer, stato As Integer)
        Dim msg As String = ""

        DAL.Execute(String.Format(ConfigurationManager.AppSettings("RifiutoLavorostatoMessagio"), IdNotifica, idOrdine, stato), msg)
        If msg = "" Then
            erreur = "fatto"
        Else
            erreur = "errore"
        End If




    End Sub
    Public Sub letturaMessagio_Ordine(idOrdine As Integer, IdNotifica As Integer, stato As Integer)
        Dim msg As String = ""

        DAL.Execute(String.Format(ConfigurationManager.AppSettings("ModificastatoMessagio"), IdNotifica, idOrdine, stato), msg)
        If msg = "" Then
            erreur = "fatto"
        Else
            erreur = "errore"
        End If




    End Sub
End Class
