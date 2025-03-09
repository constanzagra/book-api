const fs = require('fs');
const path = require('path');
const { v4 : uuidv4 } = require('uuid');

const dataPath = path.join(__dirname, '../data/publishers.json');

const readPublishers = () => {
        const data = fs.readFileSync(dataPath, 'utf-8')
        return JSON.parse(data)
};


const addPublisher = ({publisherName, location}) => { 
    const publishers = readPublishers();
    const newPublisher = { id: uuidv4(), nombre: publisherName, ubicacion: location}; 

    publishers.push(newPublisher);
    fs.writeFileSync(dataPath, JSON.stringify(publishers, null, 2))
    return newPublisher;
}; 

const searchPublisher = (query) => {
    const data = readPublishers();
    return data.filter(publisher => 
        publisher.nombre.toLowerCase().trim() === query.toLowerCase().trim() 
        || publisher.pais.toLowerCase().trim() === query.toLowerCase().trim())
};


module.exports = { readPublishers, addPublisher, searchPublisher }  