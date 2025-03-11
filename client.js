const net = require('net');
const readline = require('readline');
const {question} = require('readline-sync')
const {authorsController} = require('./controllers/authorsController');
const {booksController} = require('./controllers/booksController')
const {publishersController} = require('./controllers/publishersController')


const HOST = 'localhost';
const PORT = 8080;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = net.createConnection({ host: HOST, port: PORT }, () => {

client.connect(8080, 'localhost', () => {

    console.log('Conectado al servidor');
    promptUser();
});

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString().trim());
    promptUser();
});

function promptUser() {
    console.log("\n****************************");
    console.log("  📚 COMANDOS DISPONIBLES:");
    console.log("******************************");
    console.log("  👥 GET AUTHORS     → Obtener lista de autores");
    console.log("  ✍️ ADD AUTHOR      → Agregar autor (nombre, nacionalidad)");
    console.log("  🏛️ GET PUBLISHERS  → Obtener lista de editoriales");
    console.log("  🏢 ADD PUBLISHER   → Agregar editorial (nombre)");
    console.log("  📚 GET BOOKS       → Obtener lista de libros");
    console.log("  ➕ ADD BOOK        → Agregar libro (título, autor, editorial)");
    console.log("  👋 SALIR para finalizar");
    console.log("*******************************");

    rl.question('Ingrese un comando: ', (input) => {
        client.write(input.trim().toUpperCase()); 
    });
}

client.on('error', (error) => {
    console.error(error);
})
});

client.on('end', () => {
    console.log('Desconectado del servidor');
    process.exit();
});