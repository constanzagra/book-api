const net = require('net');
const readline = require('readline');
const { keyInYN } = require('readline-sync');

const HOST = 'localhost';
const PORT = 8080;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = net.createConnection({ host: HOST, port: PORT }, () => {
    console.log('Conectado al servidor');
   // promptUser();
});

client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString().trim());
   // yesNoPromt();
});

client.on('error', (err) => {
    console.error(`Error en la conexión: ${err.message}`)
});

client.on('end', () => {
    console.log('Desconectado del servidor');
    process.exit();
});

function addBookPrompt(){
    rl.question("Ingrese el titulo del libro: ", (bookTitle) => {
        rl.question("Ingrese el autor: ", (bookAuthor) => {
            const addBookInput = `ADD BOOK + ${bookTitle} + ${bookAuthor}` 
            client.write(addBookInput)
        });
    });
}

/*function promptUser() {
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

        if(input === 'ADD BOOK'){
            addBookPrompt()
        }else if(input === 'SALIR'){
            console.log('Desconectando...');
            client.end();
        }else{
            client.write(input)
        }
    });
};

function yesNoPromt() {
    if(keyInYN('Deseas continuar? (Y/N)')){
        promptUser()        
    }else{
        client.end();
    }
};*/