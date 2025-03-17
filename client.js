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
    console.log('Connecting to server');
   promptUser();
});

client.on('data', (data) => {
    console.log('Servers Answer: ', data.toString().trim());
   // yesNoPromt();
});

client.on('error', (err) => {
    console.error(`⚠️ Connection error: ${err.message}`)
});

client.on('end', () => {
    console.log('Disconnected from server');
    process.exit();
});

function addBookPrompt(){
    rl.question("Please insert the book title: ", (bookTitle) => {
        rl.question("Please insert the author: ", (bookAuthor) => {
            const addBookInput = `ADD BOOK + ${bookTitle} + ${bookAuthor}` 
            client.write(addBookInput)
        });
    });
}

function promptUser() {
    console.log("\n****************************");
    console.log("  📚 AVAILABLE COMMANDS:");
    console.log("******************************");
    console.log("  👥 GET AUTHORS     → Get authors' list");
    console.log("  ✍️ ADD AUTHOR      → Add an author (name, nationality)");
    console.log("  🏛️ GET PUBLISHERS  → Get publishers' list");
    console.log("  🏢 ADD PUBLISHER   → Add publisher (name)");
    console.log("  📚 GET BOOKS       → Get books' list");
    console.log("  ➕ ADD BOOK        → Add a book (title, author)");
    console.log("  🔍 SEARCH BOOK BY TITLE → Search a book by title");
    console.log("  👋 EXIT to finish");
    console.log("*******************************");

    rl.question('Please insert a command: ', (input) => {
        input = input.toUpperCase().trim()

        if(input === 'ADD BOOK'){
            addBookPrompt()
        }else if(input === 'EXIT'){
            console.log('Disconnecting...');
            client.end();
        }else{
            client.write(input)
        }
    });
};

function yesNoPromt() {
    if(keyInYN('Would you like to continue? (Y/N)')){
        promptUser()        
    }else{
        client.end();
    }
};