const fs = require('fs');
const path = require('path');
const {readAuthors, addAuthor} = require('./authorsModel');
const { v4 : uuidv4 } = require('uuid');

const booksPath = path.join(__dirname, '../data/books.json');

const readBooks = () => {
    try{
        if(!fs.existsSync(booksPath)){
            throw new Error("⚠️  Books file doesn't exist");
        }
        const data = fs.readFileSync(booksPath, 'utf-8')
        return JSON.parse(data)
    } catch(err) {
        console.error("⚠️  Error reading books", err.message);
        throw err;
    }
};

const addBook = ({titulo, autor}) => {
    try {
        const books = readBooks(); 
        const authors = readAuthors();
    
        const author = authors.find(author =>
            author.name.toLowerCase().trim() === autor.toLowerCase().trim());
        
        //TODO: VALIDAMOS LA PARTE DE SI ENCUENTRA AL AUTOR Y SI NO QUE LE APAREZCA AL CLIENTE QUE NO EXISTE EL AUTOR QUE PUSO?
        // if(!idAuthor){
        //     console.log('No existe un perfil para ese autor. \n Registra al nuevo autor antes de ingresar su libro');
        //     addAuthor();        
        // }
        console.log(titulo);
            
        const newBook = { id: uuidv4(), title: titulo, author: author.id};
        books.push(newBook);
        fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
        return newBook
    } catch (err) {
        console.error("⚠️  Error saving book:", err.message);
        throw err; 
    }
}; 
//TODO: LO CAMBIAMOS POR FILTER Y USAMOS INCLUDES?
const searchBookByTitle = (query) =>{
    try{
        const books = readBooks(); 
        const result = books.find(book =>
            book.title.toLowerCase() === query.toLowerCase()
        ); 

        if(!result){
            throw new Error('⚠️  Book not found');
        }
        return result;
    } catch(err){
        console.error("⚠️  Error searching that book:", err.message);
        throw err;
    }
}

module.exports = {readBooks, addBook, searchBookByTitle}