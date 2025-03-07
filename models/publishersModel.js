const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/publisher.json');

const readPublishers = () => {
        const data = fs.readFileSync(dataPath, 'utf-8')
        return JSON.parse(data)
};


const addPublisher = (publisher) => {
    fs.writeFileSync(dataPath, JSON.stringify(publisher, null, 2))
};

const searchPublisher = (publisher) => {
    const data = readPublishers();
    return data.filter(publisher => publisher.nombre === publisher || publisher.pais === publisher)
};


module.exports = {readPublishers, addPublisher, searchPublisher}