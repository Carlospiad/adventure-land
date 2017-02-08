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

function sendmail_budget(destino){
//Lee contenido de los difrenetes campos del formulario y los asigna a variables
var name = document.getElementById("name_budget").value;
var email = document.getElementById("email_budget").value;
var phone = document.getElementById("phone_budget").value;
var servicio = document.getElementById("servicio_budget").value;

//Validación de los campos requeridos (Nombre, Email)

if (name == '' || !validateEmail(email)){
    $("#name_budget").addClass( "required_contact" );
    $("#email_budget").addClass( "required_contact" );
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
            'html': '<h3>Nuevo contacto Website Prestige Storage Panamá</h3><p>Nombre: ' + name + '</p><p>Email: ' + email + '</p><p>Teléfono: ' + phone + '</p><p>Servicio deseado: ' + servicio + '</p><p><h5>Datos de contacto recibidos desde el formulario de cotización de adventureland.com</h5></p>'
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
