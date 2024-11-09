// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function() {
//     alert('Your mail is sent!');
// }).fail(function(error) {
//     alert('Oops... ' + JSON.stringify(error));
// });
// // code fragment


export function buildDataEmail(nombreCliente, mensaje){
    // code fragment
    let data = {
        service_id: 'service_8vv0ubl',
        template_id: 'template_9v8p3dp',
        user_id: 'DPfew0PvvuApuWN9v',
        template_params: {
            'from_name': nombreCliente,
            'message': mensaje,
        }
    };
    return data;
    }

// export function enviarCorreo(data){
//     // Usamos fetch para hacer la solicitud POST
//     fetch('https://api.emailjs.com/api/v1.0/email/send', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'  // Indicamos que el contenido enviado es JSON
//         },
//         body: JSON.stringify(data)  // Convertimos el objeto 'data' a JSON antes de enviarlo
//     })
//     .then(response => {
//         if (!response.ok) {  // Si la respuesta no es OK (código 200)
//             throw new Error('Error al enviar el correo');
//         }
//         return response.json();  // Si la respuesta es exitosa, la convertimos a JSON
//     })
//     .then(data => {
//         alert('¡Correo enviado exitosamente!');
//     })
//     .catch(error => {
//         alert('Oops... ' + error.message);  // Si ocurre algún error, lo mostramos
//     });
// }