const net = require('net');
const readline = require('readline');
const {question} = require('readline-sync')
const {authorsController} = require('./controllers/authorsController');
const {booksController} = require('./controllers/booksController')
const {publishersController} = require('./controllers/publishersController')


const HOST = 'localhost';
const PORT = 8081;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = net.createConnection({ host: HOST, port: PORT }, () => {

client.connect(8081, 'localhost', () => {

    console.log('Conectado al servidor');
    promptUser();
});

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString().trim());
    promptUser();
});

function addBookPrompt(){
    rl.question("Ingrese el titulo del libro: ", (bookTitle) => {
        rl.question("Ingrese el autor: ", (bookAuthor) => {
            const addBookInput = `ADD BOOK + ${bookTitle} + ${bookAuthor}` 
            client.write(addBookInput)
        })
    })
}

function promptUser() {
    console.log("\n****************************");
    console.log("  📚 COMANDOS DISPONIBLES:");
    console.log("******************************");
    console.log("  👥 GET AUTHORS     → Obtener lista de autores");
    console.log("  ✍️ ADD AUTHOR      → Agregar autor (nombre, nacionalidad)");
    console.log("  🏛️ GET PUBLISHERS  → Obtener lista de editoriales");
    console.log("  🏢 ADD PUBLISHER   → Agregar editorial (nombre)");
    console.log("  📚 GET BOOKS       → Obtener lista de libros");
    console.log("  ➕ ADD BOOK        → Agregar libro (título, autor)");
    console.log("  👋 SALIR para finalizar");
    console.log("*******************************");
    rl.question('Ingrese un comando: ', (input) => {
        input = input.toUpperCase().trim()
        if(input === "ADD BOOK"){addBookPrompt()}
        else{client.write(input)}; 
    });
    
} 
//Continuar editando MENU. Agregar un rl.keyInYN() despues de cada comando ejecutado exitosamente
client.on('error', (error) => {
    console.error(error);
});

client.on('end', () => {
    console.log('Desconectado del servidor');
    process.exit();
});})