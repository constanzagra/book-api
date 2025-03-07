// Configura el servidor para escuchar conexiones
// en el puerto 8080 y para recibir comandos de
// los clientes.

// Asegúrate de manejar correctamente múltiples
// conexiones y de devolver respuestas claras a los
// clientes.

// ▪ Implementa el manejo de errores para asegurar
// que el servidor responda de manera adecuada a
// diferentes situaciones.

// Asegúrate de que estas funciones sean
// accesibles desde el servidor TCP mediante
// comandos como 
// GET AUTHORS, 
// ADD AUTHOR {}, 
// GET PUBLISHERS, 
// ADD PUBLISHER {}, etc.
const net = require('net');
const {authorsController} = require('./controllers/authorsController');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const commandAndData = data.toString().trim();
        console.log(`Mensaje recibido: ${commandAndData}`);
        let response = '';

        response = authorsController.addAuthor('Fiorella Rodriguez');
        socket.write(response);
    })

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (error) => {
        console.error(error);
    })
})

server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});
