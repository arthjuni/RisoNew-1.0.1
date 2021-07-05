
/*diferenti ruoli dei lavoratori */
let tableauRuolo = { "1": "OPERAIO", "2": "IMPIEGATO", "3": "IMPIEGATO RESP", "4": "AMMINISTRATOR" }// differenti ruoli dei utenti

/* creation della finestra della tab tabelle */
var tabelles = "<div class='ContainTabTabelleCL'><div class='dropdown'><button class='dropbtn'>LAVORATORE</button>" +
    "<div id='myDropdownlavoratore' class='dropdown-content dropDtutti'><a class='CreaLavoratoreCl' href='#'>CREARE LAVORATORE</a><a class='ListaLavoratoreCl' href='#'>LISTA LAVORATORE</a><a class='ModifListaLavoratoreCl' href='#'>MODIFICA LAVORATORE</a>" +
    "</div></div>" +

    "<div class='dropdown'><button class='dropbtn'>CLIENTE</button><div id='myDropdowncliente' class='dropdown-content dropDtutti'>" +
    "<a class='CreaCliente' href='#'>CREARE CLIENTE</a><a class='ListaClient' href='#'>LISTA CLIENTE</a><a class='ModifListaClientCl' href='#'>MODIFICARE CLIENTE</a></div></div>" +

    "<div class='dropdown'><button class='dropbtn'>PRODOTTO</button><div id='myDropdownprodotto' class='dropdown-content dropDtutti'>" +
    "<a class='CreaProdotto' href='#'>CREARE PRODOTTO</a><a class='ListaProdotto' href='#'>LISTA PRODOTTO</a><a class='ModifListaProdottoCl' href='#'>MODIFICARE PRODOTTO</a></div></div>" +

    "<div class='dropdown'><button class='dropbtn'> TIPO LAVORAZIONE</button><div id='myDropdownlavorazione' class='dropdown-content dropDtutti'><a class='CreaTipoLavorazione' href='#'>CREARE TIPO LAVORAZIONE</a>" +
    "<a class='ListaTipoLavorazione' href='#'>LISTA TIPO LAVORAZIONE</a><a class='ModifListaTipoLavorazioneCl' href='#'>MODIFICARE TIPO LAVORAZIONE</a></div></div></div><div class='ContainDialCl ' ></div>"

var creaLavorator = "<div id='Lavoratore_id' class='Lavoratore_cl'>" +
    "<div class='divinputColCL'><label for='Nome'> Nome :</label><input type='text' name='Nome' class='Nome_Utente_cl' id='Nome_Utente_id' />" +
    "<label for='Cognome' class='LabelCL'>Cognome :</label><input name='Cognome' type='text' class='Cognome_Utente_cl' id='Cognome_Utente_id' /></div><div class='divinputColCL'><label for='ruolo' class=''>Ruolo :</label><select name='ruolo' type='number' class='Ruolo_Utente_cl' id='Ruolo_Utente_id'></select>"
    + "<label for='Utente' class='LabelCL'>Utente :</label><input name='Utente' type='text' class='Utente_Utente_cl' id='Utente_Utente_id' /></div><div class='divinputColCL'><label for='password'>Password :</label><input name='password' type='text' class='Password_Utente_cl' id='Password_Utente_id'/></div></div >"

var creaClient = "<div id = 'Cliente_id' class='Cliente_cl'><div class='divinputColCL'><label for='Codicefiscale'>Codice Fiscale</label> :<input name='Codicefiscale' pattern='' title='Devi Inserire un codice fiscale giusto' id='CodicefiscaleId' class='CodicefiscaleCl' />" +
                "<label for='Sede'>Citta :</label><input type='text' id='SedeId' class='SedeCl' name='Sede' /></div><div class='divinputColCL'><label for='RagineSociale'>Ragine Sociale :</label><input type='text' id='RagineSocialeId' class='RagineSocialeCl' name='RagineSociale' /></div><div class='divinputColCL'><label for='CorsoVia'>Corso/Via :</label><input type='Via' name='Via' id='ViaId' class='ViaCl'/></div >"

var creaProdotto = "<div class='divinputColCL'><label for='TipoRiso'>Tipo Riso</label>:<input type='text' name='TipoRiso' id='tipoProdottoId' class='tipoProdottoCl prodottofocusCl' /></div><div class='divinputColCL'> <label for='descrizioneProdotto'>Descrizione </label>:<textarea rows='3' cols='28' maxlength='100' name='descrizioneProdotto' id='descrizioneProdottoId' class='descrizioneProdottoCl prodottofocusCl' > </textarea></div><div class='divinputColCL'><label style='display:none;' for='QuantitaRimasta'>Quantita Rimasta </label> : <input style='display:none;'  type='number'  name='QuantitaRimasta' id='MerceQuantitaRimastaId' class='MerceQuantitaRimastaCl' /></div>"

var creaTipoLavorazione ="<div class='divinputColCL'><label for='TipoLavorazione'>Tipo Lavorazione :</label><Input id='TipoLavorazioneId' class='TipoLavorazioneCl prodottofocusCl' name='TipoLavorazione'/></div><div class='divinputColCL'><label for='DescriptionLavorazione'> Description Lavorazione :</label><textarea  type='text' rows='4' cols='50' maxlength='200' id='DescriptionLavorazioneId' class='DescriptionLavorazioneCl textariamio prodottofocusCl' name='DescriptionLavorazione'></textarea ></div>"
var codiceRegex //codice fiscale del cliente
let valori = [] //erray dei valori modificati 
let valeurInstant // il valore della cella modificata

var creaElementi = {
    creaClient: function () {
        $('.ContainDialCl').html(creaClient)
        $('input').focusout(function (event) {
            var r = /^[A-Za-z]{6}[0-9]{2}[ABCDEHLMPRSTabcdehlmprst]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$/

            if ($('#CodicefiscaleId').val().match(r)) {

                $('#CodicefiscaleId').css('color', 'green')
                // $('.ui-dialog-buttonpane button').prop('disabled', false)
                if ($('#SedeId').val() != 0 && $('#ViaId').val() != 0 && $('#RagineSocialeId').val() != 0 && $('#CodicefiscaleId').val() != 0) {
                    $('.ui-dialog-buttonpane button').prop('disabled', false)
                }
                codiceRegex = $('#CodicefiscaleId').val()
            } else {
                $('#CodicefiscaleId').css('color', 'red')
                $('.ui-dialog-buttonpane button').prop('disabled', true)
                $.notify('Codice fiscale sbagliato', 'error')
                return
            }
        })
        //$('input').focusin(function(){

        //    if($('#SedeId').val() != 0 && $('#ViaId').val() != 0 && $('#RagineSocialeId').val() != 0 && $('#CodicefiscaleId').val() != 0) {
        //    $('.ui-dialog-buttonpane button').prop('disabled', false)
        //}
        //}) 

        $('.ContainDialCl').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "INSERIMENTO CLIENTE",
            width: 730,
            height: 260,
            modal: true,
            open: function () {

                $('.ui-dialog-buttonpane button').prop('disabled', true)
            },
            buttons: {
                "INVIO": function () {

                    ListaFc.Clienti()
                    //Inserimento.Lavoratori();
                    $(this).dialog("close");
                    $('.ContainDialCl').html('');
                }
            },
            position: {
                my: "center center",
                at: "center center",
                of: window
            },
            focus: function (event, ui) {


            },
            close: function (event, ui) {
                //$(this).dialog("close");
                $('.ContainDialCl').html('');

            }





        })
    },
    creaLavoratore: function () {
        /*creation di lavorattore*/
        $('.ContainDialCl').html(creaLavorator)
        $('input').focusout(function () {

            if ($('.Nome_Utente_cl').val() != 0 && $('.Cognome_Utente_cl').val() && $('.Ruolo_Utente_cl').val() && $('.Utente_Utente_cl').val() && $('.Password_Utente_cl').val()) {
                $('.ui-dialog-buttonpane button').prop('disabled', false)
            } else {
                $('.ui-dialog-buttonpane button').prop('disabled', true)
            }
        })
        /*gestion deli ruoli lavorator*/
        for (p in tableauRuolo) {
            $('.Ruolo_Utente_cl').append("<option value=" + p + ">" + tableauRuolo[p] + "</option>")
        }
        $('.ContainDialCl').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "INSERIMENTO LAVORATORE",
            width: 730,
            height: 260,
            modal: true,
            open: function () {

                $('.ui-dialog-buttonpane button').prop('disabled', true)
            },
            buttons: {
                "INVIO": function () {

                    ListaFc.Lavoratori();
                    $(this).dialog("close");
                    $('.ContainDialCl').html('');
                }
            },
            position: {
                my: "center center",
                at: "center center",
                of: window
            },
            focus: function (event, ui) {


            },
            close: function (event, ui) {
                //$(this).dialog("close");
                $('.ContainDialCl').html('');

            }





        })},
    creaProdotto: function () {
        $('.ContainDialCl').html(creaProdotto)
        $('.prodottofocusCl').focusout(function () {
            if ($('.tipoProdottoCl').val() != 0 && $('.descrizioneProdottoCl').val() != 0) {
                $('.ui-dialog-buttonpane button').prop('disabled', false)
            } else {
                $('.ui-dialog-buttonpane button').prop('disabled', true)
            }
        })
        $('.ContainDialCl').dialog({
            resizable: false,
            draggable: false,
            title: "INSERIMENTO PRODOTTO",
            width: 380,
            height: 280,
            modal: true,
            open: function () {

                $('.ui-dialog-buttonpane button').prop('disabled', true)
            },
            buttons: {
                "INVIO": function () {

                    ListaFc.Prodotti();
                    $(this).dialog("close");
                    $('.ContainDialCl').html('');
                }
            },
            position: {
                my: "center center",
                at: "center center",
                of: window
            },
            focus: function (event, ui) {


            },
            close: function (event, ui) {
                //$(this).dialog("close");
                $('.ContainDialCl').html('');

            }





        })
    },
    creaTipolavorazione: function () {
        $('.ContainDialCl').html(creaTipoLavorazione)
        $('.prodottofocusCl').focusout(function () {
            if ($('.TipoLavorazioneCl').val() != 0 && $('.DescriptionLavorazioneCl').val() != 0) {
                $('.ui-dialog-buttonpane button').prop('disabled', false)
            } else {
                $('.ui-dialog-buttonpane button').prop('disabled', true)
            }
        })
        $('.ContainDialCl').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "INSERIMENTO TIPO LAVORAZIONE",
            width: 400,
            height: 245,
            modal: true,
            open: function () {

                $('.ui-dialog-buttonpane button').prop('disabled', true)
            },
            buttons: {
                "INVIO": function () {

                    ListaFc.Lavorazioni();
                    $(this).dialog("close");
                    $('.ContainDialCl').html('');
                }
            },
            position: {
                my: "center center",
                at: "center center",
                of: window
            },
            focus: function (event, ui) {


            },
            close: function (event, ui) {
                //$(this).dialog("close");
                $('.ContainDialCl').html('');


            }





        })
    },
}

var ListaFc = {
    /*gestire la couleur delle righe o delle column*/
    CouleurRiga: function (rd) {
        // Evidenzia righe con stato: Non assegnato o Dismesso
        if (rd.stato === "N" && !stato_filter) {
            return {
                "style": "background: #d18634; color: #ffffff; cursor: default;"
            };
        }
        if (rd.stato === "D" && !stato_filter) {
            return {
                "style": "background: #a2353e; color: #ffffff; cursor: default;"
            };
        }
    },

    /*lista dei lavoratore dentro la tabella jqgrid */
    ListaJqLavoratore: function (ev) {

        //let NomePersona = JSON.parse(sessionStorage.getItem('InstantUtent'))
        $('.listadeilaroratori').jqGrid({
            url: '../../Home/VB/Lavoratore.aspx',
            postData: {
                Type: 'LavoratorLista',


            },
            datatype: 'JSON',
            loadonce: false,
            mtype: 'get',
            //cellEdit: true,
            editurl: "clientArray",
            cellsubmit: 'clientArray',
            width: 450/*$(window).width() - 50*/,
            viewrecords: true,
            caption: "<div></div>",
            loadui:"disable",
            loadtext: loading(true)/*"<div><i class='fa fa-spinner fa-5x' aria-hidden='true'></i> </div>"*/,
            rowNum: 500,
            jsonReader: {
                root: 'rows',
                records: "records",
                page: "page",
                total: "total"

            },
            colModel: [
                {
                    name: 'Idimpiegati',
                    label: 'Id',
                    width: 5,
                    //resizable: false,
                    formatter: function (cellvalue, options, rowObject) {
                        let pop = 0
                        if (ev.delegateTarget.className == "ListaLavoratoreCl") {
                            return "<div><i class='fa fa-trash DeletLavoratore ' aria-hidden='true' data_valore='" + cellvalue + "'></i></div>"
                        } else if (ev.delegateTarget.className == "ModifListaLavoratoreCl") {
                            return "<div><i class='fa fa-wrench ModifLavoratore ' aria-hidden='true' data_valore='" + cellvalue + "'></i></div>"

                        }

                    },
                    formatoptions: {},
                    key: true,
                    align: "center",
                    hidden: false,
                    edittable: false,
                },
                {
                    name: "Nome",
                    label: "NOME",
                    hidden: false,
                    align: "left",
                    width: 50,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {

                    },
                    editable: true,
                    edittype: "text",
                    editoptions: {},
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr
                },
                {
                    name: "Cognome",
                    label: "Cognome",
                    align: "left",
                    width: 30,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: true,
                    edittype: "text",
                    editoptions: {

                    },
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr
                },
                {
                    name: "Ruolo",
                    label: "RUOLO",
                    align: "left",
                    width: 50,
                    fixed: false,
                    resizable: true,
                    formatter: "select",
                    formatoptions: {
                        value: tableauRuolo
                    },
                    editable: true,
                    edittype: "select",
                    editoptions: {
                        value: tableauRuolo
                    },
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr 
                },
                {
                    name: "Utente",
                    label: "UTENTE",
                    align: "left",
                    width: 50,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {

                    },
                    editable: true,
                    edittype: "text",
                    editoptions: {},
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr 
                },
            ],
            loadComplete: function (data) {
                NumeroRecord = $('#messagioTableId').jqGrid('getGridParam', 'records');
                $('.numeroRecords').html(NumeroRecord)
                //gestion dell'event della cancellazione d'un lavoratore

                
                $('.DeletLavoratore').on('click', function (event) {
                    $('.dialogConfermaCl').html("Vuoi eliminare definitivamente il lavoratore !?")
                    $('.dialogConfermaCl').dialog({
                        resizable: false,
                        draggable: false,
                        height: "auto",
                        title: "CONFERMA",
                        width: 430,
                        height: 150,
                        modal: true,
                        buttons: {
                            "INVIO": function () {

                                $.ajax({
                                    url: '/HomePage/VB/SVC/SrvLavoratore.svc',
                                    contentType: "application/json; charset=utf-8",
                                    data: event.target.attributes.data_valore.value

                                    ,
                                    type: "DELETE",
                                    datatype: "JSON",
                                    success: function (dati, status) {


                                        if (dati.EsitoP == true) {
                                            $(".listadeilaroratori").delRowData(parseInt(event.target.attributes.data_valore.value));
                                            $.notify('Operazione Riuscito', 'success')
                                        } else {
                                            $.notify('è successo un error', 'error')
                                        }

                                    },
                                    error: function (a, b, c) {
                                        let errore = false;
                                    },

                                })
                                $(this).dialog("close");
                                $('.dialogConfermaCl').html('');
                            }
                        },
                        position: {
                            my: "center center",
                            at: "center center",
                            of: window
                        },
                        focus: function (event, ui) {


                        },
                        close: function (event, ui) {
                            //$(this).dialog("close");
                            $('.dialogConfermaCl').html('');

                        }





                    })



                })

                loading(false)

            },
            gridComplete: function () {
                
            },
            loadError: function (a, b, c) {
                let riga = 0


            },
            ondblClickRow: function (rowid, iRow, iCol, e) {
                if (ev.delegateTarget.className == "ModifListaLavoratoreCl") {
                    $(".listadeilaroratori").jqGrid("setGridParam", {
                        cellEdit: true
                    });

                    $(".listadeilaroratori").jqGrid("editCell", iRow, iCol, true);
                    $(".listadeilaroratori").jqGrid("setGridParam", {
                        cellEdit: false
                    });
                }

            },

            beforeEditCell: function (rowid, name, val) {
                before_val = val;
            },

            afterEditCell: function (rowid, name, val, iRow, iCol) {
                var cellDOM = this.rows[iRow].cells[iCol],
                    oldKeydown, $cellInput = $("input, select, textarea", cellDOM),
                    events = $._data($cellInput[0], "events");
                if (events && events.keydown && events.keydown.length) {
                    oldKeydown = events.keydown[0].handler;
                    $cellInput.unbind("keydown", oldKeydown);
                    $cellInput.bind("keydown", function (e) {
                        $(".listadeilaroratori").jqGrid("setGridParam", {
                            cellEdit: true
                        });
                        oldKeydown.call(this, e);
                        $(".listadeilaroratori").jqGrid("setGridParam", {
                            cellEdit: false
                        });
                    });

                    let colModelP = $(".listadeilaroratori").getGridParam("colModel");

                    if (colModelP[iCol].formatter == "date") {

                        let mange = 2

                    }
                    else {

                        $cellInput.bind("focusout", function () {
                            $(".listadeilaroratori").jqGrid("setGridParam", {
                                cellEdit: true
                            });
                            $(".listadeilaroratori").jqGrid("saveCell", iRow, iCol, true);
                            $(".listadeilaroratori").jqGrid("setGridParam", {
                                cellEdit: false
                            });
                        });
                        $cellInput.bind("focusin", function () {
                            $(this).select();
                            $(this).on('change', function () {
                                $(".listadeilaroratori").jqGrid("saveCell", iRow, iCol, true);
                                let era = 0
                                valeurInstant = this.value

                            })
                        });
                    }
                }

            },
            beforeSaveCell: function (rowid, name, val, iRow, iCol) {


                let rollback = false;
                //let colModelP = $(".listadeilaroratori").getGridParam("colModel");

                //data_valore_mittente = $(this).jqGrid("getCell", rowid, "Lavoratore");
                //data_valore_destinatario = $(this).jqGrid("getCell", rowid, "Responsabile");
                let valore = {
                    valeur1P: valeurInstant,
                    NomeColumnP: name,
                    Id: rowid
                };
                //if (valori.length>0) {
                //    valori.push(',')
                //}
                valori.push(valore)

                if (!rollback) {
                   
                    
                }

                return rollback ? before_val : val

            },
        })
    },

    /*lista dei Clienti dentro la tabella jqgrid */
    ListaJqClienti: function (ev) {
        $('.listadeilaroratori').jqGrid({
            url: '../../Home/VB/Client.aspx',
            postData: {
                Type: 'ClientLista',

            },
            datatype: 'JSON',
            loadonce: false,
            mtype: 'get',
            //cellEdit: true,
            editurl: "clientArray",
            cellsubmit: 'clientArray',
            width: 450/*$(window).width() - 50*/,
            viewrecords: true,
            caption: "<div></div>",
            loadui:'disable',
            loadtext: loading(true)/*"<div><i class='fa fa-spinner fa-5x' aria-hidden='true'></i> </div>"*/,
            rowNum: 500,
            jsonReader: {
                root: 'rows',
                records: "records",
                page: "page",
                total: "total"

            },
            colModel: [
                {
                    name: 'IdCliente',
                    label: 'Id',
                    width: 5,
                    //resizable: false,
                    formatter: function (cellvalue, options, rowObject) {
                        let pop = 0
                        if (ev.delegateTarget.className == "ListaClient") {
                            return "<div><i class='fa fa-trash DeletClient ' aria-hidden='true' data_valore='" + cellvalue + "'></i></div>"
                        } else if (ev.delegateTarget.className == "ModifListaClientCl") {
                            return "<div><i class='fa fa-wrench ModifClient ' aria-hidden='true' data_valore='" + cellvalue + "'></i></div>"

                        }

                    },
                    formatoptions: {},
                    key: true,
                    align: "center",
                    hidden: false,
                    edittable: false,
                },
                {
                    name: "CodiceFiscale /p.iva",
                    label: "CODICE FISCALE",
                    hidden: false,
                    align: "left",
                    width: 50,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {

                    },
                    editable: true,
                    edittype: "text",
                    editoptions: {},
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr
                },
                {
                    name: "Sede in",
                    label: "CITTA",
                    align: "left",
                    width: 30,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: true,
                    edittype: "text",
                    editoptions: {

                    },
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr
                },
                {
                    name: "Via/Corso",
                    label: "STRADA",
                    align: "left",
                    width: 50,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {

                    },
                    editable: true,
                    edittype: "text",
                    editoptions: {

                    },
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr 
                },
                {
                    name: "Ragione Sociale Azienda",
                    label: "RAGIONE SOCIALE AZIENDA",
                    align: "left",
                    width: 100,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {

                    },
                    editable: true,
                    edittype: "text",
                    editoptions: {},
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr 
                },
            ],
            loadComplete: function (data) {
                NumeroRecord = $('#messagioTableId').jqGrid('getGridParam', 'records');
                $('.numeroRecords').html(NumeroRecord)
                //gestion dell'event della cancellazione d'un lavoratore
                $('.DeletClient').on('click', function (event) {
                    $('.dialogConfermaCl').html("Vuoi eliminare definitivamente il lavoratore ?")
                    $('.dialogConfermaCl').dialog({
                        resizable: false,
                        draggable: false,
                        height: "auto",
                        title: "CONFERMA",
                        width: 430,
                        height: 150,
                        modal: true,
                        buttons: {
                            "INVIO": function () {

                                $.ajax({
                                    url: '/HomePage/VB/SVC/SrvCliente.svc',
                                    contentType: "application/json; charset=utf-8",
                                    data: event.target.attributes.data_valore.value

                                    ,
                                    type: "DELETE",
                                    datatype: "JSON",
                                    success: function (dati, status) {

                                        let = dato = JSON.parse(dati.m_StringValue)
                                        console.log(dati.m_StringValue)
                                        if (dato.erreur == "fatto") {
                                            $(".listadeilaroratori").delRowData(parseInt(event.target.attributes.data_valore.value));
                                            $.notify('Operazione Riuscito', 'success')
                                        } else {
                                            $.notify('è successo un error', 'error')
                                        }

                                    },
                                    error: function (a, b, c) {
                                        let errore = false;
                                    },

                                })
                                $(this).dialog("close");
                                $('.dialogConfermaCl').html('');
                            }
                        },
                        position: {
                            my: "center center",
                            at: "center center",
                            of: window
                        },
                        focus: function (event, ui) {


                        },
                        close: function (event, ui) {
                            //$(this).dialog("close");
                            $('.dialogConfermaCl').html('');

                        }





                    })

                })
                $('.ModifClient').on('click', function (event) {
                    alert('salut')
                })
                loading(false)

            },
            loadError: function (a, b, c) {
                let riga = 0


            },
            ondblClickRow: function (rowid, iRow, iCol, e) {
                if (ev.delegateTarget.className == "ModifListaClientCl") {
                    $(".listadeilaroratori").jqGrid("setGridParam", {
                        cellEdit: true
                    });

                    $(".listadeilaroratori").jqGrid("editCell", iRow, iCol, true);
                    $(".listadeilaroratori").jqGrid("setGridParam", {
                        cellEdit: false
                    });             
                                         
                                   
                      
                      
                }

            },

            beforeEditCell: function (rowid, name, val) {
                before_val = val;
            },

            afterEditCell: function (rowid, name, val, iRow, iCol) {

                               

                var cellDOM = this.rows[iRow].cells[iCol],
                    oldKeydown, $cellInput = $("input, select, textarea", cellDOM),
                    events = $._data($cellInput[0], "events");
                if (events && events.keydown && events.keydown.length) {
                    oldKeydown = events.keydown[0].handler;
                    $cellInput.unbind("keydown", oldKeydown);
                    $cellInput.bind("keydown", function (e) {
                        $(".listadeilaroratori").jqGrid("setGridParam", {
                            cellEdit: true
                        });
                        oldKeydown.call(this, e);
                        $(".listadeilaroratori").jqGrid("setGridParam", {
                            cellEdit: false
                        });
                    });

                    let colModelP = $(".listadeilaroratori").getGridParam("colModel");

                    if (colModelP[iCol].formatter == "date") {

                        let mange = 2

                    }
                    else {

                        $cellInput.bind("focusout", function () {
                            $(".listadeilaroratori").jqGrid("setGridParam", {
                                cellEdit: true
                            });
                            $(".listadeilaroratori").jqGrid("saveCell", iRow, iCol, true);
                            $(".listadeilaroratori").jqGrid("setGridParam", {
                                cellEdit: false
                            });
                        });
                        $cellInput.bind("focusin", function () {
                            $(this).select();
                            $(this).on('change', function () {
                                $(".listadeilaroratori").jqGrid("saveCell", iRow, iCol, true);
                                let era = 0
                               valeurInstant= this.value
                                
                            })
                        });
                    }
                }
            },
            beforeSaveCell: function (rowid, name, val, iRow, iCol) {

                let rollback = false;
                //let colModelP = $(".listadeilaroratori").getGridParam("colModel");

                //data_valore_mittente = $(this).jqGrid("getCell", rowid, "Lavoratore");
                //data_valore_destinatario = $(this).jqGrid("getCell", rowid, "Responsabile");
               
                let valore = {
                    valeur1P: valeurInstant,
                    NomeColumnP: name,
                    Id: rowid
                };
                //if (valori.length>0) {
                //    valori.push(',')
                //}
                valori.push(valore)


                if (!rollback) {
                    /*let valore = {
                        valeur1P: val,
                        NomeColumnP: name,
                        Id: rowid
                    };
                    valori.push(valore)*/
                    //$.ajax({
                    //    url: '/HomePage/VB/SVC/SrvCliente.svc',
                    //    contentType: "application/json; charset=utf-8",
                    //    data: JSON.stringify(valore),
                    //    type: 'PUT',
                    //    datatype: 'JSON',
                    //    async: false,
                    //    success: function (dati, status) {

                    //        //let dato = JSON.parse(dati)
                    //        //console.log(dati)
                    //        if (dati.EsitoP == true) {

                    //            $.notify('Operazione Riuscito', 'success')
                    //        } else {
                    //            rollback = true;
                    //            $.notify('è successo un error', 'error')

                    //        }


                    //    },
                    //    error: function (risultat, status, erreur) {
                    //        rollback = true;
                    //    }
                    //})
                }

                return rollback ? before_val : val
                //let BeforValore = {
                //    valeur1P: before_val,
                //    NomeColumnP: name,
                //    Id: rowid
                //};

            },
        })
    },

    /*lista dei Prodotti dentro la tabella jqgrid */
    ListaJqProdotto: function (ev) {
        $('.listadeilaroratori').jqGrid({
            url: '../../Home/VB/Prodott.aspx',
            postData: {
                Type: 'ProdottoLista',


            },
            datatype: 'JSON',
            loadonce: false,
            mtype: 'get',
            //cellEdit: true,
            editurl: "clientArray",
            cellsubmit: 'clientArray',
            width: 450/*$(window).width() - 50*/,
            viewrecords: true,
            caption: "<div></div>",
            loadui:'disable',
            loadtext:loading(true) /*"<div><i class='fa fa-spinner fa-5x' aria-hidden='true'></i> </div>"*/,
            rowNum: 500,
            jsonReader: {
                root: 'rows',
                records: "records",
                page: "page",
                total: "total"

            },
            colModel: [
                {
                    name: 'IdProdotto',
                    label: 'Id',
                    width: 5,
                    //resizable: false,
                    formatter: function (cellvalue, options, rowObject) {
                        let pop = 0
                        if (ev.delegateTarget.className == "ListaProdotto") {
                            return "<div><i class='fa fa-trash DeletProdotto ' aria-hidden='true' data_valore='" + cellvalue + "'></i></div>"
                        } else if (ev.delegateTarget.className == "ModifListaProdottoCl") {
                            return "<div><i class='fa fa-wrench ModifLavoratore ' aria-hidden='true' data_valore='" + cellvalue + "'></i></div>"

                        }

                    },
                    formatoptions: {},
                    key: true,
                    align: "center",
                    hidden: false,
                    edittable: false,
                },
                {
                    name: "Description",
                    label: "DESCRIZIONE",
                    hidden: false,
                    align: "left",
                    width: 50,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {

                    },
                    editable: true,
                    edittype: "text",
                    editoptions: {},
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr
                },
                {
                    name: "Tipo",
                    label: "TIPO",
                    align: "left",
                    width: 30,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: true,
                    edittype: "text",
                    editoptions: {

                    },
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr
                },

            ],
            loadComplete: function (data) {
                NumeroRecord = $('#messagioTableId').jqGrid('getGridParam', 'records');
                $('.numeroRecords').html(NumeroRecord)
                //gestion dell'event della cancellazione d'un lavoratore
                $('.DeletProdotto').on('click', function (event) {
                    $('.dialogConfermaCl').html("Vuoi eliminare definitivamente il Prodotto ?")
                    $('.dialogConfermaCl').dialog({
                        resizable: false,
                        draggable: false,
                        height: "auto",
                        title: "CONFERMA",
                        width: 430,
                        height: 150,
                        modal: true,
                        buttons: {
                            "INVIO": function () {

                                $.ajax({
                                    url: '/HomePage/VB/SVC/SrvProdotto.svc',
                                    contentType: "application/json; charset=utf-8",
                                    data: event.target.attributes.data_valore.value

                                    ,
                                    type: "DELETE",
                                    datatype: "JSON",
                                    success: function (dati, status) {


                                        if (dati.EsitoP == true) {
                                            $(".listadeilaroratori").delRowData(parseInt(event.target.attributes.data_valore.value));
                                            $.notify('Operazione Riuscito', 'success')
                                        } else {
                                            $.notify('è successo un error', 'error')
                                        }


                                    },
                                    error: function (a, b, c) {
                                        let errore = false;
                                    },

                                })
                                $(this).dialog("close");
                                $('.dialogConfermaCl').html('');
                            }
                        },
                        position: {
                            my: "center center",
                            at: "center center",
                            of: window
                        },
                        focus: function (event, ui) {


                        },
                        close: function (event, ui) {
                            //$(this).dialog("close");
                            $('.dialogConfermaCl').html('');

                        }





                    })



                })

                loading(false)

            },
            loadError: function (a, b, c) {
                let riga = 0


            },
            ondblClickRow: function (rowid, iRow, iCol, e) {
                if (ev.delegateTarget.className == "ModifListaProdottoCl") {
                    $(".listadeilaroratori").jqGrid("setGridParam", {
                        cellEdit: true
                    });

                    $(".listadeilaroratori").jqGrid("editCell", iRow, iCol, true);
                    $(".listadeilaroratori").jqGrid("setGridParam", {
                        cellEdit: false
                    });
                }

            },

            beforeEditCell: function (rowid, name, val) {
                before_val = val;
            },

            afterEditCell: function (rowid, name, val, iRow, iCol) {

                var cellDOM = this.rows[iRow].cells[iCol],
                    oldKeydown, $cellInput = $("input, select, textarea", cellDOM),
                    events = $._data($cellInput[0], "events");
                if (events && events.keydown && events.keydown.length) {
                    oldKeydown = events.keydown[0].handler;
                    $cellInput.unbind("keydown", oldKeydown);
                    $cellInput.bind("keydown", function (e) {
                        $(".listadeilaroratori").jqGrid("setGridParam", {
                            cellEdit: true
                        });
                        oldKeydown.call(this, e);
                        $(".listadeilaroratori").jqGrid("setGridParam", {
                            cellEdit: false
                        });
                    });

                    let colModelP = $(".listadeilaroratori").getGridParam("colModel");

                    if (colModelP[iCol].formatter == "date") {

                        let mange = 2

                    }
                    else {

                        $cellInput.bind("focusout", function () {
                            $(".listadeilaroratori").jqGrid("setGridParam", {
                                cellEdit: true
                            });
                            $(".listadeilaroratori").jqGrid("saveCell", iRow, iCol, true);
                            $(".listadeilaroratori").jqGrid("setGridParam", {
                                cellEdit: false
                            });
                        });
                        $cellInput.bind("focusin", function () {
                            $(this).select();
                            $(this).on('change', function () {
                                $(".listadeilaroratori").jqGrid("saveCell", iRow, iCol, true);
                                let era = 0
                                valeurInstant = this.value

                            })
                        });
                    }
                }
            },
            beforeSaveCell: function (rowid, name, val, iRow, iCol) {


                let rollback = false;
                //let colModelP = $(".listadeilaroratori").getGridParam("colModel");

                //data_valore_mittente = $(this).jqGrid("getCell", rowid, "Lavoratore");
                //data_valore_destinatario = $(this).jqGrid("getCell", rowid, "Responsabile");
                let valore = {
                    valeur1P: valeurInstant,
                    NomeColumnP: name,
                    Id: rowid
                };
                //if (valori.length>0) {
                //    valori.push(',')
                //}
                valori.push(valore)

                if (!rollback) {



                    //$.ajax({
                    //    url: '/HomePage/VB/SVC/SrvProdotto.svc',
                    //    contentType: "application/json; charset=utf-8",
                    //    data: JSON.stringify(valori),
                    //    type: 'PUT',
                    //    datatype: 'JSON',
                    //    async: false,
                    //    success: function (dati, status) {

                    //        //let dato = JSON.parse(dati)
                    //        //console.log(dati)
                    //        if (dati.EsitoP == true) {

                    //            $.notify('Operazione Riuscito', 'success')
                    //        } else {
                    //            rollback = true;
                    //            $.notify('è successo un error', 'error')

                    //        }


                    //    },
                    //    error: function (risultat, status, erreur) {
                    //        rollback = true;
                    //    }
                    //})
                }

                return rollback ? before_val : val

            },
        })
    },

    /*lista dei TipoLAvorazione dentro la tabella jqgrid */
    ListaJqTipoLavorazione: function (ev) {
        $('.listadeilaroratori').jqGrid({
            url: '../../Home/VB/Lavorazion.aspx',
            postData: {
                Type: 'TipoLavorazionLista',


            },
            datatype: 'JSON',
            loadonce: false,
            mtype: 'get',
            //cellEdit: true,
            editurl: "clientArray",
            cellsubmit: 'clientArray',
            width: 450/*$(window).width() - 50*/,
            viewrecords: true,
            caption: "<div></div>",
            loadui:'disable',
            loadtext:loading(true) /*"<div><i class='fa fa-spinner fa-5x' aria-hidden='true'></i> </div>"*/,
            rowNum: 500,
            jsonReader: {
                root: 'rows',
                records: "records",
                page: "page",
                total: "total"

            },
            colModel: [
                {
                    name: 'IdTipoLavorazione',
                    label: 'Id',
                    width: 5,
                    //resizable: false,
                    formatter: function (cellvalue, options, rowObject) {
                        let pop = 0
                        if (ev.delegateTarget.className == "ListaTipoLavorazione") {
                            return "<div><i class='fa fa-trash DeletTipoLavorazione ' aria-hidden='true' data_valore='" + cellvalue + "'></i></div>"
                        } else if (ev.delegateTarget.className == "ModifListaTipoLavorazioneCl") {
                            return "<div><i class='fa fa-wrench ModifTipoLavorazione ' aria-hidden='true' data_valore='" + cellvalue + "'></i></div>"

                        }

                    },
                    formatoptions: {},
                    key: true,
                    align: "center",
                    hidden: false,
                    edittable: false,
                },
                {
                    name: "DescriptionLavorazione",
                    label: "DESCRIZIONE",
                    hidden: false,
                    align: "left",
                    width: 50,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {

                    },
                    editable: true,
                    edittype: "text",
                    editoptions: {},
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr
                },
                {
                    name: "TipoLavorazione",
                    label: "TIPO",
                    align: "left",
                    width: 30,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: true,
                    edittype: "text",
                    editoptions: {

                    },
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr
                },

            ],
            loadComplete: function (data) {
                NumeroRecord = $('#messagioTableId').jqGrid('getGridParam', 'records');
                $('.numeroRecords').html(NumeroRecord)
                //gestion dell'event della cancellazione d'un lavoratore
                $('.DeletTipoLavorazione').on('click', function (event) {
                    $('.dialogConfermaCl').html("Vuoi eliminare definitivamente questa Lavorazione ?")
                    $('.dialogConfermaCl').dialog({
                        resizable: false,
                        draggable: false,
                        height: "auto",
                        title: "CONFERMA",
                        width: 430,
                        height: 150,
                        modal: true,
                        buttons: {
                            "INVIO": function () {

                                $.ajax({
                                    url: '/HomePage/VB/SVC/SrvTipoLavorazione.svc',
                                    contentType: "application/json; charset=utf-8",
                                    data: event.target.attributes.data_valore.value

                                    ,
                                    type: "DELETE",
                                    datatype: "JSON",
                                    success: function (dati, status) {


                                        if (dati.EsitoP == true) {
                                            $(".listadeilaroratori").delRowData(parseInt(event.target.attributes.data_valore.value));
                                            $.notify('Operazione Riuscito', 'success')
                                        } else {
                                            $.notify('è successo un error', 'error')
                                        }

                                    },
                                    error: function (a, b, c) {
                                        let errore = false;
                                    },

                                })
                                $(this).dialog("close");
                                $('.dialogConfermaCl').html('');
                            }
                        },
                        position: {
                            my: "center center",
                            at: "center center",
                            of: window
                        },
                        focus: function (event, ui) {


                        },
                        close: function (event, ui) {
                            //$(this).dialog("close");
                            $('.dialogConfermaCl').html('');

                        }





                    })



                })

                loading(false)

            },
            loadError: function (a, b, c) {
                let riga = 0


            },
            ondblClickRow: function (rowid, iRow, iCol, e) {

                if (ev.delegateTarget.className == "ModifListaTipoLavorazioneCl") {
                    $(".listadeilaroratori").jqGrid("setGridParam", {
                        cellEdit: true
                    });

                    $(".listadeilaroratori").jqGrid("editCell", iRow, iCol, true);
                    $(".listadeilaroratori").jqGrid("setGridParam", {
                        cellEdit: false
                    });
                }

            },

            beforeEditCell: function (rowid, name, val) {
                before_val = val;
            },

            afterEditCell: function (rowid, name, val, iRow, iCol) {

                var cellDOM = this.rows[iRow].cells[iCol],
                    oldKeydown, $cellInput = $("input, select, textarea", cellDOM),
                    events = $._data($cellInput[0], "events");
                if (events && events.keydown && events.keydown.length) {
                    oldKeydown = events.keydown[0].handler;
                    $cellInput.unbind("keydown", oldKeydown);
                    $cellInput.bind("keydown", function (e) {
                        $(".listadeilaroratori").jqGrid("setGridParam", {
                            cellEdit: true
                        });
                        oldKeydown.call(this, e);
                        $(".listadeilaroratori").jqGrid("setGridParam", {
                            cellEdit: false
                        });
                    });

                    let colModelP = $(".listadeilaroratori").getGridParam("colModel");

                    if (colModelP[iCol].formatter == "date") {

                        let mange = 2

                    }
                    else {

                        $cellInput.bind("focusout", function () {
                            $(".listadeilaroratori").jqGrid("setGridParam", {
                                cellEdit: true
                            });
                            $(".listadeilaroratori").jqGrid("saveCell", iRow, iCol, true);
                            $(".listadeilaroratori").jqGrid("setGridParam", {
                                cellEdit: false
                            });
                        });
                        $cellInput.bind("focusin", function () {
                            $(this).select();
                            $(this).on('change', function () {
                                $(".listadeilaroratori").jqGrid("saveCell", iRow, iCol, true);
                                let era = 0
                                valeurInstant = this.value

                            })
                        });
                    }
                }

            },
            beforeSaveCell: function (rowid, name, val, iRow, iCol) {


                let rollback = false;
                //let colModelP = $(".listadeilaroratori").getGridParam("colModel");

                //data_valore_mittente = $(this).jqGrid("getCell", rowid, "Lavoratore");
                //data_valore_destinatario = $(this).jqGrid("getCell", rowid, "Responsabile");
                let valore = {
                    valeur1P: valeurInstant,
                    NomeColumnP: name,
                    Id: rowid
                };
                //if (valori.length>0) {
                //    valori.push(',')
                //}
                valori.push(valore)


                if (!rollback) {
                    
                    //$.ajax({
                    //    url: '/HomePage/VB/SVC/SrvTipoLavorazione.svc',
                    //    contentType: "application/json; charset=utf-8",
                    //    data: JSON.stringify(valori),
                    //    type: 'PUT',
                    //    datatype: 'JSON',
                    //    async: false,
                    //    success: function (dati, status) {

                    //        //let dato = JSON.parse(dati)
                    //        //console.log(dati)
                    //        if (dati.EsitoP == true) {

                    //            $.notify('Operazione Riuscito', 'success')
                    //        } else {
                    //            rollback = true;
                    //            $.notify('è successo un error', 'error')

                    //        }


                    //    },
                    //    error: function (risultat, status, erreur) {
                    //        rollback = true;
                    //    }
                    //})
                }

                return rollback ? before_val : val

            },
        })
    },

    /*Creazione Cliente*/
    Clienti: function () {
        $.ajax({
            url: '/HomePage/VB/SVC/SrvCliente.svc',
            data: JSON.stringify( {

                Type: 'inserimentoClient',
                CodiceFiscale: codiceRegex/*$('#CodicefiscaleId').val()*/,
                Sede: $('#SedeId').val(),
                ViaCorso: $('#ViaId').val(),
                RagioneSocialeAzienda: $('#RagineSocialeId').val()

            }),
            contentType: "application/json; charset=utf-8",            
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati.EsitoP == true) {
                    $('#CodicefiscaleId').val('')
                    $('#SedeId').val('')
                    $('#ViaId').val('')
                    $('#RagineSocialeId').val('')
                    $.notify('Cliente creato ','success')

                } else if (dati.EsitoP == false) {

                    $.notify("Cliente existente ", 'error')
                } else {

                    $.notify('è successo un error','error')
                }

            },
            Error: function (risultat, status, erreur) {
                let pipo=0
            },
            complete: function (dati) {
                // load.Disableloading()
            }
        })
    },

/* Creazione Lavoratore*/
    Lavoratori: function () {        
        $.ajax({
            url: '/HomePage/VB/SVC/SrvLavoratore.svc',
            data:JSON.stringify( {
                Type: "creazioneLavorator",
                Nome: $('#Nome_Utente_id').val(),
                Cognome: $('#Cognome_Utente_id').val(),
                Ruolo: $('#Ruolo_Utente_id').val(),
                Utente: $('#Utente_Utente_id').val(),
                Password: $('#Password_Utente_id').val()

            }),
            contentType: "application/json; charset=utf-8",
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati.EsitoP == true) {
                    $('#Nome_Utente_id').val('')
                    $('#Cognome_Utente_id').val('')
                    $('#Ruolo_Utente_id').val('')
                    $('#Utente_Utente_id').val('')
                    $('#Password_Utente_id').val('')
                    $.notify('utente creato ','success')

                } else if (dati.EsitoP == false) {

                    $.notify("utente existente ","error")
                } else {

                    $.notify('è successo un error',"error")
                }

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
        })
    },

    /*Creazion Prodotto*/
    Prodotti: function () {
        $.ajax({
            url: '/HomePage/VB/SVC/SrvProdotto.svc',
            data:JSON.stringify({
                
                Tipo: $('#tipoProdottoId').val(),
                Description: $('#descrizioneProdottoId').val(),
                QuantitaInitial: 1//$('#MerceQuantitaRimastaId').val(),               


            }),
            contentType: "application/json; charset=utf-8",
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati.EsitoP == true) {
                    $('#tipoProdottoId').val('')
                    $('#descrizioneProdottoId').val('')
                    $('#MerceQuantitaRimastaId').val('')


                    $.notify('Prodotto creato ','success')

                } else if (dati.EsitoP == false) {

                    $.notify("Prodotto existente ","error")
                } else {

                    $.notify('è successo un error', "error")
                }

            },
            Error: function () { },
            complete: function (dati) {
                //load.Disableloading()
            }
        })
    },

    //creation d'un lavorazione
    Lavorazioni: function () {
        $.ajax({
            url: '/HomePage/VB/SVC/SrvTipoLavorazione.svc',
            data:JSON.stringify({
                
                TipoLavorazione: $('#TipoLavorazioneId').val(),
                Description: $('#DescriptionLavorazioneId').val(),

            }),
            contentType: "application/json; charset=utf-8",
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati.EsitoP == true) {
                    $('#TipoLavorazioneId').val('')
                    $('#DescriptionLavorazioneId').val('')


                    $.notify('Prodotto creato ','success')

                } else if (dati.EsitoP == false) {

                    $.notify("Prodotto existente ",'error')
                } else {

                    $.notify('è successo un error','error')
                }

            },
            Error: function () { },
            complete: function (dati) {
                //load.Disableloading()
            }
        })
    },
}

function loading(status) {
    switch (status) {
        case true:
            $(".listadeilaroratori").LoadingOverlay("show", {
                background: "rgba(0, 0, 0, 0.0)",
                fade: false,
                imageAutoResize: false,
                imageResizeFactor: 2.6,
                imageColor: "#ffee01"
            });
            break;
        case false:
            $(".listadeilaroratori").LoadingOverlay("hide", {
                fade: true
            });
            break;
    }
}

$(function () {
        /* gestion dell'event click sul tab  tabelle*/
    $('.TabTabelleCL').on('click', function () {
         /*creation della finestra della tab tabelle*/
        $('.HomeTabTabelleCl').html(tabelles)
        
        $('.dropbtn').click(function () {
            $(this).next().toggleClass('show');
        /*gestion del click su botton Lavoratore*/
            $('.CreaLavoratoreCl').on('click', function () {                
                /*creation di lavorattore*/
                creaElementi.creaLavoratore()

            })
            /*lista dei lavoratori*/
            $('.ListaLavoratoreCl').on('click', function (ev) {
                $('.ContainDialCl').html("<div class='listLavoraCl'><table class='listadeilaroratori'> </table></div>")
                ListaFc.ListaJqLavoratore(ev)
                $('.ContainDialCl').dialog({
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    title: "LISTA LAVORATORE",
                    width: 505,
                    height: 340,
                    modal: true,
                    buttons: {
                        "INVIO": function () {

                            //Inserimento.Lavoratori();
                            $(this).dialog("close");
                            $('.listLavoraCl').html('');
                        }
                    },
                    position: {
                        my: "center center",
                        at: "center center",
                        of: window
                    },
                    focus: function (event, ui) {


                    },
                    close: function (event, ui) {
                        //$(this).dialog("close");
                        $('.listLavoraCl').html('');

                    }





                })
            })

            //gestion dell'event della modifica d'un lavoratore
            $('.ModifListaLavoratoreCl').on('click', function (ev) {
                $('.ContainDialCl').html("<div class='listLavoraCl'><table class='listadeilaroratori'> </table></div>")
                ListaFc.ListaJqLavoratore(ev)
                $('.ContainDialCl').dialog({
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    title: "LISTA LAVORATORE",
                    width: 505,
                    height: 340,
                    modal: true,
                    buttons: {
                        "INVIO": function () {

                            $.ajax({
                                url: '/HomePage/VB/SVC/SrvLavoratore.svc',
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(valori),
                                type: 'PUT',
                                datatype: 'JSON',
                                async: false,
                                success: function (dati, status) {

                                    //let dato = JSON.parse(dati)
                                    //console.log(dati)
                                    if (dati.EsitoP == true) {

                                        $.notify('Operazione Riuscito', 'success')
                                    } else {
                                        rollback = true;
                                        $.notify('è successo un error', 'error')

                                    }


                                },
                                error: function (risultat, status, erreur) {
                                    rollback = true;
                                }
                            })
                            $(this).dialog("close");
                            valori.length=0
                            $('.listLavoraCl').html('');
                        }
                    },
                    position: {
                        my: "center center",
                        at: "center center",
                        of: window
                    },
                    focus: function (event, ui) {


                    },
                    close: function (event, ui) {
                        //$(this).dialog("close");
                        $('.listLavoraCl').html('');

                    }





                })
            })  
            
            //creation di clienti
            $('.CreaCliente').on('click', function () {
                
               creaElementi.creaClient()
            })

            //lista Clienti
            $('.ListaClient').on('click', function (ev) {
                $('.ContainDialCl').html("<div class='listLavoraCl'><table class='listadeilaroratori'> </table></div>")
                ListaFc.ListaJqClienti(ev)
                $('.ContainDialCl').dialog({
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    title: "LISTA CLIENTI",
                    width: 505,
                    height: 340,
                    modal: true,
                    buttons: {
                        "INVIO": function () {

                           
                            //Inserimento.Lavoratori();
                            $(this).dialog("close");
                            $('.listLavoraCl').html('');
                        }
                    },
                    position: {
                        my: "center center",
                        at: "center center",
                        of: window
                    },
                    focus: function (event, ui) {


                    },
                    close: function (event, ui) {
                        //$(this).dialog("close");
                        $('.listLavoraCl').html('');

                    }





                })
            })

            //gestion dell'event della modifica d'un Clienti
            $('.ModifListaClientCl').on('click', function (ev) {
                $('.ContainDialCl').html("<div class='listLavoraCl'><table class='listadeilaroratori'> </table></div>")
                ListaFc.ListaJqClienti(ev)
                $('.ContainDialCl').dialog({
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    title: "MODIFICA CLIENTI",
                    width: 505,
                    height: 340,
                    modal: true,
                    buttons: {
                        "INVIO": function () {

                            $.ajax({
                                url: '/HomePage/VB/SVC/SrvCliente.svc',
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(valori),
                                type: 'PUT',
                                datatype: 'JSON',
                                async: false,
                                success: function (dati, status) {

                                    //let dato = JSON.parse(dati)
                                    //console.log(dati)
                                    if (dati.EsitoP == true) {

                                        $.notify('Operazione Riuscito', 'success')
                                    } else {
                                        rollback = true;
                                        $.notify('è successo un error', 'error')

                                    }


                                },
                                error: function (risultat, status, erreur) {
                                    rollback = true;
                                }
                            })
                            //Inserimento.Lavoratori();
                            $(this).dialog("close");
                            valori.length = 0
                            $('.listLavoraCl').html('');
                        }
                    },
                    position: {
                        my: "center center",
                        at: "center center",
                        of: window
                    },
                    focus: function (event, ui) {


                    },
                    close: function (event, ui) {
                        //$(this).dialog("close");
                        $('.listLavoraCl').html('');

                    }





                })
            })

            //creation di Prodotto
            $('.CreaProdotto').on('click', function () {
             
                creaElementi.creaProdotto()
            })

            //lista Prodotto
            $('.ListaProdotto').on('click', function (ev) {
                $('.ContainDialCl').html("<div class='listLavoraCl'><table class='listadeilaroratori'> </table></div>")
                ListaFc.ListaJqProdotto(ev)
                $('.ContainDialCl').dialog({
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    title: "LISTA PRODOTTO",
                    width: 505,
                    height: 340,
                    modal: true,
                    buttons: {
                        "INVIO": function () {

                            //Inserimento.Lavoratori();
                            $(this).dialog("close");
                            $('.listLavoraCl').html('');
                        }
                    },
                    position: {
                        my: "center center",
                        at: "center center",
                        of: window
                    },
                    focus: function (event, ui) {


                    },
                    close: function (event, ui) {
                        //$(this).dialog("close");
                        $('.listLavoraCl').html('');

                    }





                })
            })

            //gestion dell'event della modifica d'un Prodotto
            $('.ModifListaProdottoCl').on('click', function (ev) {
                $('.ContainDialCl').html("<div class='listLavoraCl'><table class='listadeilaroratori'> </table></div>")
                ListaFc.ListaJqProdotto(ev)
                $('.ContainDialCl').dialog({
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    title: "LISTA PRODOTTO",
                    width: 505,
                    height: 340,
                    modal: true,
                    buttons: {
                        "INVIO": function () {

                            $.ajax({
                                url: '/HomePage/VB/SVC/SrvProdotto.svc',
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(valori),
                                type: 'PUT',
                                datatype: 'JSON',
                                async: false,
                                success: function (dati, status) {

                                    //let dato = JSON.parse(dati)
                                    //console.log(dati)
                                    if (dati.EsitoP == true) {

                                        $.notify('Operazione Riuscito', 'success')
                                    } else {
                                        rollback = true;
                                        $.notify('è successo un error', 'error')

                                    }


                                },
                                error: function (risultat, status, erreur) {
                                    rollback = true;
                                }
                            })
                            //Inserimento.Lavoratori();
                            $(this).dialog("close");
                            valori.length = 0
                            $('.listLavoraCl').html('');
                        }
                    },
                    position: {
                        my: "center center",
                        at: "center center",
                        of: window
                    },
                    focus: function (event, ui) {


                    },
                    close: function (event, ui) {
                        //$(this).dialog("close");
                        $('.listLavoraCl').html('');

                    }





                })
            })

             //creation di TipoLavorazione
            $('.CreaTipoLavorazione').on('click', function () {
                
                creaElementi.creaTipolavorazione()
            })

            //lista TipoLavorazione
            $('.ListaTipoLavorazione').on('click', function (ev) {
                $('.ContainDialCl').html("<div class='listLavoraCl'><table class='listadeilaroratori'> </table></div>")
                ListaFc.ListaJqTipoLavorazione(ev)
                $('.ContainDialCl').dialog({
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    title: "LISTA TIPO LAVORAZIONE",
                    width: 505,
                    height: 340,
                    modal: true,
                    buttons: {
                        "INVIO": function () {

                            //Inserimento.Lavoratori();
                            $(this).dialog("close");
                            $('.listLavoraCl').html('');
                        }
                    },
                    position: {
                        my: "center center",
                        at: "center center",
                        of: window
                    },
                    focus: function (event, ui) {


                    },
                    close: function (event, ui) {
                        //$(this).dialog("close");
                        $('.listLavoraCl').html('');

                    }





                })
            })

            //gestion dell'event della modifica d'un TipoLavorazione
            $('.ModifListaTipoLavorazioneCl').on('click', function (ev) {
                $('.ContainDialCl').html("<div class='listLavoraCl'><table class='listadeilaroratori'> </table></div>")
                ListaFc.ListaJqTipoLavorazione(ev)
                $('.ContainDialCl').dialog({
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    title: "LISTA TIPO LAVORAZIONE",
                    width: 505,
                    height: 340,
                    modal: true,
                    buttons: {
                        "INVIO": function () {

                            $.ajax({
                                url: '/HomePage/VB/SVC/SrvTipoLavorazione.svc',
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(valori),
                                type: 'PUT',
                                datatype: 'JSON',
                                async: false,
                                success: function (dati, status) {

                                    //let dato = JSON.parse(dati)
                                    //console.log(dati)
                                    if (dati.EsitoP == true) {

                                        $.notify('Operazione Riuscito', 'success')
                                    } else {
                                        rollback = true;
                                        $.notify('è successo un error', 'error')

                                    }


                                },
                                error: function (risultat, status, erreur) {
                                    rollback = true;
                                }
                            })
                            //Inserimento.Lavoratori();
                            $(this).dialog("close");
                            valori.length = 0
                            $('.listLavoraCl').html('');
                        }
                    },
                    position: {
                        my: "center center",
                        at: "center center",
                        of: window
                    },
                    focus: function (event, ui) {


                    },
                    close: function (event, ui) {
                        //$(this).dialog("close");
                        $('.listLavoraCl').html('');

                    }





                })
            })
        });
        //window.location.pathname = "../../TAB/TABELLE/Template/Tabelle.html"
        
    });

   
})