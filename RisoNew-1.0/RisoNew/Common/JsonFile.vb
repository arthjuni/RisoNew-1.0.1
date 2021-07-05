Public Class JsonFile



    Public Function CreaJson(Tble As List(Of String)) As StringBuilder
        Dim CodiceM, Descrizione As String
        Dim CodiceE As Integer
        Dim datiJSon As New StringBuilder()
        Dim listTable As New List(Of String)
        Dim Volta As Boolean = True
        Dim VoltaBuona As Boolean = True

        datiJSon.Append("{")
        For Each component As String In Tble
            Dim SqlS = DAL.SelectDV(String.Format(ConfigurationManager.AppSettings("FileJson"), component))

            If SqlS.Count > 0 Then

                If VoltaBuona Then

                    VoltaBuona = False

                Else

                    datiJSon.Append(",")
                End If
                Volta = True
                datiJSon.Append("""" & component & """:{")
                For j = 0 To SqlS.Count - 1


                    CodiceE = SqlS.Item(j).Item("Codice")
                    Descrizione = SqlS.Item(j).Item("Description")
                    CodiceM = CStr(CodiceE)

                    If Volta Then

                        Volta = False
                    Else
                        datiJSon.Append(",")

                    End If

                    datiJSon.Append(String.Format("""{0}"":""{1}""", CodiceM, Descrizione))



                Next
                datiJSon.Append("}")



            End If

        Next

        datiJSon.Append("}")



        Return datiJSon
    End Function

    Public Function CreaJsonSELECCHOIX(Tble As List(Of String)) As StringBuilder
        Dim CodiceM, Descrizione As String
        Dim CodiceE As Integer
        Dim datiJSon As New StringBuilder()
        Dim listTable As New List(Of String)
        Dim Volta As Boolean = True
        Dim VoltaBuona As Boolean = True

        datiJSon.Append("{")
        For Each component As String In Tble
            Dim SqlS = DAL.SelectDV(String.Format(ConfigurationManager.AppSettings("FileJson"), component))

            If SqlS.Count > 0 Then

                If VoltaBuona Then

                    VoltaBuona = False

                Else

                    datiJSon.Append(",")
                End If
                Volta = True
                datiJSon.Append("""" & component & """:[")
                For j = 0 To SqlS.Count - 1


                    CodiceE = SqlS.Item(j).Item("Codice")
                    Descrizione = SqlS.Item(j).Item("Description")
                    CodiceM = CStr(CodiceE)

                    If Volta Then

                        Volta = False
                    Else
                        datiJSon.Append(",")

                    End If
                    datiJSon.Append("{")
                    datiJSon.Append(String.Format("""value"":""{0}"",""label"":""{1}""", CodiceM, Descrizione))
                    datiJSon.Append("}")


                Next
                datiJSon.Append("]")



            End If

        Next

        datiJSon.Append("}")



        Return datiJSon
    End Function

    Public Function CreaJsonTable(Tble As String, Clmn As List(Of String)) As StringBuilder

        Dim datiJSon As New StringBuilder()
        Dim listTable As New List(Of String)
        Dim VoltaRecord As Boolean = True
        Dim VoltaColumn As Boolean = True


        datiJSon.Append("{")

        Dim SqlS = DAL.SelectDV(String.Format(ConfigurationManager.AppSettings("FileJson"), Tble))

        If SqlS.Count > 0 Then


            'datiJSon.Append("""" & Tble & """:[")
            datiJSon.Append("""rows"":[")
            For j = 0 To SqlS.Count - 1

                If VoltaRecord Then

                    VoltaRecord = False
                Else
                    datiJSon.Append(",")

                End If
                datiJSon.Append("{")
                'For s = 0 To Clmn.Count - 1
                VoltaColumn = True
                For Each s As String In Clmn
                    Dim i = j & s

                    'Clmn(s) = SqlS.Item(j).Item(Clmn(s))
                    i = SqlS.Item(j).Item(s)

                    If VoltaColumn Then

                        VoltaColumn = False
                    Else
                        datiJSon.Append(",")

                    End If

                    datiJSon.Append(String.Format("""" & s & """:""{0}""", i))


                Next
                datiJSon.Append("}")



            Next
            datiJSon.Append("],")
            datiJSon.AppendFormat(" ""records"": {0}, ", SqlS.Count)
            datiJSon.Append(" ""page"": 1, ""total"": 1")




        End If



        datiJSon.Append("}")




        Return datiJSon
    End Function

    Public Function CreaJsonTableRic(Tble As String, Clmn As List(Of String), Ric As Integer) As StringBuilder

        Dim datiJSon As New StringBuilder()
        Dim listTable As New List(Of String)
        Dim VoltaRecord As Boolean = True
        Dim VoltaColumn As Boolean = True


        datiJSon.Append("{")

        Dim SqlS = DAL.SelectDV(String.Format(ConfigurationManager.AppSettings("FileJsonRic"), Tble, Ric))

        If SqlS.Count > 0 Then


            'datiJSon.Append("""" & Tble & """:[")
            datiJSon.Append("""rows"":[")
            For j = 0 To SqlS.Count - 1

                If VoltaRecord Then

                    VoltaRecord = False
                Else
                    datiJSon.Append(",")

                End If
                datiJSon.Append("{")
                'For s = 0 To Clmn.Count - 1
                VoltaColumn = True
                For Each s As String In Clmn
                    Dim i = j & s

                    'Clmn(s) = SqlS.Item(j).Item(Clmn(s))
                    i = SqlS.Item(j).Item(s)

                    If VoltaColumn Then

                        VoltaColumn = False
                    Else
                        datiJSon.Append(",")

                    End If

                    datiJSon.Append(String.Format("""" & s & """:""{0}""", i))


                Next
                datiJSon.Append("}")



            Next
            datiJSon.Append("],")
            datiJSon.AppendFormat(" ""records"": {0}, ", SqlS.Count)
            datiJSon.Append(" ""page"": 1, ""total"": 1")


        Else
            datiJSon.Append("Niente")
        End If



        datiJSon.Append("}")




        Return datiJSon
    End Function


    Public Function CreaJsonTableRicTab(Tble As String, Clmn As List(Of String), Ric As Integer) As StringBuilder

        Dim datiJSon As New StringBuilder()
        Dim listTable As New List(Of String)
        Dim VoltaRecord As Boolean = True
        Dim VoltaColumn As Boolean = True


        datiJSon.Append("{")

        Dim SqlS = DAL.SelectDV(String.Format(ConfigurationManager.AppSettings("FileJsonRicTab"), Tble, Ric))

        If SqlS.Count > 0 Then


            'datiJSon.Append("""" & Tble & """:[")
            datiJSon.Append("""rows"":[")
            For j = 0 To SqlS.Count - 1

                If VoltaRecord Then

                    VoltaRecord = False
                Else
                    datiJSon.Append(",")

                End If
                datiJSon.Append("{")
                'For s = 0 To Clmn.Count - 1
                VoltaColumn = True
                For Each s As String In Clmn
                    Dim i = j & s

                    'Clmn(s) = SqlS.Item(j).Item(Clmn(s))
                    i = SqlS.Item(j).Item(s)

                    If VoltaColumn Then

                        VoltaColumn = False
                    Else
                        datiJSon.Append(",")

                    End If

                    datiJSon.Append(String.Format("""" & s & """:""{0}""", i))


                Next
                datiJSon.Append("}")



            Next
            datiJSon.Append("],")
            datiJSon.AppendFormat(" ""records"": {0}, ", SqlS.Count)
            datiJSon.Append(" ""page"": 1, ""total"": 1")


        Else
            datiJSon.Append("Niente")
        End If



        datiJSon.Append("}")




        Return datiJSon
    End Function

    Public Function CreaJsonSELEC(Tble As String, Clmn As List(Of String), ricclm As String, lik As String) As StringBuilder
        Dim datiJSon As New StringBuilder()
        Dim listTable As New List(Of String)
        Dim Volta As Boolean = True
        Dim voltaPR As Boolean = True


        'datiJSon.Append("{")

        Dim SqlS = DAL.SelectDV(String.Format(ConfigurationManager.AppSettings("FileJsonSl"), Tble, ricclm, lik))

        If SqlS.Count > 0 Then


            'datiJSon.Append("""" & Tble & """:[")
            datiJSon.Append("[")
            For j = 0 To SqlS.Count - 1



                'For s = 0 To Clmn.Count - 1
                Dim B As String = Nothing
                Dim i As String = Nothing
                For Each s As String In Clmn
                    i = j & s

                    'Clmn(s) = SqlS.Item(j).Item(Clmn(s))

                    If B = Nothing Then
                        B = SqlS.Item(j).Item(s)
                        voltaPR = True
                    Else
                        i = SqlS.Item(j).Item(s)
                        voltaPR = False
                    End If


                    If voltaPR = False Then

                        If Volta Then
                            datiJSon.Append("{")
                            Volta = False
                        Else
                            datiJSon.Append(",{")

                        End If

                        datiJSon.Append(String.Format("""value"":""{0}"",""label"":""{1}""", B, i))
                    End If



                Next
                datiJSon.Append("}")


            Next
            datiJSon.Append("]")


        End If



        'datiJSon.Append("}")




        Return datiJSon
    End Function



End Class
