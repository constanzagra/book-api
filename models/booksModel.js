const fs = require('fs');
const path = require('path');
const {readAuthors, addAuthor} = require('./authorsModel');
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
    
    // if(!idAuthor){
    //     console.log('No existe un perfil para ese autor. \n Registra al nuevo autor antes de ingresar su libro');
    //     addAuthor();        
    // }
    console.log(titulo);
        
    const newBook = { id: uuidv4(), nombre: titulo, author: autor};

    data.push(newBook);
    fs.writeFileSync(booksPath, JSON.stringify(data, null, 2)) 
    return newBook
}; 

module.exports = {readBooks, addBook}