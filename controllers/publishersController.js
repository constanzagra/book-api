const publisherModel = require('../models/publishersModel');
const responseView = require('../views/responseFormatter');

const publishersController = {
    getPublishers: () => {
        const publishers = publisherModel.readPublishers();

        return responseView.responseFormatter(publishers);
    },
    
    addPublisher: (newPublisher) => {
        publisherModel.addPublisher(newPublisher);
        return responseView.responseFormatter(newPublisher);
    },

    searchPublisher: (data) => {
        const results = publisherModel.searchPublisher(data);
        return results;
    }
};

module.exports = { publishersController }; 