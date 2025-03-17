const bookModel = require('../models/booksModel');
const responseView = require('../views/responseFormatter');

const booksController = {
    getBooks: () => {
        try{
            const books = bookModel.readBooks();
            return responseView.responseFormatter(books)
        } catch(err){
            return responseView.formatError("Error al obtener los libros", err.message);
        }
    },

    addBook: (newBook) => {
        try{
            const books = bookModel.readBooks();
            books.push(newBook);
            bookModel.addBook(newBook)
            return responseView.responseFormatter('Libro agregado exitosamente: ', newBook)
        } catch (err) {
            return responseView.formatError("Error al agregar el libro", err.message);
        }
    },

    searchBookByTitle: (data)=>{
        try{
            const result = bookModel.searchBookByTitle(data);
            if(!result){
                return responseView.formatError("No se encontró un libro con ese título");
            }
            return responseView.responseFormatter(result);
        } catch(err){
            return responseView.formatError("Error al buscar el libro", err.message);
        }
    }
}

module.exports = { booksController }; 