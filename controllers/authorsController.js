const authorModel = require('../models/authorsModel');
const responseView = require('../views/responseFormatter');

const authorsController = {
    getAuthors: () => {
        try{
            const authors = authorModel.readAuthors();
            return responseView.responseFormatter(authors);
        } catch(err){
            return responseView.formatError("⚠️  Error retrieving authors", err.message);
        }
    },
    
    addAuthor: (newAuthor) => {
        try{
            authorModel.addAuthor(newAuthor);
            return responseView.responseFormatter(newAuthor);
        } catch(err){
            return responseView.formatError("⚠️  Error adding author", err.message);
        }
    },

    searchAuthor: (query) => {
        try{
            const results = authorModel.searchAuthor(query);
            return responseView.responseFormatter(results);
        } catch(err){
            return responseView.formatError("⚠️  Search failed", err.message);
        }
    }
};

module.exports = { authorsController };