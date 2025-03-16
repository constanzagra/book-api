const net = require('net');
const readline = require('readline')
const {authorsController} = require('./controllers/authorsController');
const {booksController} = require('./controllers/booksController');
const {publishersController} = require('./controllers/publishersController')
// -Devolver respuestas claras a los clientes (Server)
// -(Cliente) 
//      GET BOOKS, ADD BOOK {}, 
//      GET AUTHORS, ADD AUTHOR, 
//      GET PUBLISHERS, ADD PUBLISHER, 
//      SEARCH BOOK(POR DIFERENTES CRITERIOS), 
//      UPDATE INFO (SOLO LO MENCIONA EN UNA PARTE AL INICIO DEL TP)
//      SEARCH AUTHORS BY NAME OR NACIONALITY
// -(Autores) listar autores
// -(Autores) buscar autores por nombre o nacionalidad
// -(Autores) a;adir nuevos autores
// -(Editoriales) listar editoriales
// -(Editoriales) a;adir nuevas editoriales con sus respectivos atributos
// -Manejo de errores en todos los modulos, y que los mensajes de error sean claros para los usuarios
// -(Readme) debe explicar como configurar y ejecutar el proyecto
// -(Readme) debe incluir ejemplos de comandos que se pueden enviar al servidor tcp y las respuestas esperadas
// -(Readme) debe estar bien comentado para explicar la funcionalidad de cada seccion
// - DEBEMOS COMENTAR EL CODIGO

const PORT = 8080;
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    let response = ""; 
    response = booksController.searchBookByTitle('Rayuela')
    console.log(`Libro encontrado: ${response}`)

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
                    const origin = args.slice(args.length - 1).join(' ');
                    const name = args.slice(1, args.length - 1).join(' ');
                    const newAuthor = authorsController.addAuthor({author: name, nationality: origin});
                    socket.write(`Autor agregado: ${newAuthor}`);
                        //ADD AUTHOR FUNCIONA
                } else if (args[0] === 'PUBLISHER') {
                    const name = args.slice(1, args.length -1).join(' ');
                    const located = args.slice(args.length - 1).join(' ');
                    const newPublisher = publishersController.addPublisher({publisherName: name, location: located});
                    socket.write(`Editorial agregada: ${newPublisher}`); 
                        //ADD PUBLISHER FUNCIONA
                } else if (args[0] === 'BOOK') {
                    const data = message.split("+");
                    const name = data.slice(1, data.length -1).join(' ');
                    const author = data.slice(2).join(' ');
                    const newBook = booksController.addBook({titulo: name, autor: author});
                    socket.write(`Libro Agregado: ${newBook}`);                     
                }else {
                    socket.write('Comando no reconocido\n');
                }
            break;

            case 'SALIR':
                command.toUpperCase();
                console.log('El cliente ha salido.');
                socket.write('Conexión finalizada.');
                socket.end();
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

server.listen(PORT, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
}); 
