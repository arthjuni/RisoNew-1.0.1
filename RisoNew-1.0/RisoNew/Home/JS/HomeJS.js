

$(function () {

    $('#nav_id1').tabs(
        {
        active: 0
        }
    );
     
})




let NomeUtente = JSON.parse(sessionStorage.getItem("InstantUtent"))

$(window).resize(function () {
    this.console.log('la hauteur della finestra : ' + $(this.window).height())

    this.console.log('la largeur della finestra : ' + $(this.window).width())

    let hauteurdetab = $('#tabOrdine1').height()
    let largeur = $('#tabOrdine1').width()
    this.console.log('TAB---')
    this.console.log('la hauteur du contenu de la tab est: ' + hauteurdetab)
    this.console.log('la largeur du contenu de la tab est: ' + largeur)
    this.console.log('contenueTABLeau---')


    $('#tbordine_id').jqGrid('setGridWidth', parseInt($('#tabOrdine1').width()) - 20)
    //$('#tbordine_id').jqGrid('setGridHeight', parseInt($('#tabOrdine1').height()) - 20)


})

var load = {
    loaderhtml: function () {
        $('#divcontenutoId').append("<div id='containe_image_loading_id' class='containe_image_loading_Cl'></div >")
        $('#containe_image_loading_id').html("<img src ='../../Image/ajaxloader.gif' class='imgloading_Cl' id ='imgloading_Id' />")
        let vre = 0
    },
    activeloading: function () {
        $('#containe_image_loading_id').show()
    },
    Disableloading: function () {
        $('#containe_image_loading_id').hide()
    }
}//gestion del loading

var JQ = {
    CreaOrdine: function () {
        $('#tb_ordineId').jqGrid({
            datatype: 'JSON',
            loadonce: false,
            mtype: 'get',
            width: $(window).width() - 50,
            viewrecords: true,
            caption: "<i class='fa fa- plus ' id='bt_add_row_id' aria-hidden='true' ></i>",
            loadtext: 'caricamento',
            rowNum: 500,
            jsonReader: {
                root: 'LST_ORDINE',
                //page: '',
                //records: function (obj) { return obj.LST_ORDINE.length}
            },
            colModel: [
                {
                    name: 'IdOrdine',
                    label: 'Id',
                    width: 10,
                    //resizable: false,
                    formatter: 'integer',
                    formatoptions: {},
                    key: true,
                    hidden: true,
                    edittable: false,
                },
                {
                    name: "IdLavoro",
                    label: "Lavoro",
                    align: "left",
                    width: 250,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: false,
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
                    name: "UtenteM",
                    label: "UTENTE",
                    align: "left",
                    width: 250,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: false,
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
                    name: "IdMerce",
                    label: "PRODOTTO",
                    align: "left",
                    width: 250,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: false,
                    edittype: "text",
                    editoptions: {},
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    // cellattr: pcCellattr
                },
                {
                    name: "QuantitaRichiesta",
                    label: "QUANTITA",
                    align: "left",
                    width: 250,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: false,
                    edittype: "text",
                    editoptions: {},
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    // cellattr: pcCellattr
                },
                {
                    name: "IdCliente",
                    label: "CLIENTE",
                    align: "left",
                    width: 250,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: false,
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
                    name: "Stato",
                    label: "STATO",
                    align: "left",
                    width: 250,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: false,
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
                    name: "description",
                    label: "DESCRIZIONE",
                    align: "left",
                    width: 250,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: false,
                    edittype: "text",
                    editoptions: {},
                    search: true,
                    stype: "text",
                    searchoptions: { sopt: ["cn"] },
                    sortable: true,
                    sorttype: "text",
                    //cellattr: pcCellattr
                }, {
                    label: 'DATA CHIUSURA',
                    name: 'DataChiusura',
                    align: "center",
                    width: 95,
                    fixed: true,
                    resizable: false,
                    formatter: "date",
                    formatoptions: {
                        srcformat: "d/m/Y",
                        newformat: "d/m/Y"
                    },
                    editable: true,
                    edittype: "text",
                    editoptions: {
                        //dataInit: getDate
                    },
                    search: false,
                    stype: "text",
                    searchoptions: {
                        sopt: ["eq"]
                    },
                    sortable: false,
                    sorttype: "date",
                }
            ],
            loadComplete: function (data) { },
            loadError: function (a, b, c) { },
            ondblClickRow: function (rowid, iRow, iCol, e) {
                //cellEdit:true
            }
        })
    },
    OrdineInCorsoLavorazioe: function () { },
    OrdineEvasi: function () { }
}

    

   


if (document.readyState === 'interactive')
{

        //$('#nav_id1').tabs({
        //    active: 0
        //});

        $('.articleadditem_Cl').html("<div id='contientId'><p id='utenteSaluto'></p ><article id='divcontenutoId'></article><p id='btcontenutoId'></p></div >")

        let Ruolo = [{ "desc": "Responsabile UFF", "val": 2 }, { "desc": "Administrater", "val": 1 }, { "desc": "Segretaria", "val": 4 }, { "desc": "Dipendente", "val": 3 }, { "desc": "Operai", "val": 5 }]


        // $('#utenteSaluto').html('Buongiorno ' + NomeUtente.utente)

        $('#btcontenutoId').html("<button id='btLavoratorId' class='btLavoratorCl bt_cl lavoratoriCL'>LAVORATORE</button><button id='btClienteId' class='btClienteCl bt_cl ClienteCL'>CLIENTE</button><button id='btProdottoId' class='btProdottoCl bt_cl ProdottoCl'>PRODOTTO</button><button id='btLavorazioneId' class='btLavorazioneCl bt_cl LavorazioneCl'>LAVORAZIONE</button>")

        $('.bt_cl').click(function () {

            if ($(this).attr('id') == 'btLavoratorId') {
                $('#divcontenutoId').html("<div id='Lavoratore_id' class='Lavoratore_cl'>" +
                    "<label for='Nome'> Nome :</label><input type='text' name='Nome' class='Nome_Utente_cl' id='Nome_Utente_id' />" +
                    "<label for='Cognome'>Cognome :</label><input name='Cognome' type='text' class='Cognome_Utente_cl' id='Cognome_Utente_id' /><br/><label for='ruolo'>Ruolo :</label><input name='ruolo' type='number' class='Ruolo_Utente_cl' id='Ruolo_Utente_id' />"
                    + "<label for='Utente'>Utente :</label><input name='Utente' type='text' class='Utente_Utente_cl' id='Utente_Utente_id' /><label for='password'>Password :</label><input name='password' type='text' class='Password_Utente_cl' id='Password_Utente_id' /></div >")
                $('#divcontenutoId').append("<button id='btlavoratoreInvioId' class='btlavoratoreInvioCl '>INVIO</button><button id='btlavoratoreCancelId' class='btlavoratoreCancelCl CancelCl '>CANCEL</button>")
                //creation dell'input lavoratore
            }
            else if ($(this).attr('id') == 'btClienteId') {
                $('#divcontenutoId').html("<div id='Cliente_id' class='Cliente_cl'>Codice Fiscale :<input name='Codicefiscale' id='CodicefiscaleId' class='CodicefiscaleCl' />" +
                    "<label for='Sede'>Sede :</label><input type='text' id='SedeId' class='SedeCl' name='Sede' /><label for='RagineSociale'>Ragine Sociale :</label><input type='text' id='RagineSocialeId' class='RagineSocialeCl' name='RagineSociale' /><br /><label for='CorsoVia'>Corso/Via :</label><input type='Via' name='Via' id='ViaId' class='ViaCl' /></div >")
                $('#divcontenutoId').append("<button id='btpclienteInvioId' class='btclienteInvioCl '>INVIO</button><button id='btclienteCancelId' class='btclienteCancelCl CancelCl'>CANCEL</button>")
                //creation dell'input Cliente
            }
            else if ($(this).attr('id') == 'btProdottoId') {

                $('#divcontenutoId').html("<p>Tipo Riso:<input type='text' id='tipoProdottoId' class='tipoProdottoCl' />  Descrizione : <input type='text' id='descrizioneProdottoId' class='descrizioneProdottoCl' /> Quantita Rimasta : <input type='number' id='MerceQuantitaRimastaId' class='MerceQuantitaRimastaCl' /> </p>")
                $('#divcontenutoId').append("<button id='btprodottoInvioId' class='btprodottoInvioCl '>INVIO</button><button id='btprodottoCancelId' class='btprodottoInvioCl CancelCl'>CANCEL</button>")
                //creation dell' input prodotto
            }
            else {

                $('#divcontenutoId').html("<div><p><label for='TipoLavorazione'>Tipo Lavorazione :</label><Input id='TipoLavorazioneId' class='TipoLavorazioneCl' name='TipoLavorazione'/><label for='DescriptionLavorazione'> Description Lavorazione :</label><textarea  type='text' rows='4' cols='50' maxlength='200' id='DescriptionLavorazioneId' class='DescriptionLavorazioneCl textariamio' name='DescriptionLavorazione'></textarea ></p>")
                $('#divcontenutoId').append("<button id='btLavorazioneInvioId' class='btLavorazioneInvioCl '>INVIO</button><button id='btLavorazioneCancelId' class='btLavorazioneCancelCl CancelCl'>CANCEL</button>")
            }//creation dell' input merce

        })






        $('article').hide()

        //    //$('#contientId').show()
        //    //$('img').hide()
    




    if (document.readyState === 'complete') {



        $('article').show()

    }
}//gestion della creation delle maschere



$(document).ajaxStart(function () {
    load.activeloading()
})//avvia il loading



$(document).ready(function () {
    

    $('.lavoratoriCL').click(function () {
        load.loaderhtml()
        $("#btlavoratoreInvioId").on('click', function () {
            //console.log($('#Nome_Utente_id').val())
            $.ajax({
                url: '../VB/Lavoratore.aspx',
                data: {

                    NomeLav: $('#Nome_Utente_id').val(),
                    CognomeLav: $('#Cognome_Utente_id').val(),
                    RuoloLav: $('#Ruolo_Utente_id').val(),
                    UtenteLav: $('#Utente_Utente_id').val(),
                    PasswordLav: $('#Password_Utente_id').val()

                },
                type: 'POST',
                datatype: 'JSON',
                success: function (dati, status) {

                    if (dati == 2) {
                        $('#Nome_Utente_id').val('')
                        $('#Cognome_Utente_id').val('')
                        $('#Ruolo_Utente_id').val('')
                        $('#Utente_Utente_id').val('')
                        $('#Password_Utente_id').val('')
                        alert('utente creato ')

                    } else if (dati == 1) {

                        alert("utente existente ")
                    } else {

                        alert('è successo un error')
                    }

                },
                Error: function () { },
                complete: function (dati) {
                    load.Disableloading()
                }
            })
        })
        $(".CancelCl").on('click', function () {
            $('#divcontenutoId').html("")
        })



    })

    $('.ClienteCL').click(function () {
        load.loaderhtml()
        $('#btpclienteInvioId').on('click', function () {
            $.ajax({
                url: '../VB/Client.aspx',
                data: {

                    CodiceFiscaleCli: $('#CodicefiscaleId').val(),
                    SedeCli: $('#SedeId').val(),
                    ViaCorsoCli: $('#ViaId').val(),
                    RagioneSoCiale: $('#RagineSocialeId').val()


                },
                type: 'POST',
                datatype: 'JSON',
                success: function (dati, status) {

                    if (dati == 2) {
                        $('#CodicefiscaleId').val('')
                        $('#SedeId').val('')
                        $('#ViaId').val('')
                        $('#RagineSocialeId').val('')
                        alert('Cliente creato ')

                    } else if (dati == 1) {

                        alert("Cliente existente ")
                    } else {

                        alert('è successo un error')
                    }

                },
                Error: function () { },
                complete: function (dati) {
                    load.Disableloading()
                }
            })
        })
        $(".CancelCl").on('click', function () {
            $('#divcontenutoId').html("")
        })
    })

    $('.ProdottoCl').click(function () {
        load.loaderhtml()
        $('#btprodottoInvioId').on('click', function () {

            $.ajax({
                url: '../VB/Prodott.aspx',
                data: {

                    TipoProd: $('#tipoProdottoId').val(),
                    DescriptionProdotto: $('#descrizioneProdottoId').val(),
                    QuantitainitialMerce: $('#MerceQuantitaRimastaId').val(),
                    //DataCreazione: '"'+new Date().getFullYear.toString+'"',                    
                    //Modifiche:''


                },
                type: 'POST',
                datatype: 'JSON',
                success: function (dati, status) {

                    if (dati == 2) {
                        $('#tipoProdottoId').val('')
                        $('#descrizioneProdottoId').val('')
                        $('#MerceQuantitaRimastaId').val('')


                        alert('Prodotto creato ')

                    } else if (dati == 1) {

                        alert("Prodotto existente ")
                    } else {

                        alert('è successo un error')
                    }

                },
                Error: function () { },
                complete: function (dati) {
                    load.Disableloading()
                }
            })

        })
        $(".CancelCl").on('click', function () {
            $('#divcontenutoId').html("")
        })
    })

    $('.LavorazioneCl').click(function () {
        load.loaderhtml()
        $('#btLavorazioneInvioId').on('click', function () {
            $.ajax({
                url: '../VB/Lavorazion.aspx',
                data: {

                    TipoLavoraz: $('#TipoLavorazioneId').val(),
                    DescriptionLavoraz: $('#DescriptionLavorazioneId').val(),



                },
                type: 'POST',
                datatype: 'JSON',
                success: function (dati, status) {

                    if (dati == 2) {
                        $('#TipoLavorazioneId').val('')
                        $('#DescriptionLavorazioneId').val('')


                        alert('Prodotto creato ')

                    } else if (dati == 1) {

                        alert("Prodotto existente ")
                    } else {

                        alert('è successo un error')
                    }

                },
                Error: function () { },
                complete: function (dati) {
                    load.Disableloading()
                }
            })
        })


        $(".CancelCl").on('click', function () {
            $('#divcontenutoId').html("")
        })
    })

    JQ.CreaOrdine()


})

