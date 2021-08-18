

var dialogList = {
    listClienti: function () {
        $.ajax({
            url: '../../Home/VB/Client.aspx',
            //contentType: "application/json; charset=utf-8",
            data: {
                Type: 'DialogClientLista',

            },
           // type: "DELETE",
            datatype: "JSON",
            success: function (dati, status) {

                let = dato = JSON.parse(dati)
               // console.log(dato.rows)
                
                    //$(".listadeilaroratori").delRowData(parseInt(event.target.attributes.data_valore.value));
                    //$.notify('Operazione Riuscito', 'success')
                for (var K in dato.rows) {
                    console.log(dato.rows[K].Description)
                    $('.tableauContientCl').append("<tr><td class='" + dato.rows[K].Description+"_CL Clienti_Choix_Cl' datavalu='" + dato.rows[K].Codice+"'> " + dato.rows[K].Description + " </td></tr>")
                    console.log(dato.rows[K].Description)
                }
                $('.dialogConfermaCl').css('display', 'block')
                $('.dialogConfermaCl').dialog({
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    title: "LISTA CLIENTI",
                    width: 250,
                    height: 350,
                    modal: true,

                    position: {
                        my: "center center",
                        at: "center center",
                        of: window
                    },
                    focus: function (event, ui) {
                        $('.Clienti_Choix_Cl').on('click', function () {

                           
                            $('#client_Ordi_id').val($(this)[0].textContent)  
                            $(this).parents(".ui-dialog-content").dialog("close");
                        })

                    },
                    close: function (event, ui) {
                        //$(this).dialog("close");
                        $('.dialogConfermaCl').html('');

                    }





                })
            },
            error: function (a, b, c) {
                let errore = false;
            },

        })
    },
    AutocomplateClient: function () {
       
    },

}
//autocomplate per inserimento del utente
$('.Cliente_Ordi_cl').autocomplete({

    source: function (request, response) {
        $.ajax({
            url: '../../Home/VB/Ordin.aspx',
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

$(function () {

    $('.OrdiniLavorazioneCl').on('click', function () {
       // $('.HomeOrdiniLavorazioneCl').html("<div class='contenutoOrdiniLavorazioneCl'></div>")
        $('.HomeTabTabelleCl').html("<div class='contenutoOrdiniLavorazioneCl'></div>")
        $('.contenutoOrdiniLavorazioneCl').html("<div class='ContainTabTabelleCL'><div><label for='client'>CLIENTE</label>:<input name='client' type='text' id='client_Ordi_id' class='client_Ordi_cl'/></div><div><label for='Tiporiso'>TIPO RISO</label>:<input name='Tiporiso' type='text' id='Tiporiso_Ordi_id' class='Tiporiso_Ordi_cl'/></div><div><label for='Tipolavorazione'>TIPO LAVORAZIONE</label>:<input name='Tipolavorazione' type='text' id='Tipolavorazione_Ordi_id' class='Tipolavorazione_Ordi_cl'/></div><div><label for='Quantita'>QUANTITA</label>:<input name='Quantita' type='numeric' id='Quantita_Ordi_id' class='Quantita_Ordi_cl'/></div><div><label for='Finelavorazione'>FINE LAVORAZIONE</label>:<input  name='Finelavorazione' type='datetime' id='Finelavorazione_Ordi_id' class='Finelavorazione_Ordi_cl'/></div><div><label for='Note'>NOTE</label>:<textarea name='Note'  rows='3' cols='28' maxlength='100' id='Note_Ordi_id' class='Note_Ordi_cl'></textarea></div></div>")
        $('.contenutoOrdiniLavorazioneCl').append("<div><button class='Cliente_Ordi_cl'>CLIENTE</button><button class='Lavoratore_Ordi_cl'>LAVORATORE</button><button class='Prodotto_Ordi_cl'>PRODOTTO</button><button class='Tipolavorazione_Ordi_cl'>TIPO LAVORAZIONE</button></div> <div class='ContainDialCl ' ></div>")

        
       
        $('.Cliente_Ordi_cl').on('click', function () {       
                    
            creaElementi.creaClient()
        })
        $('.Lavoratore_Ordi_cl').on('click', function () {
            creaElementi.creaLavoratore()
        })
        $('.Prodotto_Ordi_cl').on('click', function () {
            creaElementi.creaProdotto()
        })
        $('.Tipolavorazione_Ordi_cl').on('click', function () {
            creaElementi.creaTipolavorazione()
        })

        //event click task invio dentro input clienti
        $('.client_Ordi_cl').keypress(function (event) {
            if (event.keyCode === 13) {
                $('.dialogConfermaCl').html("<table class='tableauContientCl' ><tr class='primo_TR_Cl'><th>NOME</th></tr></tabele>")
                $('.dialogConfermaCl').css('display','none')
                dialogList.listClienti()
                
            }
           
        })

         
       
        
    })
})