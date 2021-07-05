$(function () {

    $('.OrdiniLavorazioneCl').on('click', function () {
       // $('.HomeOrdiniLavorazioneCl').html("<div class='contenutoOrdiniLavorazioneCl'></div>")
        $('.HomeTabTabelleCl').html("<div class='contenutoOrdiniLavorazioneCl'></div>")
        $('.contenutoOrdiniLavorazioneCl').html("<div class=''><div><label>CLIENTE</label>:<input id='' class=''/></div><div><label>TIPO RISO</label>:<input id='' class=''/></div><div><label>TIPO LAVORAZIONE</label>:<input id='' class=''/></div><div><label>QUANTITA</label>:<input id='' class=''/></div><div><label>FINE LAVORAZIONE</label>:<input id='' class=''/></div><div><label>NOTE</label>:<textarea  rows='3' cols='28' maxlength='100' id='' class=''> </textarea></div></div>")
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
    })
})