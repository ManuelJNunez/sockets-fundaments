var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchando
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor.');
});

// Enviando información
socket.emit('enviarMensaje', {
    usuario: 'tontopollas',
    mensaje: 'eres un tontopollas'
}, function(resp) {
    console.log(resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});