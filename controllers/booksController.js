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

    searchBookByTitle: (data)=>{
        const result = bookModel.searchBookByTitle(data)
        return  result
    }
}

module.exports = { booksController }; 