const bookModel = require('../models/booksModel');
const responseView = require('../views/responseFormatter');

const booksController = {
    getBooks: () => {
        try{
            const books = bookModel.readBooks();
            return responseView.responseFormatter(books)
        } catch(err){
            return responseView.formatError("⚠️ Error retrieving the books", err.message);
        }
    },

    addBook: (newBook) => {
        try{
            const books = bookModel.readBooks();
            books.push(newBook);
            bookModel.addBook(newBook)
            return responseView.responseFormatter('Book added successfully: ', newBook)
        } catch (err) {
            return responseView.formatError("⚠️ Error adding book", err.message);
        }
    },

    searchBookByTitle: (data)=>{
        try{
            const result = bookModel.searchBookByTitle(data);
            if(!result){
                return responseView.formatError("No book was found with that title");
            }
            return responseView.responseFormatter(result);
        } catch(err){
            return responseView.formatError("⚠️ Error finding that book", err.message);
        }
    }
}

module.exports = { booksController }; 