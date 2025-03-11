const authorModel = require('../models/authorsModel');
const responseView = require('../views/responseFormatter');

const authorsController = {
    getAuthors: () => {
        const authors = authorModel.readAuthors();
        return responseView.responseFormatter(authors);
    },
    
    addAuthor: (newAuthor) => {
        authorModel.addAuthor(newAuthor);
        return responseView.responseFormatter(newAuthor);
    },

    searchAuthor: (data) => {
        const results = authorModel.searchAuthor(data);
        return results;
    }
};

module.exports = { authorsController };