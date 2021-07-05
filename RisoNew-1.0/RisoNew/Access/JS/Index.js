//import { notify } from "jquery"

var load = {
    loaderhtml: function () {
        $('#section_Index_id').append("<div id='containe_image_loading_id' class='containe_image_loading_Cl'></div >")
        $('#containe_image_loading_id').html("<img src ='../../Image/ajaxloader.gif' class='imgloading_Cl' id ='imgloading_Id' />")
    },
    activeloading: function () {
        $('#containe_image_loading_id').show()
    },
    Disableloading: function () {
        $('#containe_image_loading_id').hide()
    }
}


$(function (ev) {
    
    
    $('#section_Index_id').html("<legend>Login</legend><div class='laligneCL'><label for='utente' class='form-label utentcl'>Utente</label></td><td>:&ensp;<input name='utente' type='text' id='utente_id' class='utente_cl form-control'></div>")
    $('#section_Index_id').append("<div class='laligneCL'><label for='password' class='form-label'>Password </label ></td><td>:&ensp;<input name='password' id='password_Id' class='password_Cl form-control' required /></div>")
    $('#section_Index_id').append("<div class='laligneCL'><button id='invio_id' class='invio_cl  '>Invio</button></td><td><button id='cancel_id' class='cancel_cl btn '>Cancel</button><div>")
    
    $('button').attr('disabled', 'disabled')

                                 
    $('input').on('keyup', function () {
            if ($('#utente_id').val().length >=5 && $('#password_Id').val().length>=8) {
                $('button').removeAttr('disabled')
            } else if ($('#utente_id').val().length<5 || $('#password_Id').val().length<8) {
                $('button').attr('disabled', 'disabled')
            }

        })
  

   

    $(document).ajaxStart(function () {
        load.activeloading()       
        
    })
    
    
      
    $('#invio_id' ).on('click', function () {

        load.loaderhtml()
        var lesa=0

        $.ajax({
            url: '../VB/Index.aspx',

            data: {

                UT: $('#utente_id').val(),
                PSWD: $('#password_Id').val()
            },
            type: 'POST',
            datatype: 'JSON',         
            success: function (dati, status) {

                if (dati != "Non") {

                    sessionStorage.setItem('InstantUtent', dati)//recupera la session del utente
                    console.log('InstantUtent', new Date().getFullYear())


                    window.location.pathname = "../../Home/Templates/Home.html"
                    //console.log("pagina 2")
                    //window.location.href = '../Templates/Home.html'

                } else {

                    $.notify('utente o password sbagliato','error',
                        {position:'top center'})
                    load.Disableloading()
                }








                console.log(NomePerson)



            },
            Error: function (dati) {
                load.Disableloading()
            },
            complete: function (dati) {
               load.Disableloading()
            }
        })

    }) 
    $('#cancel_id').on('click', function () {
        $(document).ajaxStop(function () {
            load.Disableloading()

        })
    })
    $('#utente_id , #password_Id').on('keypress', function (ev) {
        if (ev.keyCode === 13) {

            if ($('#utente_id').val().length >= 5 && $('#password_Id').val().length >= 8) {

                load.loaderhtml()
                var lesa = 0

                $.ajax({
                    url: '../VB/Index.aspx',

                    data: {

                        UT: $('#utente_id').val(),
                        PSWD: $('#password_Id').val()
                    },
                    type: 'POST',
                    datatype: 'JSON',
                    success: function (dati, status) {

                        if (dati != "Non") {

                            sessionStorage.setItem('InstantUtent', dati)//recupera la session del utente
                            console.log('InstantUtent', new Date().getFullYear())


                            window.location.pathname = "../../Home/Templates/Home.html"
                            //console.log("pagina 2")
                            //window.location.href = '../Templates/Home.html'

                        } else {

                            $.notify('utente o password sbagliato', 'error',
                                { position: 'top center' })
                            load.Disableloading()
                        }








                        console.log(NomePerson)



                    },
                    Error: function (dati) {
                        load.Disableloading()
                    },
                    complete: function (dati) {
                        load.Disableloading()
                    }
                })
            } else {
                $.notify('utente o password sbagliato', 'error',
                    { position: 'top center' })
            }

           
        } else {

        }
    })
    


})

//$(document).ready(function () {
   
     
    
//})                                                                                                               