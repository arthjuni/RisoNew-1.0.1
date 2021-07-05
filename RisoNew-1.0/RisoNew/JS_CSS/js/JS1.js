
let utente = $('#utente_id').val() //utente
let password = $('#password_id').val() //password utente


//$("#nav_id1").tabs()
let countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla",
    "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil",
    "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos Islands", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands",
    "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Honduras",
    "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
    "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norfolk Island",
    "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russian Federation", "Rwanda", "Saint Helena",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Georgia", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "The Former Yugoslav Republic of Macedonia", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands, British",
    "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]

let AreaGeografica = ["montagne", "piano", "plateau", "forest"]
let Ruolo = [{ "desc": "Responsabile UFF", "val": 2 }, { "desc": "Administrater", "val": 1 }, { "desc": "Segretaria", "val": 4 }, { "desc": "Dipendente", "val": 3 }, { "desc": "Operai", "val": 5} ]
let Repart = ["Administration","Officina","Magazino"]
let AreaT;




//let PRS;
$(function () {

    



    let lavo= $.ajax({
        url: 'Home.aspx',
        data: {
            tipo: 'lavoroSL'
        },
        type: 'get',
        datatype: 'JSON',
        success: function (dati, status) {
            let dat=JSON.parse(dati)

            //PRS = dat

                let valll = 2

            for (let x of dat.UT) {
                $('.responsabile_LV_cl').append('<option value=' + x.UTID + '>' + x.PRID + '</option>')
                $('.lavoratore_LV_cl').append('<option value=' + x.UTID + '>' + x.PRID + '</option>')
                console.log(x.UTID, x.PRID)
            }

            
        },
        Error: function () { }
    })

    let merc= $.ajax({
        url: 'Home.aspx',
        data: {
            tipo: 'merceSL'
        },
        type: 'get',
        datatype: 'JSON',
        success: function (dati, status) {
            let dat = JSON.parse(dati)

            //PRS = dat

            let valll = 2

            for (let x of dat.MA) {
                $('.magazino_MC_cl').append('<option value=' + x.UTID + '>' + x.PRID + '</option>')
                
                console.log(x.UTID, x.PRID)
            }

            for (let x of dat.SCH) {
               $('.prodotto_MC_cl').append('<option value=' + x.UTID + '>' + x.PRID + '</option>')

                console.log(x.UTID, x.PRID)
            }


        },
        Error: function () { }
    })

    let ordi= $.ajax({
        url: 'Home.aspx',
        data: {
            tipo: 'ordineSL'
        },
        type: 'get',
        datatype: 'JSON',
        success: function (dati, status) {
            let dat = JSON.parse(dati)

            //PRS = dat

            let valll = 2

            for (let x of dat.ME) {
                if (x.MEQU == '0') {

                } else {
                    $('.merce_OR_cl').append('<option value=' + x.UTID + '> Seme :' + x.PRID + '   ;Magazzino :' + x.MEMA + '   ;QUANTITA : ' + x.MEQU + '</option>')
                }
               

                console.log(x.UTID, x.PRID,x.MEMA)
            }

            for (let x of dat.LA) {
                $('.commessa_OR_cl').append('<option value=' + x.UTID + '> Gestito da :' + x.PRID + '   ;Preparato da :' + x.MEMA + '</option>')

                console.log(x.UTID, x.PRID)
            }

            for (let x of dat.CL) {
                $('.Cliente_OR_cl').append('<option value=' + x.UTID + '> ' + x.PRID + '</option>')

                console.log(x.UTID, x.PRID)
            }

        },
        Error: function () { }
    })

    $("#DataCreazione_merce_id").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        constrainInput: true,
        minDate: new Date()
    })
    $("#Data_creazione_OR_id").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        constrainInput: true,
        minDate: new Date()
    })
    $("#DataCreazione_cliente_id").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        constrainInput: true,
    })
    $("#DataNascita_id").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        constrainInput: true,
    })
    $("#Data_Pr_Consegna_id").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        constrainInput: true,
        minDate: new Date()

    })

    $("#DataAssegno_LV_id").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        constrainInput: true,

        //minDate: new Date()

    })



    $("#nav_id1").tabs()
    
    //$("#localita_id").selectmenu().selectmenu("menuWidget").css("height","200px") //selection della lista delle localita
    

    //$("#areageografica_id").selectmenu() //selection della lista dei paese

    

    for (var i = 0; i < AreaGeografica.length; i++) {
        $('.areageografica_cl').append('<option>' + AreaGeografica[i]+'</option>')
    }

    for (var i = 0; i < countries.length; i++) {
        $('.localita_cl').append('<option value='+ countries[i] + '>' + countries[i] + '</option>')
    }


    for (var i = 0; i < countries.length; i++) {
        $('.maga_paese_cl').append('<option value=' + countries[i] + '>' + countries[i] + '</option>')
    }

    
    for (var i of Ruolo) {
        
        $('.Ruolo_cl').append('<option value=' + i.val + '>' + i.desc + '</option>')
    }

    for (var i = 0; i < Repart.length; i++) {
        $('.Repart_cl').append('<option value=' + Repart[i] + '>' + Repart[i] + '</option>')
    }

 /*
    $('.localita_cl').scrollTop($("select").find("option[value='Zimbabwe']").offset().top)

    tableau inizio
   
    
    
    function INter() {
        let riempilistordine = function () {
            $.ajax({
                url: 'Home.aspx',
                data: {
                    tipo: 'listordine'
                },
                type: 'get',
                datatype: 'JSON',
                success: function (dati, status) {
                    let dat = JSON.parse(dati)

                    //PRS = dat

                    let valll = 2
                    $('#tbordine_id').html('<thead>< tr ><th>Seme</th><th>Tipo</th><th>quantitaRiquiesta</th><th>Persone</th></tr ></thead ><tbody id="tbody_id"></tbody>')

                    //let riga = $('#tbordine_id')
                    let a = 0
                    let s = 0

                    
                    for (let x of dat.LST_ORDINE) {
                        a++
                       

                        for (let b of dat.LST_ORDINE.rows[x].cells) {
                            s++
                        
                        $('#tbody_id').append('<tr id=' + a + '><td id=td_' + s + '>' + x.seme + '</td><td id=td_' + s + '>' + x.tipo + '</td><td id=td_' + s + '>' + x.quantitaRiquiesto + '</td><td id=td_' + s +'>' + x.persone + '</td></tr>')

                            console.log(a)
                            console.log(s)

                           
                        }
                        
                    }


                },
                Error: function () { }
            })
        }
        riempilistordine()
        setInterval(riempilistordine, 120)
    }
    
    

    let TABLE = $('#tbordine_id').rows.length,rIndex,cIndex;


    for (i = 0; i < TABLE; i++) {



        let cellule = TABLE.rows.item(i).cells

        for (j = 0; j < cellule.length; j++) {

            $('#tbordine_id').rows[i].cells[j].on('click', function () {
                console.log("ligne"+i+" colone : "+j)
            })
            
        }

    }

    

    tableau fine


  

    $("#Data_creazione_OR_id").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        constrainInput: true,

        //minDate: new Date()

    })

 */

    $('.bt_rt_cl').click(function () {
        $("#bt_utente_id,#bt_magazino_id,#bt_produzione_id,#bt_cliente_id,#bt_lavoro_id,#bt_ordine_id,#bt_merce_id").prop("disabled", false)

        $("#Schedaproduzione_id,#Utente_id,#Magazino_id,#Cliente_id,#Lavoro_id,#Ordine_id,#Merce_id").removeClass('vivant')
    })//gestion du button return 

    $('.bt_cl').click(function () {
        

        if ($(this).attr('id') == 'bt_cliente_id') {
            $("#bt_utente_id,#bt_magazino_id,#bt_produzione_id,#bt_lavoro_id,#bt_ordine_id,#bt_merce_id").prop("disabled", true)

            $("#Cliente_id").addClass('vivant')
            $("#Schedaproduzione_id,#Utente_id,#Magazino_id,#Lavoro_id,#Ordine_id,#Merce_id").removeClass('vivant')



        } else if ($(this).attr('id') == 'bt_utente_id') {
            $("#bt_cliente_id,#bt_magazino_id,#bt_produzione_id,#bt_lavoro_id,#bt_ordine_id,#bt_merce_id").prop("disabled", true)

            $("#Utente_id").addClass('vivant')
            $("#Magazino_id,#Schedaproduzione_id,#Cliente_id,#Lavoro_id,#Ordine_id,#Merce_id").removeClass('vivant')


        }
        else if ($(this).attr('id') == 'bt_magazino_id') {
            $("#bt_cliente_id,#bt_utente_id,#bt_produzione_id,#bt_lavoro_id,#bt_ordine_id,#bt_merce_id").prop("disabled", true)

            $("#Magazino_id").addClass('vivant')
            $("#Schedaproduzione_id,#Utente_id,#Cliente_id,#Lavoro_id,#Ordine_id,#Merce_id").removeClass('vivant')

        }
        else if ($(this).attr('id') == 'bt_produzione_id') {
            $("#bt_cliente_id,#bt_magazino_id,#bt_utente_id,#bt_lavoro_id,#bt_ordine_id,#bt_merce_id").prop("disabled", true)

            $("#Schedaproduzione_id").addClass('vivant')
            $("#Magazino_id,#Utente_id,#Cliente_id,#Lavoro_id,#Ordine_id,#Merce_id").removeClass('vivant')


        } else if ($(this).attr('id') == 'bt_merce_id') {
            ordi
            $("#bt_cliente_id,#bt_magazino_id,#bt_utente_id,#bt_produzione_id,#bt_lavoro_id,#bt_ordine_id").prop("disabled", true)

            $("#Merce_id").addClass('vivant')
            $("#Magazino_id,#Utente_id,#Cliente_id,#Schedaproduzione_id,#Lavoro_id,#Ordine_id").removeClass('vivant')

        } else if ($(this).attr('id') == 'bt_lavoro_id') {
            lavo
            merc
            $("#bt_cliente_id,#bt_magazino_id,#bt_utente_id,#bt_produzione_id,#bt_merce_id,#bt_ordine_id").prop("disabled", true)

            $("#Lavoro_id").addClass('vivant')
            $("#Magazino_id,#Utente_id,#Cliente_id,#Schedaproduzione_id,#Merce_id,#Ordine_id").removeClass('vivant')

        } else if ($(this).attr('id') == 'bt_ordine_id') {
            ordi
            lavo
            merc
            $("#bt_cliente_id,#bt_magazino_id,#bt_utente_id,#bt_produzione_id,#bt_merce_id,#bt_lavoro_id").prop("disabled", true)

            $("#Ordine_id").addClass('vivant')
            $("#Magazino_id,#Utente_id,#Cliente_id,#Schedaproduzione_id,#Merce_id,#Lavoro_id").removeClass('vivant')
        }
       
        
    })//questi button serve per gestire accezione di ogni block
    
    let NomePerson = JSON.parse(sessionStorage.getItem('InstantUtent'))

    $('#salutation_id').html("Buongiorno  " + NomePerson.Cognome)
    console.log(NomePerson.Ruolo)

    if (NomePerson.Ruolo == 1) {
        $('#li_id4').hide()
        $("#nav_id1").tabs({
            active: 0
        });

    } else if (1 < NomePerson.Ruolo && NomePerson.Ruolo <= 3) {
        $('#li_id4,#li_id5').hide()

    } else if (NomePerson.Ruolo > 3) {

        $('#li_id1,#li_id3, #li_id5,#tabOrdine1').hide()

        $("#nav_id1").tabs({
            active: 3
        });
    }
    


    $('#bt_cliente_invio_id').on('click', function () {
        if (($('#Nome_cliente_id').val() != '') && ($('#PIVA_cliente_id').val() != '') && ($('#DataCreazione_cliente_id').val() != '')) {

            $.ajax({
                url: 'Home.aspx',
                data: {
                    tipo: 'cliente',
                    NomeCL: $('#Nome_cliente_id').val(),
                    PivaCL: $('#PIVA_cliente_id').val(),
                    DataCreazioneCL: $('#DataCreazione_cliente_id').val(),

                },
                type: 'get',
                datatype: 'JSON',
                success: function (dati, status) {
                    if (dati == "successo") {
                        alert('operazione riuscita con successo')
                        $('#Nome_cliente_id').val("");
                        $('#PIVA_cliente_id').val("");
                        $('#DataCreazione_cliente_id').val("");
                        

                    } else if (dati == 'esiste') {
                        alert('questo Cliente è gia esistente')
                    }

                },
                Error: function () { }
            })
            
        } else {

            alert('lei deve compilare il formulare prima di validare ')

        }
    })//inserimento cliente

    $('#bt_utente_invio_id').on('click', function () {

        if (($('#Nome_id').val() != '') && ($('#Cognome_id').val() != '') && ($('#DataNascita_id').val() != '') && ($('#Ruolo_id').val() != '') && ($('#Repart_id').val() != '') && ($('#UtenteT_id').val() != '') && ($('#Password_id').val() != '')) {

            $.ajax({
                url: 'Home.aspx',
                data: {
                    tipo: 'utente',
                    NomeUt: $('#Nome_id').val(),
                    CognomeUt: $('#Cognome_id').val(),
                    DatanascitaUt: $('#DataNascita_id').val(),
                    RuoloUt: $('#Ruolo_id').val(),
                    RepartoUt: $('#Repart_id').val(),
                    UtentUt: $('#UtenteT_id').val(),
                    PasswordUt: $('#Password_id').val()
                },
                type: 'get',
                datatype: 'JSON',
                success: function (dati, status) {
                    if (dati == "successo") {
                        alert('operazione riuscita con successo')
                        $('#Nome_id').val("");
                        $('#Cognome_id').val("");
                        $('#DataNascita_id').val("");
                        $('#Ruolo_id').val("");
                        $('#Repart_id').val("");
                        $('#UtenteT_id').val("");
                        $('#Password_id').val("");

                    } else if (dati =='esiste') {
                        alert('questo utente è gia esistente')
                    }

                },
                Error: function () { }
            })
            
        } else {
            alert('lei deve compilare il formulare prima di validare ')
        }
    })//inserimento utente

    $('#bt_invio_magazion_id').on('click', function () {
        if (($('#maga_nome_id').val() != '') && ($('#maga_paese_id').val() != '') ) {

            $.ajax({
                url: 'Home.aspx',
                data: {
                    tipo: 'magazino',
                    NomeMG: $('#maga_nome_id').val(),
                    PaeseMG: $('#maga_paese_id').val(),


                },
                type: 'get',
                datatype: 'JSON',
                success: function (dati, status) {
                    if (dati == "successo") {
                        alert('operazione riuscita con successo')
                        $('#maga_nome_id').val("");
                        $('#maga_paese_id').val("");
                        

                    } else if (dati == 'esiste') {
                        alert('questo Magazino è gia esistente')
                    }

                },
                Error: function () { }
            })
            
        } else {

            alert('lei deve compilare il formulare prima di validare ')

        }
    })//inserimento magazino

    $('#bt_invio_scheda_id').on('click', function () {
        if (($('#seme_id').val() != '') && ($('#localita_id').val() != '') && ($('#areageografica_id').val() != '') && ($('#lavorazione_id').val() != '') && ($('#tipo_id').val() != '')) {

            $.ajax({
                url: 'Home.aspx',
                data: {
                    tipo: 'sceda',
                    SemeSC: $('#seme_id').val(),
                    LocalitaSC: $('#localita_id').val(),
                    AreageograficaSC: $('#areageografica_id').val(),
                    LavorazioneSC: $('#lavorazione_id').val(),
                    TipoSC: $('#tipo_id').val(),


                },
                type: 'get',
                datatype: 'JSON',
                success: function (dati, status) {
                    if (dati == "successo") {
                        alert('operazione riuscita con successo')
                        $('#seme_id').val("");
                        $('#localita_id').val('');
                        $('#areageografica_id').val('');
                        $('#lavorazione_id').val("");
                        $('#tipo_id').val("");
                        

                    } else if (dati == 'esiste') {
                        alert('questo Prodotto è gia esistente')
                    }

                },
                Error: function () { }
            })
            
        } else {

            alert('lei deve compilare il formulare prima di validare ')

        }
    })//inserimento scheda

    $('#bt_lavoro_invio_id').on('click', function () {

       

        if (($('#responsabile_LV_id').val() != '') && ($('#DataAssegno_LV_id').val() != '') && ($('#Data_Pr_Consegna_id').val() != '') && ($('#lavoratore_LV_id').val() != '')) {
            $.ajax({
                url: 'Home.aspx',
                data: {
                    tipo: 'lavoro',
                    ResponsabileLV: $('#responsabile_LV_id').val(),
                    DataAssegnazioneLV: $('#DataAssegno_LV_id').val(),
                    DataConsegna: $('#Data_Pr_Consegna_id').val(),
                    LavorazioneLV: $('#lavoratore_LV_id').val(),



                },
                type: 'get',
                datatype: 'JSON',
                success: function (dati, status) {
                    if (dati == "successo") {
                        alert('operazione riuscita con successo')
                        $('#responsabile_LV_id').val("");
                        $('#DataAssegno_LV_id').val('');
                        $('#Data_Pr_Consegna_id').val('');
                        $('#lavoratore_LV_id').val("");
                        


                    } else if (dati == 'esiste') {
                        alert('questa Commessa è gia esistente')
                    }

                },
                Error: function () { }
            })
            
                } else {
            alert('lei deve compilare il formulare prima di validare ')
                }

        //    },
        //    Error: function () { }
        //})

        
    })//inserimento lavoro

    $('#bt_merce_invio_id').on('click', function () {



        if ($('#magazino_MC_id').val() != '' && $('#quantita_MC_id').val().length != 0 && $('#prodotto_MC_id').val().length != 0 && $('#DataCreazione_merce_id').val()) {

            $.ajax({
                url: 'Home.aspx',
                data: {
                    tipo: 'merce',
                    MagazzinoMC: $('#magazino_MC_id').val(),
                    QuantitaMC: $('#quantita_MC_id').val(),
                    ProdottoMC: $('#prodotto_MC_id').val(),
                    DataCreazione: $('#DataCreazione_merce_id').val(),



                },
                type: 'get',
                datatype: 'JSON',
                success: function (dati, status) {
                    if (dati == "successo") {
                        alert('operazione riuscita con successo')
                        $('#magazino_MC_id').val("");
                        $('#quantita_MC_id').val('');
                        $('#prodotto_MC_id').val(''); 
                        $('#DataCreazione_merce_id').val('');

                    } else if (dati == 'esiste') {
                        alert('questa merce è gia esistente')
                    }

                },
                Error: function () { }
            })
            
        } else {
            alert('lei deve compilare il formulare prima di validare ')
        }

        //    },
        //    Error: function () { }
        //})


    })//inserimento merce

    $('#bt_ordine_invio_id').on('click', function () {



        if (($('#commessa_OR_id').val() != '') && ($('#merce_OR_id').val() != '') && ($('#quantita_OR_id').val() != '') && ($('#Data_creazione_OR_id').val() != '') && ($('#Cliente_OR_id').val() != '')) {

            $.ajax({
                url: 'Home.aspx',
                data: {
                    tipo: 'ordine',
                    commessaOR: $('#commessa_OR_id').val(),
                    merceOR: $('#merce_OR_id').val(),
                    quantitaOR: $('#quantita_OR_id').val(),
                    DataCreazioneOR: $('#Data_creazione_OR_id').val(),
                    ClienteOR: $('#Cliente_OR_id').val(),


                },
                type: 'get',
                datatype: 'JSON',
                success: function (dati, status) {
                    if (dati == "successo") {
                        alert('operazione riuscita con successo')
                        $('#commessa_OR_id').val("");
                        $('#merce_OR_id').val('');
                        $('#quantita_OR_id').val('');
                        $('#Data_creazione_OR_id').val('');
                        $('#Cliente_OR_id').val('');
                        
                    } else if (dati == 'esiste') {
                        alert('questo ordine è gia esistente')
                    }else {
                        alert('operazione Non riuscita ')
                    }





                },
                Error: function () { }
            })
           
        } else {
            alert('lei deve compilare il formulare prima di validare ')
        }

        //    },
        //    Error: function () { }
        //})


    })//inserimento ordine


   
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
        
  

    $.ajax({
        url: 'listOrdine.aspx',
        //async: false,
        data: {

        },
        type: 'get',
        datatype: 'JSON',
        success: function (dati, status) {
            let dat = JSON.parse(dati)

            //PRS = dat

            let valll = 2
            //$.jgrid.gridUnload('#tbordine_id')

            $('#tbordine_id').jqGrid({
                url: 'listOrdine.aspx',
                autowidth: true,
                //data: dat.LST_ORDINE,
                datatype: 'json',
                //cellsubmit: "clientArray",
                //editurl: "clientArray",
                //url: "clientArray",
                loadonce: false,
                autoresizeOnload:true,
                mtype: 'get',
                width: $(window).width() - 50,
                
                //reginal: 'it',
                viewrecords: true,
                caption: 'ORDINI',
                loadtext: 'caricamento',
                rowNum: 500,
                jsonReader: {
                    root: "LST_ORDINE",
                },

                colModel: [

                    {
                        name: 'IdOrdine',
                        label: 'id',
                        width: 80,
                        //resizable: false,
                        formatter: 'integer',
                        formatoptions: {},
                        key: true,
                        hidden: true,
                        edittable: false,
                    },
                    {
                        name: 'seme',
                        label: 'Seme',
                        width: 80,
                       // autoResizable: true,
                        resizable: false,
                        formatter: 'text',
                        formatoptions: {},
                        edittable: false,
                    },
                    {
                        name: 'tipo',
                        label: 'tipo',
                        width: 80,
                        resizable: false,
                        formatter: 'text',
                        formatoptions: {},
                        edittable: false,
                    },
                    {
                        name: 'quantita ',
                        label: 'Quantita ',
                        width: 80,
                        resizable: false,
                        formatter: 'integer',
                        formatoptions: {},
                        hidden: true,
                        edittable: false,
                    },
                    {
                        name: 'quantitaRiquiesto',
                        label: 'quantitaRiquiesto',
                        width: 80,
                        resizable: false,
                        edittable: false,
                        formatter: 'integer',
                        formatoptions: {},
                    },
                    {
                        name: 'persone',
                        label: 'Persone',
                        width: 80,
                        resizable: false,
                        formatter: 'text',
                        edittable: false,
                        formatoptions: {},
                    },
                    {
                        name: 'DataAssegnazione',
                        label: 'DataAssegnazione',
                        width: 80,
                        resizable: false,
                        formatter: 'date',
                        edittable: false,
                        formatoptions: {},
                    }
                ],
                loadComplete: function (data) {
                    //$("#presenze").closest(".ui-jqgrid-bdiv").height(((data.records - 1) * 27) + 50);

                    //$("#presenze").setGridWidth(400, true).trigger("resize");
                },
                loadError: function (a, b, c) {
                    stop = 1;
                }


            })
            $('#tblavoro_id').jqGrid({
                url: 'listOrdinePerso.aspx',
               cellEdit: true,
                cellsubmit: 'remote',
                postData: {
                    tipo: 'perso',
                    person: NomePerson.utente
            },
                autowidth: true,
                //data: dat.LST_ORDINE, 
                datatype: 'json',
                //cellsubmit: "clientArray",
                //editurl: "clientArray",
                //url: "clientArray",
                loadonce: false,
                mtype: 'get',
                width: $(window).width() - 50,

                //reginal: 'it',
                viewrecords: true,
                caption: 'ORDINI',
                loadtext: 'caricamento',
                rowNum: 500,
                jsonReader: {
                    root: "LST_ORDINE",
                },

                colModel: [

                    {
                        name: '',
                        label: 'Azione',
                        formatter: function (cellvalue, options, rowObject) {
                            valobject = rowObject.IdM
                            return "<i class='fa fa-trash bt_cancel_row_cl' aria-hidden='true' data_valore='" + rowObject.IdM + " '></i>"
                        },
                        width: 40,
                        fixed: false,
                        resizable: false,
                        formatoptions: {},
                        editable: false,
                        edittype: "text",
                        editoptions: {},
                        search: false,
                        stype: "text",
                        searchoptions: {},
                        sortable: true,
                        sorttype: "text",
                        cellattr: pcCellattr
                    },                    
                    {
                        name: "UtenteM",
                        label: "Utente",
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
                        cellattr: pcCellattr
                    },
                    {
                        name: "UtenteM",
                        label: "Utente",
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
                        cellattr: pcCellattr
                    },
                    {
                        name: "UtenteM",
                        label: "Utente",
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
                        cellattr: pcCellattr
                    },
                    {
                        name: "UtenteM",
                        label: "Utente",
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
                        cellattr: pcCellattr
                    },
                    {
                        label: 'Data Acquito Pc',
                        name: 'DataAcquitoPcM',
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
                            dataInit: getDate
                        },
                        search: false,
                        stype: "text",
                        searchoptions: {
                            sopt: ["eq"]
                        },
                        sortable: false,
                        sorttype: "date",
                                //cellattr: usersCellattr
                    }, {
                        name: '',
                        label: 'Azione',
                        align: 'center',
                        width: 15,
                        
                        resizable: false,
                        formatter: function (cellvalue, option, rowobject) {
                            return '<i class="fa fa-check bt_val_cl" data-val=' + rowobject.Idordine + ' aria-hidden="true"></i>         <i class="fa fa-commenting  bt_desc_cl" data-val=' + rowobject.Idordine + ' aria-hidden="true"></i>'
                            console.log(rowobject.IdOrdine)
                        },
                        edittable: false,
                        formatoptions: {},
                    }
                ],
                loadComplete: function (data) {
                    //$("#presenze").closest(".ui-jqgrid-bdiv").height(((data.records - 1) * 27) + 50);

                    //$("#presenze").setGridWidth(400, true).trigger("resize");
                    $('.bt_val_cl').on('click', function (e) {
                       

                        $.ajax({
                            url: 'listOrdinePerso.aspx',
                            data: {
                                tipo:'lavorofinito',
                                idordi: e.target.attributes["data-val"].value
                            },
                            type: 'get',
                            datatype: 'JSON',
                            success: function (dati, status) {
                                if (dati=='') {
                                    $('#tblavoro_id').jqGrid("setGridParam", {
                                        url: 'listOrdinePerso.aspx',
                                        datatype: 'json',
                                        loadonce: false,

                                        postData: {
                                            tipo: 'perso',
                                            person: NomePerson.utente
                                        },


                                    }).trigger("reloadGrid");

                                    //("#tblavoro_id").delRowData(e.target.attributes["data-val"].value)

                                    alert('Operazione riuscita')
                                } else {
                                    alert('Operazione non riuscita ')
                                }

                            },
                            Error: function () { }
                        })

                    })

                },
                loadError: function (a, b, c) {
                    stop = 1;
                },
                ondblClickRow: function (rowid, iRow, iCol, e) {
                    //cellEdit:true
                }


            })
            $('#tbarchivio_id').jqGrid({
                url: 'listOrdine0.aspx',
                autowidth: false,
                //data: dat.LST_ORDINE,
                datatype: 'json',
                //cellsubmit: "clientArray",
                //editurl: "clientArray",
                //url: "clientArray",
                loadonce: false,
                mtype: 'get',
                width: $(window).width() - 50,
                height:$(window).height-70,

                //reginal: 'it',
                viewrecords: true,
                caption: 'Archivio',
                loadtext: 'caricamento',
                rowNum: 500,
                jsonReader: {
                    root: "LST_ORDINE",
                },

                colModel: [

                    {
                        name: 'IdOrdine',
                        label: 'id',
                        align:'center',
                        width: 80,
                        //resizable: false,
                        formatter: 'integer',
                        formatoptions: {},
                        key: true,
                        hidden: true,
                        edittable: false,
                    },
                    {
                        name: 'seme',
                        label: 'Seme',
                        align: 'center',
                        width: 80,
                        resizable: false,
                        formatter: 'text',
                        formatoptions: {},
                        edittable: false,
                    },
                    {
                        name: 'tipo',
                        label: 'tipo',
                        align: 'center',
                        width: 80,
                        resizable: false,
                        formatter: 'text',
                        formatoptions: {},
                        edittable: false,
                    },
                    {
                        name: 'quantita ',
                        align: 'center',
                        label: 'Quantita ',
                        width: 80,
                        resizable: false,
                        formatter: 'integer',
                        formatoptions: {},
                        hidden: true,
                        edittable: false,
                    },
                    {
                        name: 'quantitaRiquiesto',
                        align: 'center',
                        label: 'quantitaRiquiesto',
                        width: 80,
                        resizable: false,
                        edittable: false,
                        formatter: 'integer',
                        formatoptions: {},
                    },
                    {
                        name: 'persone',
                        align: 'center',
                        label: 'Persone',
                        width: 80,
                        resizable: false,
                        formatter: 'text',
                        edittable: false,
                        formatoptions: {},
                    },
                    {
                        name: 'DataAssegnazione',
                        align: 'center',
                        label: 'DataAssegnazione',
                        width: 80,
                        resizable: false,
                        formatter: 'date',
                        edittable: false,
                        formatoptions: {},
                    }
                ],
                loadComplete: function (data) {
                    //$("#presenze").closest(".ui-jqgrid-bdiv").height(((data.records - 1) * 27) + 50);

                    //$("#presenze").setGridWidth(400, true).trigger("resize");
                },
                loadError: function (a, b, c) {
                    stop = 1;
                }


            })
           
        },
        Error: function () { }
    })//chargement de la tablella 


    
           
        function listO() {
        $('#tbordine_id').jqGrid("setGridParam", {
            url: 'listOrdine.aspx',
            width: $(window).width() - 50,
            //datatype: 'json',

            //postData: {
            //    pannelli: "3, 4, 5, 6, 7, 19, 21"
            //},


        }).trigger("reloadGrid");
        $('#tblavoro_id').jqGrid("setGridParam", {
            url: 'listOrdinePerso.aspx',
            datatype: 'json',

            postData: {
                tipo: 'perso',
                person: NomePerson.utente
            },

        }).trigger("reloadGrid");
        $('#tbarchivio_id').jqGrid("setGridParam", {
                url: 'listOrdine0.aspx',
                datatype: 'json',

                postData: {
                    tipo: 'perso',
                    person: NomePerson.utente
                },

            }).trigger("reloadGrid");
    }
   
    setInterval(listO, 100000)


   
    $('#li_id6').click(function () {
        sessionStorage.removeItem('InstantUtent');
        //window.location = "http://localhost/Access.html"
        window.location.href = "/test/Access.html"
        console.log("pagina 1")

    })

    })


    

   

    //$('#li_id1').click(function () {

      

    //    $('#article_id1').dialog(
    //        $('#tabOrdine1').html(
    //        "<div>" +
    //        " Tipo riso: <input type='text' id='input_id1' class='input_cl1' />   Quantita : <input type='text' id='input_id2' class='input_cl2'>" +
    //        "<p> Tipo Lavorazione : <input type='text' id='input_id3' class='input_cl3' /> Destinatario  :<input type='text' id='input_id4' class='input_cl4'/> </p>" +
    //        "Data limite :<input type='datetime' id='input_id5' class='input_cl5'/>" + "<p> <button>Invio</button> <button>Cancel</button></p>" +
    //        "</div>"

    //        )).dialog({
    //            title: 'CREAZION ORDINE',
    //            draggable: false,
    //            resizable: false,
    //            autoOpen: false,
    //            modal:true,
    //            width: 600});

    //})





$(document).ready(function () {


    

    $('#invio_id').on('click', function () {
        console.log($('#utente_id').val())
        if (($('#utente_id').val() == "") && ($('#password_id').val() == "")) {

            alert("dovete inserire utente e password")
           
        } else {

            if (document.readyState !== 'complete') {
                $('table').addClass('carrica')
            } else {                

                $('table').removeClass('carrica')
                $.ajax({
                    url: 'Home.aspx',

                    data: {
                        tipo: 'acces',
                        UT: $('#utente_id').val(),
                        PSWD: $('#password_id').val()
                    },
                    type: 'get',
                    datatype: 'JSON',
                    async: false,
                    success: function (dati, status) {

                        if (dati != "ce utente n'exise pas ") {

                            sessionStorage.setItem('InstantUtent', dati)//recupera la session del utente
                            console.log('InstantUtent', new Date().getFullYear())

                            //window.location = "http://localhost/PageHome.html"//la pagina home
                            // window.location.href ="PageHome.html"
                            window.location.pathname = "/test/PageHome.html"
                            console.log("pagina 2")

                        } else {

                            alert('utente sbagliato')
                        }








                        console.log(NomePerson)



                    },
                    Error: function () { }
                })
            }

            
        }

    })
})