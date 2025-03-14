const bookModel = require('../models/booksModel');
const responseView = require('../views/responseFormatter');

const booksController = {
    getBooks: () => {
        const books = bookModel.readBooks();

        return responseView.responseFormatter(books)
    },

    addBook: (newBook) => {
        const books = bookModel.readBooks();

        books.push(newBook);

        bookModel.addBook(newBook)

        return responseView.responseFormatter('Libro agregado exitosamente: ', newBook)
    },

    searchBook: (book)=>{
        const books = bookModel.readBooks(); 
        bookModel.searchBook(book)
        return responseView.responseFormatter('Libro encontrado: ', books)
    }
}

module.exports = { booksController }; 