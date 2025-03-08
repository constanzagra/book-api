// Implementa en los modelos la lógica para leer y
// escribir datos desde y hacia estos archivos
// usando el módulo FS.
const fs = require('fs');
const path = require('path');
const {readAuthors} = require('./authorsModel');
const { v4 : uuidv4 } = require('uuid');

const booksPath = path.join(__dirname, '../data/books.json');

const readBooks = () => {
        const data = fs.readFileSync(booksPath, 'utf-8')
        return JSON.parse(data)
};

const addBook = ({titulo, autor}) => {
    const data = readBooks(); 
    const authors = readAuthors();

    const idAuthor = authors.find(author =>
        author.nombre.toLowerCase().trim() === autor.toLowerCase().trim());

    const newBook = { id: uuidv4(), nombre: titulo, author: idAuthor.id};

    data.push(newBook);
    fs.writeFileSync(booksPath, JSON.stringify(newBook, null, 2)) 
    return newBook
}; 

module.exports = {readBooks, addBook}