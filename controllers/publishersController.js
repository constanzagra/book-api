const publisherModel = require('../models/publishersModel');
const responseView = require('../views/responseFormatter');

const publishersController = {
    getPublishers: () => {
        try{
            const publishers = publisherModel.readPublishers();
            return responseView.responseFormatter(publishers);
        } catch(err){
            return responseView.formatError("⚠️  Error retrieving publishers", err.message);
        }
    },
    
    addPublisher: (newPublisher) => {
        try{
            publisherModel.addPublisher(newPublisher);
            return responseView.responseFormatter(newPublisher);
        }catch(err){
            return responseView.formatError("⚠️  Error adding publisher", err.message);
        }
    },

    searchPublisher: (query) => {
        try{
            const results = publisherModel.searchPublisher(query);
            return responseView.responseFormatter(results);
        } catch(err){
            return responseView.formatError("⚠️  Search failed", err.message);
        }
    }
};

module.exports = { publishersController }; 