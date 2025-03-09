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
const client = new net.Socket();

client.connect(8085, 'localhost', () => {
    console.log('Conectado al servidor');
    
    // Enviar comandos al servidor
    client.write('Hola');
    // client.write('GET AUTHORS');
    // client.write('FIND AUTHOR Borges');
});

client.on('data', (data) => {
    console.log('Respuesta del servidor:\n', data.toString());
});

client.on('close', () => {
    console.log('Conexión cerrada');
});