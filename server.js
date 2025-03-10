const net = require('net');
const {authorsController} = require('./controllers/authorsController');
const {booksController} = require('./controllers/booksController');
const {publishersController} = require('./controllers/publishersController')

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
                } 
                else if (args[0] === 'PUBLISHERS') {
                    const publishers = JSON.parse(publishersController.getPublishers());
                    socket.write(`Editoriales: ${JSON.stringify(publishers, null, 2)}\n`);
                    //GET PUBLISHERS FUNCIONA

                } else if (args[0] === 'BOOKS') {
                    const book = JSON.parse(booksController.getBooks());
                    socket.write(`Libros: ${JSON.stringify(book, null ,2)}\n`);
                    //GET BOOKS FUNCIONA

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

    socket.on('error', (error) => {
        console.error(error);
    })
});

    

server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});
