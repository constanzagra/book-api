// En el archivo client.js, implementa un cliente TCP
// que se conecte al servidor en el puerto 8080.
// ▪ Implementa comandos para interactuar con la
// API del servidor, como GET BOOKS, ADD BOOK
// {}, etc.
// ▪ Si desean poner mas funcionalidades son libres
// de hacerlo.
// ▪ Asegúrate de que el cliente pueda enviar
// comandos y recibir respuestas correctamente
// desde el servidor.
const net = require('net');
const readline = require('readline');
const { question } = require('readline-sync');
const { authorsController } = require('./controllers/authorsController');

const HOST = 'localhost';
const PORT = 8080;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = net.createConnection({ host: HOST, port: PORT }, () => {
    console.log('Conectado al servidor');
    promptUser();
});

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString().trim());
    promptUser();
});s

function promptUser() {
    rl.question('Ingrese un comando (GET AUTHORS, ADD AUTHOR, GET PUBLISHERS, ADD PUBLISHER, GET BOOKS, ADD BOOK): ', (input) => {
        client.write(input.trim()); 
    });
}

client.on('end', () => {
    console.log('Desconectado del servidor');
    process.exit();
});

