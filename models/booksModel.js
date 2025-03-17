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
        
        if(!author){
            throw new Error("⚠️  Author profile doesn't exist. Register a new author before adding a new book");
        }
        const newBook = { id: uuidv4(), title: titulo, author: author.id};
        books.push(newBook);
        fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
        return newBook
    } catch (err) {
        console.error("⚠️  Error saving book:", err.message);
        throw err; 
    }
}; 
const searchBookByTitle = (query) =>{
    try{
        const books = readBooks(); 
        const results = books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase())
        ); 

        if(results.length === 0){
            throw new Error('⚠️  Book not found');
        }
        return results;
    } catch(err){
        console.error("⚠️  Error searching that book:", err.message);
        throw err;
    }
}

//TODO: SEARCH BOOK BY AUTHOR
module.exports = {readBooks, addBook, searchBookByTitle}