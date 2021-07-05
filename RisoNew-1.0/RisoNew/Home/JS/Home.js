
let NomeUtente = JSON.parse(sessionStorage.getItem("InstantUtent"))
let selectCX
let valobject
let Valeur
let Lapercento
let LapercentoComm
let valeurUtenteLav
let valeurUtenteGes
let valeurClient
let valeurProdotto
let NumeroRecord //numero di riga nei messagi di conferma recception lavoro
let statilavorazione = { "1": "DA LAVORARE", "2": "IN CORSO DI LAVORAZIONE", "3": "EVASI" }//stati possibile di lavorazione 
let tableauRuolo = { "1": "OPERAIO", "2": "IMPIEGATO", "3": "IMPIEGATO RESP", "4":"AMMINISTRATOR"}// differenti ruoli dei utenti 
let before_val
let data_valore_Ordine// id dell'ordine 
let data_valore_mittente //valore del  utente mittente del messaggio
let data_valore_destinatario //valore del  utente destinatario del messaggio




$(window).resize(function () {
    this.console.log('la hauteur della finestra : ' + $(this.window).height())
    ordiniAssegnato
    this.console.log('la largeur della finestra : ' + $(this.window).width())

    this.console.log('la hauteur della finestra sopra la tabela : ' + $('#ordiniAssegnato').height())
    
    this.console.log('la largeur della finestra sopra la tabela : ' + $('#ordiniAssegnato').width())

    //let hauteurdetab = $('#tabOrdine1').height()
    //let largeur = $('#tabOrdine1').width()
    //this.console.log('TAB---')
    //this.console.log('la hauteur du contenu de la tab est: ' + hauteurdetab)
    //this.console.log('la largeur du contenu de la tab est: ' + largeur)
    //this.console.log('contenueTABLeau---')

    //gezione della dimensione della tabelle assegnazione
    $('#OrdiASS').jqGrid('setGridWidth', parseInt($('#ordiniAssegnato').width()) - 10)
    //$('#OrdiASS').jqGrid('setGridHeight', parseInt($(this.window).height()) - 30)

    //gezione della dimensione della tabelle lavoro Chiuso
    $('#OrdiCHI').jqGrid('setGridWidth', parseInt($('#ordiniChiuso').width()) - 10)
    //$('#OrdiCHI').jqGrid('setGridHeight', parseInt($(this.window).height()) - 30)

    //gezione della dimensione della tabelle Ordine 
    $('#tb_ordineId').jqGrid('setGridWidth', parseInt($('#contenutoOrdi_id').width()) - 10)
    //$('#tb_ordineId').jqGrid('setGridHeight', parseInt($(this.window).height()) - 30)

    //$('#tbordine_id').jqGrid('setGridHeight', parseInt($('#tabOrdine1').height()) - 20)


})

var load = {
    loaderhtml: function () {
        $('#divcontenutoId').append("<div id='containe_image_loading_id' class='containe_image_loading_Cl'></div >")
        $('#containe_image_loading_id').html("<img src ='../../Image/ajaxloader.gif' class='imgloading_Cl' id ='imgloading_Id' />")
        let vre=0
    },
    activeloading: function () {
        $('#containe_image_loading_id').show()
    },
    Disableloading: function () {
        $('#containe_image_loading_id').hide()
    }
}//gestion del loading

var JQ = {

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
    selecteurIndex: function () {
        $.ajax({
            url: '../VB/Ordin.aspx',
            data: {
                Type: 'load',
                
            },
            type: "POST",
            datatype: "JSON",
            success: function (dati, status) {
                let selectChoix = JSON.parse(dati)              

               
                        $('#tb_ordineId').jqGrid({
                            url: '../VB/Ordin.aspx',
                            postData: {
                                Type: 'cp',
                                
                            },
                            datatype: 'JSON',
                            loadonce: false,
                            mtype: 'get',
                            cellsubmit: 'remote',
                            width: $(window).width() - 50,
                            viewrecords: true,
                            caption: "<div>LISTA ORDINI DA LAVORARE <span><i class='fa fa-th-list modificaColumnsClOrdine' aria-hidden='true'></i></span></div>",
                            loadtext: "<div><i class='fa fa-spinner fa-5x' aria-hidden='true'></i> </div>",
                            rowNum: 500,
                            jsonReader: {
                                root: 'rows',
                                records: "records",
                                page: "page",
                                total:"total"
                                //page: '',
                                /*root: "rows",
                                        page: "page",
                                        total: "total",
                                        records: "records",
                                        userdata: "assetSmartphone_extradata",
                                        repeatitems: true*/
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
                                    label: "LAVORO",
                                    align: "left",
                                    width: 250,
                                    fixed: false,
                                    resizable: true,
                                    formatter: function (cellvalue, options, rowObject) {
                                        return "<div><i class='fa fa-users addlavo' aria-hidden='true' data_valore='" + rowObject.IdOrdine +"'></i></div>"
                                    },
                                    formatoptions: {
                                        
                                    },
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
                                    name: "DataCreazione",
                                    label: "DATA DI CREAZIONE",
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
                                    formatter: "select",
                                    formatoptions: {
                                        value: selectChoix.MERCEJS
                                    },
                                    editable: false,
                                    edittype: "text",
                                    editoptions: {
                                        value: selectChoix.MERCEJS
                                    },
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
                                    formatter: "select",
                                    formatoptions: {
                                        value: selectChoix.CLIENTJS
                                    },
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
                                    formatter: "select",
                                    formatoptions: {
                                        value: statilavorazione
                                    },
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
                                },
                                {
                                    label: 'DATA CONSEGNA',
                                    name: 'DataConsegna',
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
                                },
                                {
                                    name: "IdTipoLavorazione",
                                    label: "TIPO DI LAVORAZIONE",
                                    align: "left",
                                    width: 250,
                                    fixed: false,
                                    resizable: true,
                                    formatter: "select",
                                    formatoptions: {
                                        value: selectChoix.LAVOROJS
                                    },
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
                                    name: "IdTipoLavorazione1",
                                    label: "TIPO DI LAVORAZIONE 1",
                                    align: "left",
                                    width: 250,
                                    fixed: false,
                                    resizable: true,
                                    formatter: "select",
                                    formatoptions: {
                                        value: selectChoix.LAVOROJS
                                    },
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
                                    name: "IdTipoLavorazione2",
                                    label: "TIPO DI LAVORAZIONE 2",
                                    align: "left",
                                    width: 250,
                                    fixed: false,
                                    resizable: true,
                                    formatter: "select",
                                    formatoptions: {
                                        value: selectChoix.LAVOROJS
                                    },
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
                                    name: "IdTipoLavorazione3",
                                    label: "TIPO DI LAVORAZIONE 3",
                                    align: "left",
                                    width: 250,
                                    fixed: false,
                                    resizable: true,
                                    formatter: "select",
                                    formatoptions: {
                                        value: selectChoix.LAVOROJS
                                    },
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
                            ],
                            loadComplete: function (data) {

                                operazionJq.addlovaro()
                                $('.modificaColumnsClOrdine').on('click', function () {

                                    $('#tb_ordineId').jqGrid('columnChooser', {
                                        caption: "Select columns",
                                        bSubmit: "Ok",
                                        bCancel: "Cancel",
                                        done: function (perm) {
                                            if (perm) {
                                                // "OK" button are clicked
                                                this.jqGrid("remapColumns", perm, true);
                                                // the grid width is probably changed co we can get new width
                                                // and adjust the width of other elements on the page
                                                var gwdth = this.jqGrid("getGridParam", "width");
                                                this.jqGrid("setGridWidth", parseInt($('#contenutoOrdi_id').width()) - 10);
                                            } else {
                                                // we can do some action in case of "Cancel" button clicked
                                            }
                                        }

                                    });

                                });

                            },
                            loadError: function (a, b, c) {
                                let pipa = 0
                            },
                            ondblClickRow: function (rowid, iRow, iCol, e) {
                                //cellEdit:true
                            }
                        })
                    

              

            },
            error: function (a, b, c) {
                let errore = false;
            },

        })
    },
    DareLavoro: function () {
        $.ajax({
            url: '../VB/Ordin.aspx',
            data: {
                Type: 'load',

            },
            type: "POST",
            datatype: "JSON",
            success: function (dati, status) {
                let selectChoix = JSON.parse(dati)

                var entete //entete tabelle lavoro  da fare
              
                if (NomeUtente.Ruolo == 1) {
                    entete = "ORDINE IN LAVORAZIONE &nbsp<span><i class='fa fa-th-list modificaColumnsCl' aria-hidden='true'></i></span>"
                } else {
                    entete = "<div><i style='cursor: pointer;/*color:red;*/ ' class='fa fa-truck tb_icon bt_icon_Prodotto btprodottoCLJQ bticonCL'  aria-hidden='true'>&nbsp; PRODOTTO</i>&nbsp &nbsp<i style='cursor: pointer ' class='fa fa-plus tb_icon btordineCLJQ bticonCL'  id='bt_icon Ordine ' aria-hidden='true' >&nbsp; ORDINE</i> &nbsp &nbsp <i style='cursor: pointer ' class='fa fa-male tb_icon bt_icon_Lavoratore btlavoratoreCLJQ bticonCL' id='Lavorator_id_tb' aria-hidden='true'>&nbsp; LAVORATORE</i> &nbsp &nbsp <i style='cursor: pointer ' class='fa fa-handshake-o tb_icon bt_icon_Cliente btclienteCLJQ bticonCL' aria-hidden='true'>&nbsp; CLIENTE</i> &nbsp &nbsp <i style='cursor: pointer ' class='fa fa-briefcase tb_icon bt_icon_Lavorazione btlavorazioneCLJQ bticonCL' aria-hidden='true'>&nbsp; LAVORAZIONE</i>&nbsp<span><i class='fa fa-th-list modificaColumnsCl' aria-hidden='true'></i></span></div>"

                }
                


                $('#OrdiASS').jqGrid({
                    url: '../VB/Ordin.aspx',
                    postData: {
                        Type: 'cpASS',

                    },
                    datatype: 'JSON',
                    loadonce: false,
                    mtype: 'get',
                    //cellEdit: true,
                    editurl: "clientArray",
                    cellsubmit: 'clientArray',
                    width: $(window).width() - 50,
                    viewrecords: true,
                    caption: entete,
                    loadtext: "<div><i class='fa fa-spinner fa-5x' aria-hidden='true'></i> </div>",
                    rowNum: 500,
                    jsonReader: {
                        root: 'rows',
                        records: "records",
                        page: "page",
                        total: "total"
                        //page: '',
                        /*root: "rows",
                                page: "page",
                                total: "total",
                                records: "records",
                                userdata: "assetSmartphone_extradata",
                                repeatitems: true*/
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
                            label: "ESEGUI",
                            align: "center",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: function (cellvalue, options, rowObject) {
                                let pop=0
                                return "<div><i class='fa fa-check-circle-o lavoroFatto bticonCL' aria-hidden='true'  data_valore='" + rowObject.IdOrdine + "'></i>&nbsp &nbsp<i class='fa fa-commenting-o CommentoLavorator bticonCL' aria-hidden='true' data_descrt='" + rowObject.DescriptionLavoro + "' data_valore='" + rowObject.IdLavoro + "'></i></div>"
                            },
                            formatoptions: {
                                
                            },
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
                            name: "DataCreazione",
                            label: "DATA DI CREAZIONE",
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
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.MERCEJS
                            },
                            editable: false,
                            edittype: "text",
                            editoptions: {
                                value: selectChoix.MERCEJS
                            },
                            search: true,
                            stype: "text",
                            searchoptions: { sopt: ["cn"] },
                            sortable: true,
                            sorttype: "text",
                            // cellattr: pcCellattr
                        },
                        {
                            name: "DescriptionLavoro",
                            label: "DESCRIZIONE Lavoratore",
                            align: "left",
                            hidden: true,
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
                            name: "QuantitaRichiesta",
                            label: "QUANTITA",
                            align: "left",
                            width: 50,
                            fixed: false,
                            resizable: true,
                            formatter: "text",
                            formatoptions: {},
                            editable: true,
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
                            name: "DataChiusura",
                            label: "DATA DI CHIUSURA ",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "text",
                            formatoptions: {},
                            editable: true,
                            edittype: "text",
                            editoptions: {
                                dataInit: dataPikJqgrid
                            },
                            search: true,
                            stype: "text",
                            searchoptions: { sopt: ["cn"] },
                            sortable: true,
                            sorttype: "text",
                            //cellattr: pcCellattr
                        },
                        {
                            name: "Responsabile",
                            label: "RESPONSABILE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVORATORJS
                            },
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
                            name: "Lavoratore",
                            label: "lAVORATORE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVORATORJS
                            },
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
                            name: "IdCliente",
                            label: "CLIENTE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.CLIENTJS
                            },
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
                            name: "AvanzamentoLAvoro",
                            label: "% di Avanzamento",
                            align: "center",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: function (cellvalue, options, rowObject) {
                                cellvalue == 1 ? cellvalue = 0 : cellvalue
                                //Lapercento = cellvalue;
                                return "<div ><input type='text' value='" + cellvalue + "%'  class='RangeCl' readonly><div class='AvanzalavoroCl avanMsg' aria-hidden='true' data_valore_destinatario='" + rowObject.Responsabile + "' data_celvalue='" + cellvalue + "' data_valore_mittente='" + rowObject.Lavoratore + "'  data_valore='" + rowObject.IdLavoro + "' data_Ordine='" + rowObject.IdOrdine + "'></div> </div>"
                            },
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
                            name: "Stato",
                            label: "STATO",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: statilavorazione
                            },
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
                        },
                        {
                            label: 'DATA CONSEGNA',
                            name: 'DataConsegna',
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
                                dataInit: dataPikJqgrid
                            },
                            search: false,
                            stype: "text",
                            searchoptions: {
                                sopt: ["eq"]
                            },
                            sortable: false,
                            sorttype: "date",
                        },
                        {
                            name: "IdTipoLavorazione",
                            label: "TIPO DI LAVORAZIONE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVOROJS
                            },
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
                            name: "IdTipoLavorazione1",
                            label: "TIPO DI LAVORAZIONE 1",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVOROJS
                            },
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
                            name: "IdTipoLavorazione2",
                            label: "TIPO DI LAVORAZIONE 2",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVOROJS
                            },
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
                            name: "IdTipoLavorazione3",
                            label: "TIPO DI LAVORAZIONE 3",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVOROJS
                            },
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
                            name: "Note",
                            label: "NOTE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "text",
                            formatoptions: {},
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

                        //creation della maschera di creation di prodotto
                        $('.btprodottoCLJQ').on('click', function () {
                            $('#divcontenutoId').html("<div class='divinputColCL'><label for='TipoRiso'>Tipo Riso</label>:<input type='text' name='TipoRiso' id='tipoProdottoId' class='tipoProdottoCl' /></div><div class='divinputColCL'> <label for='descrizioneProdotto'>Descrizione </label>:<textarea rows='3' cols='28' maxlength='100' name='descrizioneProdotto' id='descrizioneProdottoId' class='descrizioneProdottoCl' > </textarea></div><div class='divinputColCL'><label style='display:none;' for='QuantitaRimasta'>Quantita Rimasta </label> : <input style='display:none;'  type='number'  name='QuantitaRimasta' id='MerceQuantitaRimastaId' class='MerceQuantitaRimastaCl' /></div>")
                            operazionJq.ADDprodottoJQgrid();
                        });
                         //creation della maschera di creation di ordine
                        $('.btordineCLJQ').on('click', function () {
                            $('#divcontenutoId').html("<div><div class='divinputColCL'><label for='Cliente'>Cliente :</label><input type='text' name='Cliente' id='ClienteId' class='ClienteCl'/><label for='Merce' class='LabelCL'> Tipo Riso :</label><input type='text' name='Merce' id='MerceId' class='MerceCl'/><div class='divinputColCL'><label for='Quantita'>Quantita :</label><input type='number' id='QuantitaId' class='QuantitaCl' name='Quantita'/><label for='TermineLavorazione' class='LabelCL'>Termine Lavorazione :</label><input type='datetime' id='TermineLavorazioneId' class='TermineLavorazioneCl' name='TermineLavorazione'/></div><div class='divinputColCL'><label for='Descrizione'> Descrizione :</label><textarea name='Descrizione'  id='DescrizioneId' class='DescrizioneCl' rows='4' cols='50'></textarea></div> </div>")

                            for (let x of selectCX.LAVOROJS) {
                                $('#divcontenutoId').append("<div class='checbox_Cl'><input type='checkbox' input id ='" + x.label + "Id' class='" + x.label + "Cl chx chexk" + x.value + " 'name = '" + x.label + "' value = '" + x.value + "' checked /> <label for='" + x.label + "'>" + x.label + " </label>")
                                "lavorazione" + x.value + ":$(" + x.label + "Id).val(),"
                            }
                            $('.chx').on('click', function () {

                                if ($(this).is(':checked')) {

                                } else {
                                    $(this).removeAttr('value')
                                }
                            })

                            $('#ClienteId').autocomplete({

                                source: function (request, response) {
                                    $.ajax({
                                        url: '../VB/Ordin.aspx',
                                        data: {
                                            Type: 'selectClient',
                                            term: request.term
                                        },
                                        //type: 'get',
                                        datatype: 'JSON',
                                        success: function (dati, status) {


                                            response(JSON.parse(dati))
                                            //console.log(JSON.parse(dati))
                                            //response(dati)



                                        },
                                        error: function (risultat, status, erreur) { },
                                    })

                                },
                                minLength: 3,
                                select: function (event, ui) {
                                    event.preventDefault();

                                    valeurClient = parseInt(ui.item.value)

                                    //codiceA = parseInt(ui.item.value)
                                    //utenteA = ui.item.label
                                    //sedeA = ui.item.sede
                                    //repartoA = ui.item.reparto
                                    $(this).val(ui.item.label)

                                }

                            })

                            $('#MerceId').autocomplete({

                                source: function (request, response) {
                                    $.ajax({
                                        url: '../VB/Ordin.aspx',
                                        data: {
                                            Type: 'selectProdotto',
                                            term: request.term
                                        },
                                        //type: 'get',
                                        datatype: 'JSON',
                                        success: function (dati, status) {


                                            response(JSON.parse(dati))
                                            //console.log(JSON.parse(dati))
                                            //response(dati)

                                        },
                                        error: function (risultat, status, erreur) { },
                                    })

                                },
                                minLength: 3,
                                select: function (event, ui) {
                                    event.preventDefault();

                                    valeurProdotto = parseInt(ui.item.value)


                                    //codiceA = parseInt(ui.item.value)
                                    //utenteA = ui.item.label
                                    //sedeA = ui.item.sede
                                    //repartoA = ui.item.reparto
                                    $(this).val(ui.item.label)

                                }

                            })

                            Jque.dataPik("TermineLavorazioneId")


                            operazionJq.ADDordineJQgrid();
                        });
                        //creation della maschera di creation di lavoratore
                        $('.btlavoratoreCLJQ').on('click', function () {
                            $('#divcontenutoId').html("<div id='Lavoratore_id' class='Lavoratore_cl'>" +
                                "<div class='divinputColCL'><label for='Nome'> Nome :</label><input type='text' name='Nome' class='Nome_Utente_cl' id='Nome_Utente_id' />" +
                                "<label for='Cognome' class='LabelCL'>Cognome :</label><input name='Cognome' type='text' class='Cognome_Utente_cl' id='Cognome_Utente_id' /></div><div class='divinputColCL'><label for='ruolo' class=''>Ruolo :</label><select name='ruolo' type='number' class='Ruolo_Utente_cl' id='Ruolo_Utente_id'></select>"
                                + "<label for='Utente' class='LabelCL'>Utente :</label><input name='Utente' type='text' class='Utente_Utente_cl' id='Utente_Utente_id' /></div><div class='divinputColCL'><label for='password'>Password :</label><input name='password' type='text' class='Password_Utente_cl' id='Password_Utente_id'/></div></div >")
                            for (p in tableauRuolo) {
                                $('.Ruolo_Utente_cl').append("<option value=" + p + ">" + tableauRuolo[p]+"</option>")
                            } 
                            operazionJq.ADDlavoratoreJQgrid();
                        });
                         //creation della maschera di creation di client
                        $('.btclienteCLJQ').on('click', function () {
                            $('#divcontenutoId').html("<div id='Cliente_id' class='Cliente_cl'><div class='divinputColCL'><label for='Codicefiscale'>Codice Fiscale</label> :<input name='Codicefiscale' id='CodicefiscaleId' class='CodicefiscaleCl' />"+
                                "<label for='Sede'>Sede :</label><input type='text' id='SedeId' class='SedeCl' name='Sede' /></div><div class='divinputColCL'><label for='RagineSociale'>Ragine Sociale :</label><input type='text' id='RagineSocialeId' class='RagineSocialeCl' name='RagineSociale' /></div><div class='divinputColCL'><label for='CorsoVia'>Corso/Via :</label><input type='Via' name='Via' id='ViaId' class='ViaCl' /></div >")
                            operazionJq.ADDclienteJQgrid();
                        });
                        //creation della maschera di creation di lavorazione
                        $('.btlavorazioneCLJQ').on('click', function () {
                            $('#divcontenutoId').html("<div class='divinputColCL'><label for='TipoLavorazione'>Tipo Lavorazione :</label><Input id='TipoLavorazioneId' class='TipoLavorazioneCl' name='TipoLavorazione'/></div><div class='divinputColCL'><label for='DescriptionLavorazione'> Description Lavorazione :</label><textarea  type='text' rows='4' cols='50' maxlength='200' id='DescriptionLavorazioneId' class='DescriptionLavorazioneCl textariamio' name='DescriptionLavorazione'></textarea ></div>")
                            operazionJq.ADDlavorazioneJQgrid();
                        });

                        $('.modificaColumnsCl').on('click', function () {
                           
                            $('#OrdiASS').jqGrid('columnChooser', {
                                caption: "Select columns",
                                bSubmit: "Ok",
                                bCancel: "Cancel",
                                done: function (perm) {
                                    if (perm) {
                                        // "OK" button are clicked
                                        this.jqGrid("remapColumns", perm, true);
                                        // the grid width is probably changed co we can get new width
                                        // and adjust the width of other elements on the page
                                        var gwdth = this.jqGrid("getGridParam", "width");
                                        this.jqGrid("setGridWidth", parseInt($('#ordiniAssegnato').width()) - 10);
                                    } else {
                                        // we can do some action in case of "Cancel" button clicked
                                    }
                                }

                            });
                            
                        });
                                
                            
                       
                        operazionJq.addCommento()
                        operazionJq.ConcludereLavoro()
                        operazionJq.AvanzamentoLavoro()

                                              

                    },
                    loadError: function (a, b, c) {
                        let pipa = 0

                        

                    },
                    ondblClickRow: function (rowid, iRow, iCol, e) {
                        $("#OrdiASS").jqGrid("setGridParam", {
                            cellEdit: true
                        });

                        $("#OrdiASS").jqGrid("editCell", iRow, iCol, true);
                        $("#OrdiASS").jqGrid("setGridParam", {
                            cellEdit: false
                        });




                        console.log("ondblClickRow");

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
                                $("#Pc_id").jqGrid("setGridParam", {
                                    cellEdit: true
                                });
                                oldKeydown.call(this, e);
                                $("#Pc_id").jqGrid("setGridParam", {
                                    cellEdit: false
                                });
                            });


                            let colModelP = $("#OrdiASS").getGridParam("colModel");

                            if (colModelP[iCol].formatter == "date") {

                                let mange = 2

                            }
                            else {
                                $cellInput.bind("focusout", function () {
                                    $("#OrdiASS").jqGrid("setGridParam", {
                                        cellEdit: true
                                    });
                                    $("#OrdiASS").jqGrid("saveCell", iRow, iCol, true);
                                    $("#OrdiASS").jqGrid("setGridParam", {
                                        cellEdit: false
                                    });
                                });
                                $cellInput.bind("focusin", function () {
                                    $(this).select();
                                });
                            }
                        }
                    },
                    beforeSaveCell: function (rowid, name, val, iRow, iCol) {

                        let rollback = false;

                        let colModelP = $("#OrdiASS").getGridParam("colModel");

                        data_valore_mittente = $(this).jqGrid("getCell", rowid, "Lavoratore");
                        data_valore_destinatario = $(this).jqGrid("getCell", rowid, "Responsabile");
                        

                        if (!rollback) {
                            $.ajax({
                                url: '../VB/Ordin.aspx',
                                data: {
                                    Type: 'ModificaOrdineP',
                                    Cella: val,
                                    ColCella: name,
                                    riga: rowid,
                                    bfcella: before_val
                                },
                                type: 'POST',
                                datatype: 'JSON',
                                async: false,
                                success: function (dati, status) {
                                    if (dati == '') {
                                        $.ajax({
                                            url: '../VB/Messagi.aspx',
                                            data: {
                                                Type: 'messagJQgrid',
                                                titolo: "Modifica " + name,
                                                contenuto: "Questo Dato: " + before_val + "  è stato modificato a " + val,
                                                mittente: data_valore_mittente,
                                                destinatario: data_valore_destinatario,
                                                ordine: rowid,
                                                
                                            },
                                            type: 'POST',
                                            datatype: 'JSON',
                                            success: function (dati, status) {

                                                if (dati == 2) {



                                                    $.notify('Messaggio Inviato ')

                                                } else if (dati == 1) {

                                                    $.notify("Messaggio non Inviato ")
                                                } else {

                                                    $.notify('Messaggio non Inviato')
                                                }

                                            },
                                            Error: function (dati) {
                                                let pipo = 0
                                            },
                                            complete: function (dati) {

                                            }
                                        })
                                        console.log('operazione riuscito')
                                        rollback = false;
                                    } else if (dati != '') {
                                        $.notify('Operazione non riuscita, questo dato esiste già')
                                        rollback = true;
                                    } else {
                                        console.log('operazione Non riuscito')
                                        rollback = true;
                                    }

                                },
                                error: function (risultat, status, erreur) {
                                    rollback = true;
                                }
                            })
                        }

                        return rollback ? before_val : val
                    },
                })




            },
            error: function (a, b, c) {
                let errore = false;
            },

        })
    },
    CreaOrdine: function () {
        $('#tb_ordineId').jqGrid("setGridParam", {
            url: '../VB/Ordin.aspx',
            width: $(window).width() - 50,
            //datatype: 'json',

            //postData: {
            //     tipo: 'perso',
            //person: NomePerson.utente
            //},

        }).trigger("reloadGrid");
    },
    ChiudiOrdine: function () {
        $.ajax({
            url: '../VB/Ordin.aspx',
            data: {
                Type: 'load',

            },
            type: "POST",
            datatype: "JSON",
            success: function (dati, status) {
                let selectChoix = JSON.parse(dati)




                $('#OrdiCHI').jqGrid({
                    url: '../VB/Ordin.aspx',
                    postData: {
                        Type: 'ChiusoOrdi',

                    },
                    datatype: 'JSON',
                    loadonce: false,
                    mtype: 'get',                     
                    cellsubmit: 'remote',
                    width: $(window).width() - 50,
                    viewrecords: true,                                       
                    caption: "<div>LISTA ORDINE CHIUSO &nbsp<i class='fa fa-th-list modificaColumnsClchiuso' aria-hidden='true'></i></div>",
                    loadtext: "<div><i class='fa fa-spinner fa-5x' aria-hidden='true'></i> </div>",
                    rowNum: 500,
                    jsonReader: {
                        root: 'rows',
                        records: "records",
                        page: "page",
                        total: "total"
                        //page: '',
                        /*root: "rows",
                                page: "page",
                                total: "total",
                                records: "records",
                                userdata: "assetSmartphone_extradata",
                                repeatitems: true*/
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
                            label: "",
                            align: "center",
                            hidden: true,
                            width: 250,
                            fixed: false,
                            resizable: true,
                            //formatter: function (cellvalue, options, rowObject) {
                            //    return "<div><i class='fa fa-check-circle-o lavoroFatto' aria-hidden='true' data_valore='" + rowObject.IdOrdine + "'></i>&nbsp &nbsp<i class='fa fa-commenting-o CommentoLavorator' aria-hidden='true'data_valore='" + rowObject.IdLavoro + "'></i></div>"
                            //},
                            formatoptions: {

                            },
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
                            name: "DataCreazione",
                            label: "DATA DI CREAZIONE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "text",
                            formatoptions: {},
                            editable: false,
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
                            name: "IdMerce",
                            label: "PRODOTTO",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.MERCEJS
                            },
                            editable: false,
                            edittype: "text",
                            editoptions: {
                                value: selectChoix.MERCEJS
                            },
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
                            name: "DataChiusura",
                            label: "DATA DI CHIUSURA ",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "text",
                            formatoptions: {},
                            editable: true,
                            edittype: "text",
                            editoptions: {
                                //dataInit: Jque.dataPikJqgrid()
                            },
                            search: true,
                            stype: "text",
                            searchoptions: { sopt: ["cn"] },
                            sortable: true,
                            sorttype: "text",
                            //cellattr: pcCellattr
                        },
                        {
                            name: "Responsabile",
                            label: "RESPONSABILE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVORATORJS
                            },
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
                            name: "Lavoratore",
                            label: "lAVORATORE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVORATORJS
                            },
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
                            name: "IdCliente",
                            label: "CLIENTE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.CLIENTJS
                            },
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
                            formatter: "select",
                            formatoptions: {
                                value: statilavorazione
                            },
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
                        },
                        {
                            label: 'DATA CONSEGNA',
                            name: 'DataConsegna',
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
                                //dataInit: Jque.dataPikJqgrid()
                            },
                            search: false,
                            stype: "text",
                            searchoptions: {
                                sopt: ["eq"]
                            },
                            sortable: false,
                            sorttype: "date",
                        },
                        {
                            name: "IdTipoLavorazione",
                            label: "TIPO DI LAVORAZIONE",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVOROJS
                            },
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
                            name: "IdTipoLavorazione1",
                            label: "TIPO DI LAVORAZIONE 1",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVOROJS
                            },
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
                            name: "IdTipoLavorazione2",
                            label: "TIPO DI LAVORAZIONE 2",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVOROJS
                            },
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
                            name: "IdTipoLavorazione3",
                            label: "TIPO DI LAVORAZIONE 3",
                            align: "left",
                            width: 250,
                            fixed: false,
                            resizable: true,
                            formatter: "select",
                            formatoptions: {
                                value: selectChoix.LAVOROJS
                            },
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
                    ],
                    loadComplete: function (data) {



                        //operazionJq.addCommento()
                        //operazionJq.ConcludereLavoro()
                        $('.modificaColumnsClchiuso').on('click', function () {

                            $('#OrdiCHI').jqGrid('columnChooser', {
                                caption: "Select columns",
                                bSubmit: "Ok",
                                bCancel: "Cancel",
                                done: function (perm) {
                                    if (perm) {
                                        // "OK" button are clicked
                                        this.jqGrid("remapColumns", perm, true);
                                        // the grid width is probably changed co we can get new width
                                        // and adjust the width of other elements on the page
                                        var gwdth = this.jqGrid("getGridParam", "width");
                                        this.jqGrid("setGridWidth", parseInt($('#ordiniChiuso').width()) - 10);
                                    } else {
                                        // we can do some action in case of "Cancel" button clicked
                                    }
                                }

                            });

                        });

                    },
                    loadError: function (a, b, c) {
                        let pipa = 0
                    },
                    ondblClickRow: function (rowid, iRow, iCol, e) {
                        //cellEdit:true
                    }
                })




            },
            error: function (a, b, c) {
                let errore = false;
            },

        })
    },
    OrdineInCorsoLavorazioe: function () { },
    OrdineEvasi: function () { },
    MessagioUtente: function () {
        let NomePersona = JSON.parse(sessionStorage.getItem('InstantUtent'))
        $.ajax({
            url: '../VB/Ordin.aspx',
            data: {
                Type: 'load',

            },
            type: "POST",
            datatype: "JSON",
            success: function (dati, status) {
                let selectChoix = JSON.parse(dati)

            $('#messagioTableId').jqGrid({
            url: '../VB/Messagi.aspx',
            postData: {
                Type: 'MessagioJqTAbleau',
                idUser: NomePersona.Impiegati,

            },
            datatype: 'JSON',
            loadonce: false,
            mtype: 'get',
            //cellEdit: true,
            editurl: "clientArray",
            cellsubmit: 'clientArray',
            width: 680/*$(window).width() - 50*/,
            viewrecords: true,
            caption: "<div><i class='fa fa-search fa-1x ricercaNotifica' aria-hidden='true'></i></div>",
            loadtext: "<div><i class='fa fa-spinner fa-5x' aria-hidden='true'></i> </div>",
            rowNum: 500,
            jsonReader: {
                root: 'rows',
                records: "records",
                page: "page",
                total: "total"
                //page: '',
                /*root: "rows",
                        page: "page",
                        total: "total",
                        records: "records",
                        userdata: "assetSmartphone_extradata",
                        repeatitems: true*/
                //records: function (obj) { return obj.LST_ORDINE.length}
            },
            colModel: [
                {
                    name: 'idnotifica',
                    label: 'Id',
                    width: 5,
                    //resizable: false,
                    formatter: 'integer',
                    formatoptions: {},
                    key: true,
                    hidden: true,
                    edittable: false,
                },
                {
                    name: "OrdineId",
                    label: "ORDINE",
                    hidden: true,
                    align: "center",
                    width: 100,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {

                    },
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
                    name: "Tempo",
                    label: "DATA  ",
                    align: "left",
                    width: 100,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {},
                    editable: false,
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
                    name: "Mitente",
                    label: "MITTENTE",
                    align: "left",
                    width: 100,
                    fixed: false,
                    resizable: true,
                    formatter: "select",
                    formatoptions: {
                        value: selectChoix.LAVORATORJS
                    },
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
                    name: "Destinatario",
                    label: "DESTINATARIO",
                    align: "left",
                    width: 100,
                    fixed: false,
                    resizable: true,
                    formatter: "select",
                    formatoptions: {
                        value: selectChoix.LAVORATORJS
                    },
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
                    name: "Contenuto",
                    label: "INBOX",
                    align: "center",
                    width: 250,
                    fixed: false,
                    resizable: true,
                    formatter: "text",
                    formatoptions: {

                    },
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
                    label: "CONFERMA",
                    align: "center",
                    width: 50,
                    fixed: false,
                    resizable: true,
                    formatter: function (cellvalue, options, rowObject) {
                        var gestionNotifica //per la gestion delle notifiche 

                        if (NomeUtente.Ruolo > 1) {
                            gestionNotifica = "<i class='fa fa-book vistomail' dataIdNotificaVal='" + rowObject.idnotifica + "' datastatoval='" + cellvalue + "' dataIdordineVal='" + rowObject.OrdineId + "' aria-hidden='true'></i>"
                        } else {
                            gestionNotifica = "<div><i style='cursor: pointer;' datastatovalore='" + cellvalue + "' dataIdNotificaValore='" + rowObject.idnotifica + "' dataIdordineValore='" + rowObject.OrdineId + "' class='fa fa-thumbs-o-up sisi' aria-hidden='true'></i>&nbsp&nbsp&nbsp&nbsp<i style='cursor: pointer;' datastatovalore='" + cellvalue + "' dataIdNotificaValore='" + rowObject.idnotifica + "' dataIdordineValore='" + rowObject.OrdineId + "' class='fa fa-thumbs-o-down nono' aria-hidden='true'></i> &nbsp&nbsp <i style='cursor: pointer;color:blue;' class='fa fa-info-circle infoOrdi fa-1x'  dataIdordinedetailValore='" + rowObject.OrdineId + "' aria-hidden='true'></i></div>"
                        }

                        return gestionNotifica
                    },
                    formatoptions: {
                        
                    },
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
                    name: "Titolo",
                    label: "TITOLO",
                    align: "left",
                    width: 70,
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
                
                
                
            ],
            loadComplete: function (data) {
                NumeroRecord=$('#messagioTableId').jqGrid('getGridParam', 'records');
                $('.numeroRecords').html(NumeroRecord)
                //gestion dell'event del accetazione d'un lavoro
                $('.sisi').on('click', function (event) {
                    $.ajax({
                        url: '../VB/Messagi.aspx',
                        data: {
                            Type: 'LavoroAcceptato',
                            idOrdine: event.target.attributes.dataidordinevalore.value,
                            idNotifica: event.target.attributes.dataIdNotificaValore.value,
                            stato: event.target.attributes.datastatovalore.value,
                        },
                        type: "POST",
                        datatype: "JSON",
                        success: function (dati, status) {
                            console.log(dati)
                            $("#messagioTableId").delRowData(parseInt(event.target.attributes.dataIdNotificaValore.value));
                        },
                        error: function (a, b, c) {
                            let errore = false;
                        },

                    })

                })

                //gestion dell'event del rifiuto d'un lavoro
                $('.nono').on('click', function (event) {
                    $.ajax({
                        url: '../VB/Messagi.aspx',
                        data: {
                            Type: 'LavoroRiffiutato',
                            idOrdine: event.target.attributes.dataidordinevalore.value,
                            idNotifica: event.target.attributes.dataIdNotificaValore.value,
                            stato: event.target.attributes.datastatovalore.value,
                        },
                        type: "POST",
                        datatype: "JSON",
                        success: function (dati, status) {
                            
                        },
                        error: function (a, b, c) {
                            let errore = false;
                        },

                    })
                })

            /*gestino del event di vista mail*/
                $('.vistomail').on('click', function (event) {
                    
                    $.ajax({
                        url: '../VB/Messagi.aspx',
                        data: {
                            Type: 'mailvista',
                            idOrdine: event.target.attributes.dataidordineval.value,
                            idNotifica: event.target.attributes.dataIdNotificaVal.value,
                            stato: event.target.attributes.datastatoval.value,
                        },
                        type: "POST",
                        datatype: "JSON",
                        success: function (dati, status) {
                            console.log(dati)
                            $("#messagioTableId").delRowData(parseInt(event.target.attributes.dataIdNotificaVal.value));
                        },
                        error: function (a, b, c) {
                            let errore = false;
                        },

                    })
                
                })

            /* gestion della tabella di ricerca delle notifiche*/
                $('.ricercaNotifica').on('click', function () {
                                       
                        $('#RicercaMessagioId').show();
                    operazionJq.RicercaMessaggioJQgrid()
                        //JQ.MessaggioJQgrid()

                   
                })

            /*gezione del informazioni sull'ordini*/
                $('.infoOrdi').on('click', function (event) {
                    $('#detailordineId').html("<section><label class='lbldetail'>CLIENTE</label> :<label class='lblinputdetail lblinputclient'></label><br><label class='lbldetail'>QUANTITA</label > :<label class='lblinputdetail lblinputquantita'></label><br><label class='lbldetail'>DATA CONSEGNA</label> :<label class='lblinputdetail lblinputdataC'></label><br><label class='lbldetail'>TIPO DI LAVORO</label> :<label class='lblinputdetail lblinputtipoL'></label><br><label class='lbldetail'>DESCRIZIONE</label> :<label class='lblinputdetail lblinputDescrizione'></label><br></section>")

                    let pippo=0;
                    operazionJq.detailOrdine();


                })
                    },
            loadError: function (a, b, c) {
                let riga 


            },
            ondblClickRow: function (rowid, iRow, iCol, e) {
                               

            },

            beforeEditCell: function (rowid, name, val) {
                before_val = val;
            },

            afterEditCell: function (rowid, name, val, iRow, iCol) {
                               
                              
            },
            beforeSaveCell: function (rowid, name, val, iRow, iCol) {

              
            },
        })

            },
            error: function (a, b, c) {
                let errore = false;
            },

        })
    },
    RicercaMessaggi: function () {
        let NomePersona = JSON.parse(sessionStorage.getItem('InstantUtent'))
        /*Gestion della tabella delle ricerce */
        $.ajax({
            url: '../VB/Ordin.aspx',
            data: {
                Type: 'load',

            },
            type: "POST",
            datatype: "JSON",
            success: function (dati, status) {
                let selectChoix = JSON.parse(dati)
                selectChoix.LAVORATORJS[''] = ''
               

                $.ajax({
                    url: '../VB/Messagi.aspx',
                    data: {
                        Type: 'RicercaMessagioJqTAbleau',
                        idUser: NomePersona.Impiegati,

                    },
                    type: "POST",
                    datatype: "JSON",
                    success: function (datiRic, status) {
                        let DatiDaRicerca = JSON.parse(datiRic)
                        $('#RicercaMessagioTableId').jqGrid({
                            data: DatiDaRicerca.rows,                                
                            datatype: "local",
                            loadonce: true,
                            mtype: 'get',
                            cellEdit: false,
                            cellsubmit: "clientArray",
                            editurl: "clientArray",
                            url: "clientArray",
                            width: 750/*$(window).width() - 50*/,
                            viewrecords: true,
                            caption: "<div>RICERCA</div>",
                            loadtext: "<div></div>",
                            emptyrecords: "Non ci sono elementi da mostrare",
                            loadui: "disabled",
                            rowNum: 1000,                            
                            localReader: {
                                root: 'rows',
                                records: "records",
                                page: "page",
                                total: "total"
                                                          },
                            colModel: [
                                {
                                    name: 'idnotifica',
                                    label: 'Id',
                                    width: 5,
                                    //resizable: false,
                                    formatter: 'integer',
                                    formatoptions: {},
                                    key: true,
                                    hidden: true,
                                    edittable: false,
                                },
                                {
                                    name: "OrdineId",
                                    label: "ORDINE",
                                    hidden: true,
                                    align: "center",
                                    width: 100,
                                    fixed: false,
                                    resizable: true,
                                    formatter: "text",
                                    formatoptions: {

                                    },
                                    editable: false,
                                    edittype: "text",
                                    editoptions: {},
                                    search: false,
                                    stype: "text",
                                    searchoptions: { sopt: ["cn"] },
                                    sortable: true,
                                    sorttype: "text",
                                    //cellattr: pcCellattr
                                },

                                {
                                    name: "Tempo",
                                    label: "DATA  ",
                                    align: "left",
                                    width: 70,
                                    fixed: false,
                                    resizable: true,
                                    formatter: "date",
                                    formatoptions: {
                                        srcformat: "d/m/Y",
                                        newformat: "d/m/Y"
                                    },
                                    editable: false,
                                    edittype: "text",
                                    editoptions: {

                                    },
                                    search: false,
                                    stype: "date",
                                    searchoptions: { sopt: ["eq"] },
                                    sortable: true,
                                    sorttype: "text",
                                    //cellattr: pcCellattr
                                },
                                {
                                    name: "Mitente",
                                    label: "MITTENTE",
                                    align: "left",
                                    width: 140,
                                    fixed: false,
                                    resizable: true,
                                    formatter: "select",
                                    formatoptions: {
                                        value: selectChoix.LAVORATORJS
                                    },
                                    editable: false,
                                    edittype: "text",
                                    editoptions: {},
                                    search: true,
                                    stype: "select",
                                    searchoptions: {
                                        sopt: ["eq"],
                                        value: selectChoix.LAVORATORJS },
                                    sortable: true,
                                    sorttype: "text",
                                    //cellattr: pcCellattr 
                                },
                                {
                                    name: "Destinatario",
                                    label: "DESTINATARIO",
                                    align: "left",
                                    width: 140,
                                    fixed: false,
                                    resizable: true,
                                    formatter: "select",
                                    formatoptions: {
                                        value: selectChoix.LAVORATORJS
                                    },
                                    editable: false,
                                    edittype: "text",
                                    editoptions: {},
                                    search: true,
                                    stype: "select",
                                    searchoptions: {
                                        sopt: ["eq"],
                                        value: selectChoix.LAVORATORJS },
                                    sortable: true,
                                    sorttype: "text",
                                    //cellattr: pcCellattr 
                                },
                                {
                                    name: "Contenuto",
                                    label: "INBOX",
                                    align: "center",
                                    width: 250,
                                    fixed: false,
                                    resizable: true,
                                    formatter: "text",
                                    formatoptions: {

                                    },
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
                                    label: "CONFERMA",
                                    align: "center",
                                    width: 10,
                                    fixed: false,
                                    hidden: true,
                                    resizable: true,
                                    formatter: function (cellvalue, options, rowObject) {

                                        return " "
                                    },
                                    formatoptions: {

                                    },
                                    editable: false,
                                    edittype: "text",
                                    editoptions: {},
                                    search: false,
                                    stype: "text",
                                    searchoptions: { sopt: ["cn"] },
                                    sortable: true,
                                    sorttype: "text",
                                    //cellattr: pcCellattr
                                },
                                {
                                    name: "Titolo",
                                    label: "TITOLO",
                                    align: "left",
                                    width: 100,
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



                            ],
                            loadComplete: function (data) {

                            },
                            loadError: function (a, b, c) {
                                let riga


                            },
                            ondblClickRow: function (rowid, iRow, iCol, e) {


                            },

                            beforeEditCell: function (rowid, name, val) {
                                before_val = val;
                            },

                            afterEditCell: function (rowid, name, val, iRow, iCol) {


                            },
                            beforeSaveCell: function (rowid, name, val, iRow, iCol) {


                            },
                        });

                        //gestion della ricerca al interno delle tabelle 
                        $("#RicercaMessagioTableId").jqGrid('filterToolbar', {

                            resetIcon: "<i class='fa fa-fw fa-times-circle' aria-hidden='true'></i>",
                            searchOperMenu: true,
                            searchOperators: false,
                            enableClear: true,
                            autosearch: true,
                            searchOnEnter: false,
                            multipleSearch: true,
                            autosearchDelay: 750,
                            stringResult: false,
                            defaultSearch: "cn",
                            beforeSearch: function () {

                                //$("#Pc_id").jqGrid("setGridParam", {
                                //    loadonce: true,

                                //});
                                console.log("filterToolbar beforeSearch");
                            },


                            afterSearch: function () {
                                console.log("filterToolbar afterSearch");
                                //$("#Pc_id").jqGrid("setGridParam", {
                                //    //loadonce: false,
                                //});
                            }

                        });

                    },
                error: function (a, b, c) {
                    let errore = false;
                },

            })

               

                

            },
            error: function (a, b, c) {
                let errore = false;
            },

        })
    },
}// gestion della libraire JqGrid con chiamate AJAX
function listO() {

    $('#tb_ordineId').jqGrid({
        url: '../VB/Ordin.aspx',
        width: $(window).width() - 50,
        postData: {
            Type: 'cp',
        }, 
    }).trigger("reloadGrid");

    $('#OrdiASS').jqGrid({
        url: '../VB/Ordin.aspx',
        width: $(window).width() - 50,
        postData: {
            Type: 'cpASS',
        },
    }).trigger("reloadGrid");

    $('#OrdiCHI').jqGrid({
        url: '../VB/Ordin.aspx',
        width: $(window).width() - 50,
        postData: {
            Type: 'ChiusoOrdi',
        },
    }).trigger("reloadGrid");
}//function mettere un timer di repetizione sulla chiamata JqGrid
function dataPikJqgrid(el) {
    $(el).datepicker({
        dateFormat: "dd/mm/yy",
        changeMonth: true,
        changeYear: true,
        showOn: "focus",
        showButtonPanel: false,
        closeText: "Seleziona",
        onClose: function (dateText, inst) {

            $("#OrdiASS").jqGrid("setGridParam", {
                cellEdit: false
            });           

        }

    });
} //gestion della date dentro il jqgrid  

var Jque = {
    dataPik: function (id) {
        $("#"+id).datepicker({
            dateFormat: 'dd/mm/yy',
            changeMonth: true,
            changeYear: true,
            constrainInput: true,
            minDate: new Date()
        });
    },    
    autoCom: function (id,vb,tipo) {
        $('#'+id).autocomplete({

            source: function (request, response) {
                $.ajax({
                    url: '../VB/'+vb+'.aspx',
                    data: {
                        Type: tipo,
                        term: request.term
                    },
                    //type: 'get',
                    datatype: 'JSON',
                    success: function (dati, status) {

                       
                        response(JSON.parse(dati))
                        //console.log(JSON.parse(dati))
                        //response(dati)



                    },
                    error: function (risultat, status, erreur) { },
                })

            },
            minLength: 3,
            select: function (event, ui) {
                event.preventDefault();
               
                Valeur = function (tipo) {
                    if (tipo == 'selectClient') {
                        valeurClient = parseInt(ui.item.value)
                        return valeurClient
                    }
                    else if (tipo == 'selectProdotto') {
                        valeurProdotto = parseInt(ui.item.value)
                        return valeurProdotto
                    }

                    
                }
                //codiceA = parseInt(ui.item.value)
                //utenteA = ui.item.label
                //sedeA = ui.item.sede
                //repartoA = ui.item.reparto
                $(this).val(ui.item.label)

            }

        })
    },
   
}// gestion della libraire JQUERY VIEWER con chiamate AJAX

var Inserimento = {
    //creation di un lavoratore
    Lavoratori: function () {
        $.ajax({
            url: '../VB/Lavoratore.aspx',
            data: {
                Type:"creazioneLavorator",
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
                    $.notify('utente creato ')

                } else if (dati == 1) {

                    $.notify("utente existente ")
                } else {

                    $.notify('è successo un error')
                }

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
        })
    },
    //creation di un client
    Clienti: function () {$.ajax({
            url: '../VB/Client.aspx',
            data: {

                Type:'inserimentoClient',
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
                    $.notify('Cliente creato ')

                } else if (dati == 1) {

                    $.notify("Cliente existente ")
                } else {

                    $.notify('è successo un error')
                }

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
    })
    },
    //creation d'un prodotto
    Prodotti: function () {$.ajax({
            url: '../VB/Prodott.aspx',
            data: {
                Type:"creazioneProdotto",
                TipoProd: $('#tipoProdottoId').val(),
                DescriptionProdotto: $('#descrizioneProdottoId').val(),
                QuantitainitialMerce: 1/*$('#MerceQuantitaRimastaId').val()*/,
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


                    $.notify('Prodotto creato ')

                } else if (dati == 1) {

                    $.notify("Prodotto existente ")
                } else {

                    $.notify('è successo un error')
                }

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
    })
    },
    //creation d'un lavorazione
    Lavorazioni: function () {$.ajax({
            url: '../VB/Lavorazion.aspx',
            data: {
                Type:"creazioneLavorazione",
                TipoLavoraz: $('#TipoLavorazioneId').val(),
                DescriptionLavoraz: $('#DescriptionLavorazioneId').val(),



            },
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati == 2) {
                    $('#TipoLavorazioneId').val('')
                    $('#DescriptionLavorazioneId').val('')


                    $.notify('Prodotto creato ')

                } else if (dati == 1) {

                    $.notify("Prodotto existente ")
                } else {

                    $.notify('è successo un error')
                }

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
    })
    },
    //creation orine
    Ordine: function () {
        $.ajax({
            url: '../VB/Ordin.aspx',
            data: {


                Type:'inserimento',
                ClienteORD: valeurClient,
                ProdottoORD: valeurProdotto,
                QuantitaORD: $('#QuantitaId').val(),
                DataFineORD: $('#TermineLavorazioneId').val(),
                DescriptionORD: $('#DescrizioneId').val(),                
                lavorazione1ORD: $('.chexk' + 1).val(),
                lavorazione2ORD: $('.chexk' + 2).val(),
                lavorazione3ORD: $('.chexk' + 3).val(),
                lavorazione4ORD: $('.chexk' + 4).val()
            },
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati == 2) {
                    $('#QuantitaId').val(''),
                        $('#TermineLavorazioneId').val(''),
                        $('#DescrizioneId').val(''),
                    $.notify('ordine creato ')

                } else if (dati == 1) {

                    $.notify("Ordine existente ")
                } else {

                    $.notify('è successo un error')
                }

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
        })
    },
    //attribuzione di lavoro a un operaio
    Lavoro: function () {
        $.ajax({
            url: '../VB/Lavor.aspx',
            data: {

                Type: 'selectLavoro',
                utenteLavId: valeurUtenteLav,
                utentegesId: valeurUtenteGes,
                Dataconsegna: $('#DataConsegnaLavoroId').val(),
                idOrdine: valobject,
            },
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati == 2) {
                    $('#Utente_lav_id').val('')
                    $('#Utente_ges_id').val('')
                    $('#DataConsegnaLavoroId').val('')
                    
                    $.notify('Lavoro creato ')

                } else if (dati == 1) {

                    $.notify("Lavoro existente ")
                } else {

                    $.notify('è successo un error')
                }

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
        })
    },
    ModificaLAvoro: function () {
        $.ajax({
            url: '../VB/Lavor.aspx',
            data: {

                Type: 'modificaLavoro',
                commentolavId: $('.Commentolavora_cl').val(),
                idlavoro: valobject,
            },
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati == 2) {
                    $('.Commentolavora_cl').val('')

                    //$.notify('Commento Aggiunto ')

                } else if (dati == 1) {

                    $.notify("Lavoro existente ")
                } else {

                    $.notify('è successo un error')
                }

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
        })
    },
    ChiudereLAvoro: function () {
        $.ajax({
            url: '../VB/Ordin.aspx',
            data: {

                Type: 'chiudereLavoro',                
                idlavoro: valobject,
            },
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati == 2) {
                   

                    $.notify('Lavoro Chiuso ')
                    $("#messagioTableId").delRowData(parseInt(valobject));

                } else if (dati == 1) {

                    $.notify("Lavoro existente ")
                } else {

                    $.notify('è successo un error')
                }

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
        })
    },
    InviareNotificaAvanzamentoMSG: function () {
        $.ajax({
            url: '../VB/Messagi.aspx',
            data: {

                Type:"messagJqNormale",
                titolo: "Avanzamento Lavoro",
                contenuto: "La percentual del Lavoro è stato modificato a " + Lapercento+"%",
                mittente: data_valore_mittente,
                destinatario: data_valore_destinatario,
                ordine: data_valore_Ordine,
                


            },
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {

                if (dati == 2) {
                    


                    $.notify('Messaggio Inviato ')

                } else if (dati == 1) {

                    $.notify("Messaggio non Inviato ")
                } else {

                    $.notify('Messaggio non Inviato')
                }

            },
            Error: function (dati) {
                let pipo=0
            },
            complete: function (dati) {
                
            }
        })
    },
    MailVista: function () {
        /*gestino del event di vista mail*/
        $.ajax({
            url: '../VB/Messagi.aspx',
            data: {
                Type: 'mailvista',
                idOrdine: event.target.attributes.dataidordineval.value,
                idNotifica: event.target.attributes.dataIdNotificaVal.value,
                stato: event.target.attributes.datastatoval.value,
            },
            type: "POST",
            datatype: "JSON",
            success: function (dati, status) {
                console.log(dati)
                $("#messagioTableId").delRowData(parseInt(event.target.attributes.dataIdNotificaVal.value));
            },
            error: function (a, b, c) {
                let errore = false;
            },

        })
    },

}

var operazionJq = {
    addlovaro: function () {
        $('.addlavo').on('click', function (event) {
            event.stopPropagation();
            event.preventDefault();

            $('#addlavoratore').append("<p><label for= 'Utentelavora' > Utente Chi Lavora:</label > <input type='text' id='Utente_lav_id' class='Utente_lav_cl' name='Utentelavora'/></p ><p><label for='Utentegestion'>Utente Che Gestiche:</label><input type='text' id='Utente_ges_id' class='Utente_lav_cl' name='Utentegestion'/></p ><p><label for='DataConsegnaLavoro'>Data Consegna Lavoro :</label><input type='datetime' id='DataConsegnaLavoroId' class='DataConsegnaLavoroCl' name='DataConsegnaLavoro'/></p>")

             valobject = event.target.attributes.data_valore.value;
            console.log(valobject)
            $('#addlavoratore').dialog({
                resizable: false,
                draggable: false,
                height: "auto",
                title: "Attribure Ordine",
                width: 600,
                height: 320,
                modal: true,
                buttons: {
                    "INVIO": function () {
                                                
                        Inserimento.Lavoro();
                        $("#tb_ordineId").delRowData(parseInt(valobject));
                        $(this).dialog("close");
                        $('#addlavoratore').html('');
                    }
                },
                position: {
                        my: "center center",
                        at: "center center",
                       of: window
                },
                focus: function (event, ui) {

                    $('#Utente_ges_id').autocomplete({

                        source: function (request, response) {
                            $.ajax({
                                url: '../VB/Lavor.aspx',
                                data: {
                                    Type: 'selectutentegest',
                                    term: request.term
                                },
                                //type: 'get',
                                datatype: 'JSON',
                                success: function (dati, status) {


                                    response(JSON.parse(dati))
                                    //console.log(JSON.parse(dati))
                                    //response(dati)

                                },
                                error: function (risultat, status, erreur) { },
                            })

                        },
                        minLength: 3,
                        select: function (event, ui) {
                            event.preventDefault();

                            valeurUtenteGes = parseInt(ui.item.value)


                            //codiceA = parseInt(ui.item.value)
                            //utenteA = ui.item.label
                            //sedeA = ui.item.sede
                            //repartoA = ui.item.reparto
                            $(this).val(ui.item.label)

                        }

                    })

                    $('#Utente_lav_id').autocomplete({

                        source: function (request, response) {
                            $.ajax({
                                url: '../VB/Lavor.aspx',
                                data: {
                                    Type: 'selectutenteLav',
                                    term: request.term
                                },
                                //type: 'get',
                                datatype: 'JSON',
                                success: function (dati, status) {


                                    response(JSON.parse(dati))
                                    //console.log(JSON.parse(dati))
                                    //response(dati)

                                },
                                error: function (risultat, status, erreur) { },
                            })

                        },
                        minLength: 3,
                        select: function (event, ui) {
                            event.preventDefault();

                            valeurUtenteLav = parseInt(ui.item.value)


                            //codiceA = parseInt(ui.item.value)
                            //utenteA = ui.item.label
                            //sedeA = ui.item.sede
                            //repartoA = ui.item.reparto
                            $(this).val(ui.item.label)

                        }

                    })

                    Jque.dataPik("DataConsegnaLavoroId")
                },
                close: function (event, ui) {
                    $('#addlavoratore').html('');
                    
                }
                
                
                
                    
            
            })

            
        })
    },// gestice l'attribuzione di un ordine a un utente da lavorare 
    addCommento: function () {
        $('.CommentoLavorator').on('click', function (event) {
            event.stopPropagation();
            event.preventDefault();

            

            $('#addlavoratore').append("<p><label for= 'Commentolavora' > Commento:</label > <textarea  id='Commentolavora_id' class='Commentolavora_cl' name='Commentolavora' rows='4' cols='50'></textarea></p >")

            valobject = event.target.attributes.data_valore.value;
            LapercentoComm = event.target.attributes.data_descrt.value;
            
            console.log(valobject)
            $('#addlavoratore').dialog({
                resizable: false,
                draggable: false,
                height: "auto",
                title: "Commento Ordine",
                width: 600,
                height: 320,
                modal: true,
                buttons: {
                    "INVIO": function () {

                        Inserimento.ModificaLAvoro();
                        $(this).dialog("close");
                        $('#addlavoratore').html('');
                    }
                },
                position: {
                    my: "center center",
                    at: "center center",
                    of: window
                },
                focus: function (event, ui) {        
                    let pippo = 0
                    event.target.children[0].childNodes[2].innerText = LapercentoComm
                    
                    },
                close: function (event, ui) {
                    //$(this).dialog("close");
                    $('#addlavoratore').html('');
                    $('#OrdiASS').jqGrid({
                        url: '../VB/Ordin.aspx',
                        width: $(window).width() - 50,
                        postData: {
                            Type: 'cpASS',
                        },
                    }).trigger("reloadGrid");

                }





            })


        })
    },// gestice l'aggiunto di un commento
    ConcludereLavoro: function () {
        $('.lavoroFatto').on('click', function (event) {
            event.stopPropagation();
            event.preventDefault();

            

            valobject = event.target.attributes.data_valore.value;
            console.log(valobject)
            Inserimento.ChiudereLAvoro()
            


        })
    },//gestice il click della chiusure di una lavorazione
    AvanzamentoLavoro: function () {
       
        $('.AvanzalavoroCl').slider({
            range: true,
            min: 0,
            max: 100,           
            value:Lapercento,
            slide: function (event,ui)
            {
                $(this).prev()[0].value = ui.value +'%'            
               
                
                
            },
            stop: function (event, ui) {
               data_valore_mittente=event.target.attributes.data_valore_mittente.value       
                data_valore_destinatario = event.target.attributes.data_valore_destinatario.value
                Lapercento = ui.value;
                data_valore_Ordine = event.target.attributes.data_Ordine.value
                //event.target.attributes.data_celvalue.value
                $.ajax({
                    url: '../VB/Lavor.aspx',
                    data: {
                        Type: 'AvanzamentoLavoro',
                        Cella: ui.value,                       
                        riga: event.target.attributes.data_valore.value,
                        
                    },
                    type: 'POST',
                    datatype: 'JSON',
                    async: false,
                    success: function (dati, status) {
                        if (dati == 2) {

                            Inserimento.InviareNotificaAvanzamentoMSG();
                                                        
                        } else if (dati != 1) {
                            $.notify('Operazione non riuscita, questo dato esiste già')                            
                        } else {
                            console.log('operazione Non riuscito')                            
                        }

                    },
                    error: function (risultat, status, erreur) {
                       let pippo =2
                    }
                })

            },
            

        });

                      
    },//gestice la percentuale di lavoro
    ADDprodottoJQgrid: function () {
        $('#divcontenutoId').dialog({
            resizable: false,
            draggable: false,            
            title: "INSERIMENTO PRODOTTO",
            width: 380,
            height: 280,
            modal: true,
            buttons: {
                "INVIO": function () {

                    Inserimento.Prodotti();
                    $(this).dialog("close");
                    $('#divcontenutoId').html('');
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
                $('#divcontenutoId').html('');
                $('#OrdiASS').jqGrid({
                    url: '../VB/Ordin.aspx',
                    width: $(window).width() - 50,
                    postData: {
                        Type: 'cpASS',
                    },
                }).trigger("reloadGrid");

            }





        })
    },
    ADDordineJQgrid: function () {
        $('#divcontenutoId').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "INSERIMENTO ORDINE",
            width: 630,
            height: 410,
            modal: true,
            buttons: {
                "INVIO": function () {

                    Inserimento.Ordine();
                    $(this).dialog("close");
                    $('#divcontenutoId').html('');
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
                $('#divcontenutoId').html('');
                $('#OrdiASS').jqGrid({
                    url: '../VB/Ordin.aspx',
                    width: $(window).width() - 50,
                    postData: {
                        Type: 'cpASS',
                    },
                }).trigger("reloadGrid");

            }





        })
    },
    ADDclienteJQgrid: function () {
        $('#divcontenutoId').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "INSERIMENTI CLIENT",
            width: 680,
            height: 220,
            modal: true,
            buttons: {
                "INVIO": function () {

                    Inserimento.Clienti();
                    $(this).dialog("close");
                    $('#divcontenutoId').html('');
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
                $('#divcontenutoId').html('');
                $('#OrdiASS').jqGrid({
                    url: '../VB/Ordin.aspx',
                    width: $(window).width() - 50,
                    postData: {
                        Type: 'cpASS',
                    },
                }).trigger("reloadGrid");

            }





        })
    },
    ADDlavoratoreJQgrid: function () {
        $('#divcontenutoId').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "INSERIMENTO LAVORATORE",
            width: 730,
            height: 220,
            modal: true,
            buttons: {
                "INVIO": function () {

                    Inserimento.Lavoratori();
                    $(this).dialog("close");
                    $('#divcontenutoId').html('');
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
                $('#divcontenutoId').html('');
                $('#OrdiASS').jqGrid({
                    url: '../VB/Ordin.aspx',
                    width: $(window).width() - 50,
                    postData: {
                        Type: 'cpASS',
                    },
                }).trigger("reloadGrid");

            }





        })
    },
    ADDlavorazioneJQgrid: function () {
        $('#divcontenutoId').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "INSERIMENTO LAVORAZIONE",
            width: 400,
            height: 245,
            modal: true,
            buttons: {
                "INVIO": function () {

                    Inserimento.Lavorazioni();
                    $(this).dialog("close");
                    $('#divcontenutoId').html('');
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
                $('#divcontenutoId').html('');
                $('#OrdiASS').jqGrid({
                    url: '../VB/Ordin.aspx',
                    width: $(window).width() - 50,
                    postData: {
                        Type: 'cpASS',
                    },
                }).trigger("reloadGrid");

            }





        })
    },
    MessaggioJQgrid: function () {
        //JQ.MessagioUtente()
        $('#MessagioId').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "Messaggio",
            width: 700,
            height: 320,
            modal: true,
            //buttons: {
            //    "INVIO": function () {

                   
            //        $(this).dialog("close");
            //        $('#MessagioId').html('');
            //    }
            //},
            position: {
                my: "center center",
                at: "center center",
                of: window
            },
            focus: function (event, ui) {


            },
            close: function (event, ui) {
                //$(this).dialog("close");
                $('#MessagioId').hide();
                $('#messagioTableId').jqGrid({
                    url: '../VB/Messagi.aspx',
                    width: $(window).width() - 50,
                    postData: {
                        Type: 'MessagioJqTAbleau',
                    },
                }).trigger("reloadGrid");

            }





        })
    },
    RicercaMessaggioJQgrid: function () {
        //JQ.MessagioUtente()
        $('#RicercaMessagioId').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "RICERCA",
            width: 760,
            height: 320,
            modal: true,
            //buttons: {
            //    "INVIO": function () {


            //        $(this).dialog("close");
            //        $('#MessagioId').html('');
            //    }
            //},
            position: {
                my: "center center",
                at: "center center",
                of: window
            },
            focus: function (event, ui) {


            },
            close: function (event, ui) {
                //$(this).dialog("close");
                $('#RicercaMessagioId').hide();                

            }





        })
    },
    detailOrdine: function () {

        $('#detailordineId').dialog({
            resizable: false,
            draggable: false,
            height: "auto",
            title: "DETAGLIO ORDINE",
            width: 400,
            height:300,
            modal: true,
            //buttons: {
            //    "INVIO": function () {


            //        $(this).dialog("close");
            //        $('#MessagioId').html('');
            //    }
            //},
            position: {
                my: "center center",
                at: "center center",
                of: window
            },
            focus: function (event, ui) {


            },
            close: function (event, ui) {
                //$(this).dialog("close");
                $('#padredetailordineId').hide();
                $('#detailordineId').html('');
                
                

            }





        })
    }

}

document.onreadystatechange = function (e)
{

    

    
    if (document.readyState === 'interactive') {

        let NomePerson = JSON.parse(sessionStorage.getItem('InstantUtent'))

        $('#salutation_id').html("Buongiorno  " + NomePerson.Cognome+' '+NomePerson.Nome)
        console.log(NomePerson.Ruolo)
        
        if (NomePerson.Ruolo == 1) {
            $('#li_id1,#AddItem,#li_id3,#ordiniChiuso').hide();           
            $("#nav_id1").tabs({
                active: 1,
                activate: function (event, ui) {

                    //console.log($(ui.newTab).text())
                    if ($(ui.newTab).text() == 'ORDINE') {
                        
                    }
                    if ($(ui.newTab).text() == 'LAVORO') {
                        setInterval(listO, 100000)
                    }
                }
            });

        } else if (1 < NomePerson.Ruolo && NomePerson.Ruolo <= 3) {
            $('#li_id1,#AddItem').hide()            
            $("#nav_id1").tabs({
                active: 2,
                activate: function (event, ui) {

                    //console.log($(ui.newTab).text())
                    if ($(ui.newTab).text() == 'ORDINE') {
                        setInterval(listO, 100000)
                    }
                    if ($(ui.newTab).text() == 'LAVORO') {
                        setInterval(listO, 100000)
                    }
                }
            });
        } else if (NomePerson.Ruolo > 3) {
           
            $("#nav_id1").tabs({
                active: 0,
                activate: function (event, ui) {

                    //console.log($(ui.newTab).text())
                    if ($(ui.newTab).text() == 'ORDINE') {
                        setInterval(listO, 100000)
                    }
                    if ($(ui.newTab).text() == 'LAVORO') {
                        setInterval(listO, 100000)
                    }
                }
            });
        }


        

        $('.articleadditem_Cl').html("<div id='contientId'><p id='utenteSaluto'></p ><article id='divcontenutoId'></article><p id='btcontenutoId'></p></div >")

        let Ruolo = [{ "desc": "Responsabile UFF", "val": 2 }, { "desc": "Administrater", "val": 1 }, { "desc": "Segretaria", "val": 4 }, { "desc": "Dipendente", "val": 3 }, { "desc": "Operai", "val": 5 }]

       
        // $('#utenteSaluto').html('Buongiorno ' + NomeUtente.utente)

        $('#btcontenutoId').html("<button id='btLavoratorId' class='btLavoratorCl bt_cl lavoratoriCL'>LAVORATORE</button><button id='btClienteId' class='btClienteCl bt_cl ClienteCL'>CLIENTE</button><button id='btProdottoId' class='btProdottoCl bt_cl ProdottoCl'>PRODOTTO</button><button id='btLavorazioneId' class='btLavorazioneCl bt_cl LavorazioneCl'>LAVORAZIONE</button><button id='btOrdineId' class='btOrdineCl bt_cl OrdineCl'>ORDINE</button>")

        $.ajax({
            url: '../VB/Ordin.aspx',
            data: {

                Type: 'select'

            },
            type: 'POST',
            datatype: 'JSON',
            success: function (dati, status) {
                selectCX = JSON.parse(dati)

            },
            Error: function () { },
            complete: function (dati) {
                load.Disableloading()
            }
        })

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
         else if ($(this).attr('id') == 'btLavorazioneId') {

             $('#divcontenutoId').html("<div><p><label for='TipoLavorazione'>Tipo Lavorazione :</label><Input id='TipoLavorazioneId' class='TipoLavorazioneCl' name='TipoLavorazione'/><label for='DescriptionLavorazione'> Description Lavorazione :</label><textarea  type='text' rows='4' cols='50' maxlength='200' id='DescriptionLavorazioneId' class='DescriptionLavorazioneCl textariamio' name='DescriptionLavorazione'></textarea ></p>")
             $('#divcontenutoId').append("<button id='btLavorazioneInvioId' class='btLavorazioneInvioCl '>INVIO</button><button id='btLavorazioneCancelId' class='btLavorazioneCancelCl CancelCl'>CANCEL</button>")
         }//creation dell' input merce
         else if ($(this).attr('id') == 'btOrdineId') {
             $('#divcontenutoId').html("<div><label for='Cliente'>Cliente :</label><input type='text' name='Cliente' id='ClienteId' class='ClienteCl'/><label for='Merce'> Tipo Riso :</label><input type='text' name='Merce' id='MerceId' class='MerceCl'/><label for='Quantita'>Quantita :</label><input type='number' id='QuantitaId' class='QuantitaCl' name='Quantita'/><br><label for='TermineLavorazione'>Termine Lavorazione :</label><input type='datetime' id='TermineLavorazioneId' class='TermineLavorazioneCl' name='TermineLavorazione'/><br><label for='Descrizione'> Descrizione :</label><textarea name='Descrizione' id='DescrizioneId' class='DescrizioneCl' rows='4' cols='50'></textarea> </div>")
             
             for (let x of selectCX.LAVOROJS) {
                 $('#divcontenutoId').append("<div class='checbox_Cl'><input type='checkbox' input id ='" + x.label + "Id' class='" + x.label + "Cl chx chexk" + x.value + " 'name = '" + x.label + "' value = '" + x.value + "' checked /> <label for='" + x.label + "'>" + x.label+" </label>")
                 "lavorazione" + x.value + ":$(" + x.label + "Id).val()," 
             }
             $('#divcontenutoId').append("<button id='btOrdineInvioId' class='btOrdineInvioCl '>INVIO</button><button id='btOrdineCancelId' class='btOrdineCancelCl CancelCl'>CANCEL</button>")

             $('.chx').on('click',function () {

                 if ($(this).is(':checked')) {
                     
                 } else {
                     $(this).removeAttr('value')  
                 }
             })
             
             $('#ClienteId').autocomplete({

                     source: function (request, response) {
                         $.ajax({
                             url: '../VB/Ordin.aspx',
                             data: {
                                 Type: 'selectClient',
                                 term: request.term
                             },
                             //type: 'get',
                             datatype: 'JSON',
                             success: function (dati, status) {


                                 response(JSON.parse(dati))
                                 //console.log(JSON.parse(dati))
                                 //response(dati)



                             },
                             error: function (risultat, status, erreur) { },
                         })

                     },
                     minLength: 3,
                     select: function (event, ui) {
                         event.preventDefault();

                         valeurClient =parseInt(ui.item.value)                         
                                                                          
                         //codiceA = parseInt(ui.item.value)
                         //utenteA = ui.item.label
                         //sedeA = ui.item.sede
                         //repartoA = ui.item.reparto
                         $(this).val(ui.item.label)

                     }

             })

             $('#MerceId').autocomplete({

                 source: function (request, response) {
                     $.ajax({
                         url: '../VB/Ordin.aspx',
                         data: {
                             Type: 'selectProdotto',
                             term: request.term
                         },
                         //type: 'get',
                         datatype: 'JSON',
                         success: function (dati, status) {


                             response(JSON.parse(dati))
                             console.log(JSON.parse(dati))
                             //response(dati)

                         },
                         error: function (risultat, status, erreur) { },
                     })

                 },
                 minLength: 3,
                 select: function (event, ui) {
                     event.preventDefault();

                     valeurProdotto = parseInt(ui.item.value)


                     //codiceA = parseInt(ui.item.value)
                     //utenteA = ui.item.label
                     //sedeA = ui.item.sede
                     //repartoA = ui.item.reparto
                     $(this).val(ui.item.label)

                 }

             })

             Jque.dataPik("TermineLavorazioneId")

             //Jque.autoCom('ClienteId', 'Ordin','selectClient')
             //Jque.autoCom('MerceId', 'Ordin', 'selectProdotto')
             

            
             
         }//creation dell' input ordine
     }) 
        //gestion della tabella di notifica
        JQ.MessagioUtente();
        $('#MessagioId').hide();
        $('.btIconMessagio').click(function () {
            $('#MessagioId').show();
            operazionJq.MessaggioJQgrid()
            //JQ.MessaggioJQgrid()

        })

        //gestion della tabella di ricerca
        JQ.RicercaMessaggi();
        $('#RicercaMessagioId').hide();

        $('article').hide()

        

       
    //    //$('#contientId').show()
    //    //$('img').hide()

        $('#li_id4').click(function () {
            sessionStorage.removeItem('InstantUtent');
            //window.location = "http://localhost/Access.html"
            //window.location.href = "/test/Access.html"
            window.location.pathname = "../../Access/Templates/Index.html"
            console.log("pagina 1")

        })
    }
   

    

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
            Inserimento.Lavoratori()
        })
        $(".CancelCl").on('click', function () {
            $('#divcontenutoId').html("")
        })

        
        
    })
   
    $('.ClienteCL').click(function () {
        load.loaderhtml()
        $('#btpclienteInvioId').on('click', function () {
           Inserimento.Clienti()
        })
        $(".CancelCl").on('click', function () {
            $('#divcontenutoId').html("")
        })
    })
  
    $('.ProdottoCl').click(function () {
        load.loaderhtml()
        $('#btprodottoInvioId').on('click', function () {

          Inserimento.Prodotti()           
        })
        $(".CancelCl").on('click', function () {
            $('#divcontenutoId').html("")
        })
    })

    $('.LavorazioneCl').click(function () {
        load.loaderhtml()
        $('#btLavorazioneInvioId').on('click', function () {
           Inserimento.Lavoratori()
        })

        $(".CancelCl").on('click', function () {
            $('#divcontenutoId').html("")
        })
    })

    $('.OrdineCl').click(function () {

        $('#btOrdineInvioId').on('click', function () {
            let len = $('.chx:checked')           
           

            //$('.chx').on('click', function (e) {
            //    console.log(e)
            //    let elem = document.getElementById(e.target.id)
            //    if (!elem.checked) {
            //        let pippo = $('.chx [checked=false]')
            //        $(pippo).removeAttr('value')
            //    }

            //})

        Inserimento.Ordine()
        })

        $(".CancelCl").on('click', function () {
            $('#divcontenutoId').html("")
        })

    })

    
    
    JQ.selecteurIndex()
    JQ.DareLavoro()
    JQ.ChiudiOrdine()
    
    
    //JQ.CreaOrdine()
    
    
})