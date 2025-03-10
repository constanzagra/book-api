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
const {booksController} = require('./controllers/booksController');
const {publishersController} = require('./controllers/publishersController');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const commandAndData = data.toString().trim();
        console.log(`Mensaje recibido: ${commandAndData}`);
        let response = '';
        
        //response = authorsController.getAuthors();
        //response = booksController.getBooks();
        response = authorsController.addAuthor({author: "Virginia Woolf", nationality: "inglesa"})
        //response = publishersController.addPublisher({publisherName: "Sudamericana", location: "Sudamerica"});
        //response = publishersController("")
        socket.write(response);
    })

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (error) => {
        console.error(error);
    })
})

server.listen(8085, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});
