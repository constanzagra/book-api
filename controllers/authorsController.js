const authorModel = require('../models/authorsModel');
const responseView = require('../views/responseFormatter');

const authorsController = {
    getAuthors: () => {
        const authors = authorModel.readAuthors();
    
        return responseView.responseFormatter(authors)
    },
    
    addAuthor: (newAuthor) => {
        const authors = authorModel.readAuthors();
    
        authors.push(newAuthor);
    
        authorModel.addAuthor(newAuthor)
    
        return responseView.responseFormatter('Autor/a agregado exitosamente', newAuthor)
    },

    searchAuthor: (data) => {
        const authors = authorModel.readAuthors();

        const results = authorModel.searchAuthor(data)
    }
};