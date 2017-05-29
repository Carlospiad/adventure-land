function sendmail(destino){
//Lee contenido de los difrenetes campos del formulario y los asigna a variables
var name = document.getElementById("name_contact").value;
var email = document.getElementById("email_contact").value;
var comment = document.getElementById("message_contact").value;

//Validación de los campos requeridos (Nombre, Email)

if (name == '' || !validateEmail(email)){
    $("#name_contact").addClass( "required_contact" );
    $("#email_contact").addClass( "required_contact" );
    $("#notmailerror").css("display", "block");
}else {


      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'DzvIHhfL1BQ717q8JwAYCA', //API Key asiganada
          'message': {
            'from_email': email,
            "from_name": name,
            'to': [
              {
                'email': destino, //Destinatario del correo
                'name': 'Contacto Website', //Nombre del Remitente
                'type': 'to'
              }
            ],
            'subject': 'Contacto vía Website', //Titulo del correo
            'html': '<h3>Nuevo contacto Website Adventure Land Panamá</h3><p>Nombre: ' + name + '</p><p>Email: ' + email + '</p><p>Comentario: ' + comment + '</p><p><h5>Datos de contacto recibidos desde el formulario de contacto de adventureland.com</h5></p>'
          }
        }
      });

    /*Se ejecuta cuando el correo ya ha sido enviado*/

    $("#notmail").css("display", "block");
    $("#notmailerror").css("display", "none");
    $("#submit").css("display", "none");
    $("#name_contact").removeClass( "required_contact" );
    $("#email_contact").removeClass( "required_contact" );
    $("#contactform :input").prop("disabled", true);
    }
}
function sendmail_sidebar(destino){
//Lee contenido de los difrenetes campos del formulario y los asigna a variables
var name = document.getElementById("sidebar-name").value;
var email = document.getElementById("sidebar-email").value;
var phone = document.getElementById("sidebar-phone").value;
var service = document.getElementById("sidebar-service").value;
//Validación de los campos requeridos (Nombre, Email)

if (name == '' || !validateEmail(email)){
    $("#sidebar-name").addClass( "required_contact" );
    $("#sidebar-email").addClass( "required_contact" );
    $("#sidebar-notmailerror").css("display", "block");
}else {


      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'DzvIHhfL1BQ717q8JwAYCA', //API Key asiganada
          'message': {
            'from_email': email,
            "from_name": name,
            'to': [
              {
                'email': destino, //Destinatario del correo
                'name': 'Contacto Website Sidebar', //Nombre del Remitente
                'type': 'to'
              }
            ],
            'subject': 'Contacto vía Website', //Titulo del correo
            'html': '<h3>Nuevo contacto Website Adventure Land Panamá</h3><p>Nombre: ' + name + '</p><p>Email: ' + email + '</p><p>Teléfono: ' + phone + '</p><p>Servicio: ' + service + '</p><p><h5>Datos de contacto recibidos desde el formulario de contacto de adventureland.com</h5></p>'
          }
        }
      });

    /*Se ejecuta cuando el correo ya ha sido enviado*/

    $("#sidebar-notmail").css("display", "block");
    $("#sidebar-notmailerror").css("display", "none");
    $("#sidebar-submit").css("display", "none");
    $("#sidebar-name").removeClass( "required_contact" );
    $("#sidebar-emai").removeClass( "required_contact" );
    $("#sidebar-form :input").prop("disabled", true);
    }
}

function sendmail_budget(destino){
//Lee contenido de los difrenetes campos del formulario y los asigna a variables
var name = document.getElementById("name_budget").value;
var email = document.getElementById("email_budget").value;
var phone = document.getElementById("phone_budget").value;
var service = document.getElementById("service_budget").value;
var attraction = $("#attraction_budget").val();
var date = document.getElementById("date_budget").value;
var ninos = document.getElementById("ninos_budget").value;
var adultos = document.getElementById("adultos_budget").value;
var hours = document.getElementById("hours_budget").value;
var msg = document.getElementById("message_budget").value;

//Validación de los campos requeridos (Nombre, Email)

if (ninos == '' || adultos == '' || service == '' || name == '' || !validateEmail(email)){
    $("#name_budget").addClass( "required_contact" );
    $("#email_budget").addClass( "required_contact" );
    $("#ninos_budget").addClass( "required_contact" );
    $("#service_budget").addClass( "required_contact" );
    $("#adultos_budget").addClass( "required_contact" );
    $("#notmailerror").css("display", "block");
}else {
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'DzvIHhfL1BQ717q8JwAYCA', //API Key asiganada
          'message': {
            'from_email': email,
            "from_name": name,
            'to': [
              {
                'email': destino, //Destinatario del correo
                'name': 'Cotización desde Website', //Nombre del Remitente
                'type': 'to'
              }
            ],
            'subject': 'Cotización vía Website', //Titulo del correo
            'html': '<h3>Nuevo contacto Website Adventure Land Panamá</h3><p>Nombre: ' + name + '</p><p>Email: ' + email + '</p><p>Teléfono: ' + phone + '</p><p>Servicio deseado: ' + service + '</p><p>Atracción: ' + attraction + '</p><p>Cantidad de Niños: ' + ninos + '</p><p>Cantidad de Adultos: ' + adultos + '</p><p>Fecha: ' + date + '</p><p>Hprarios: ' + hours + '</p><p>Información adicional: ' + msg + '</p><p><h5>Datos de contacto recibidos desde el formulario de cotización de adventureland.com.pa</h5></p>'
          }
        }
      });

    /*Se ejecuta cuando el correo ya ha sido enviado*/

    $("#notmail").css("display", "block");
    $("#notmailerror").css("display", "none");
    $("#submit").css("display", "none");
    $("#name_contact").removeClass( "required_contact" );
    $("#email_contact").removeClass( "required_contact" );
    $("#contactform :input").prop("disabled", true);
    }
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
