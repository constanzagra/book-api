const fs = require('fs');
const path = require('path');
const {readAuthors, addAuthor} = require('./authorsModel');
const { v4 : uuidv4 } = require('uuid');

const booksPath = path.join(__dirname, '../data/books.json');

const readBooks = () => {
    try{
        if(!fs.existsSync(booksPath)){
            throw new Error("⚠️ Books file doesn't exist");
        }
        const data = fs.readFileSync(booksPath, 'utf-8')
        return JSON.parse(data)
    } catch(err) {
        console.error("⚠️ Error reading books", err.message);
        throw err;
    }
};

const addBook = ({titulo, autor}) => {
    try {
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
        fs.writeFileSync(booksPath, JSON.stringify(data, null, 2));
        return newBook
    } catch (err) {
        console.error("⚠️ Error saving book:", err.message);
        throw err; 
    }
}; 

const searchBookByTitle = (query) =>{
    try{
        const books = readBooks(); 
        const result = books.find(book =>
            book.nombre.toLowerCase() === query.toLowerCase()/*||
            book.author.toLowerCase() === query.toLowerCase()*/
        ); 

        if(!result){
            console.error('⚠️ Book not found');
            return null;
        }
        return JSON.stringify(result);
    } catch(err){
        console.error("⚠️ Error searching that book:", err.message);
        return null;
    }
}

module.exports = {readBooks, addBook, searchBookByTitle}