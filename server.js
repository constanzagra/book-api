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
<<<<<<< HEAD
const {publishersController} = require('./controllers/publishersController')
=======
const {publishersController} = require('./controllers/publishersController');
>>>>>>> 3311c6a1e3e62588ab1e80775a7349b3cc2e788e

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const message = data.toString().trim();
        const [command, ...args] = message.split(' ');

        switch (command) {
            case 'GET':
                if (args[0] === 'AUTHORS') {
                    const authors = JSON.parse(authorsController.getAuthors());
                    socket.write(`Autores: ${JSON.stringify(authors, null, 2)}`);
                    //GET AUTHORS FUNCIONA
                    //El resto lo voy a ir solucionando tenganme paciencia
                } 
                else if (args[0] === 'PUBLISHERS') {
                    const publishers = publishersController.getPubl();
                    socket.write(`Editoriales: ${JSON.stringify(publishers)}\n`);

                } else if (args[0] === 'BOOKS') {
                    const book = booksController.getBooks();
                    socket.write(`Libros: ${JSON.stringify(book)}\n`);
                } else {
                    socket.write('Comando no reconocido\n');
                }
                break;

            case 'ADD':
                if (args[0] === 'AUTHOR') {
                    const name = args.slice(1).join(' ');
                    const newAuthor = authorsController.addAuthor(name);
                    socket.write(`Autor agregado: ${JSON.stringify(newAuthor)}\n`);
                } else if (args[0] === 'PUBLISHER') {
                    const name = args.slice(1).join(' ');
                    const newPublisher = publishersController.addPublisher(name);
                    socket.write(`Editorial agregada: ${JSON.stringify(newPublisher)}\n`);
                } else {
                    socket.write('Comando no reconocido\n');
                }
                break;

            default:
                socket.write('Comando no reconocido\n');
                break;
        }
    });
});


server.listen(8085, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});
