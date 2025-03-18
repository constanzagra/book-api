const fs = require('fs');
const path = require('path');
const { v4 : uuidv4 } = require('uuid');

const publisherPath = path.join(__dirname, '../data/publishers.json');

const readPublishers = () => {
    try{
        if(!fs.existsSync(publisherPath)){
            throw new Error("⚠️  Publishers file doesn't exist");
        }
        const data = fs.readFileSync(publisherPath, 'utf-8')
        return JSON.parse(data)
    } catch(err){
        console.error("⚠️ Error reading publishers ", err.message)
        throw err;
    }
};

const addPublisher = ({publisherName, location}) => { 
    try{
        const publishers = readPublishers();
        const newPublisher = { id: uuidv4(), name: publisherName, location: location}; 
    
        publishers.push(newPublisher);
        fs.writeFileSync(publisherPath, JSON.stringify(publishers, null, 2))
        return newPublisher;
    }catch(err){
        console.error("⚠️ Error saving publisher", err.message);
        throw err; 
    }
}; 

const searchPublisher = (query) => {
    try{
        const publishers = readPublishers();
        const results = publishers.filter(publisher => 
            publisher.name.toLowerCase().includes(query.toLowerCase()) ||
            publisher.location.toLowerCase().includes(query.toLowerCase())
        )
        if(results.length === 0){
            throw new Error("❌ Publisher not found");
        }
        return results;
    }catch(err){
        console.error("⚠️ Error searching publisher", err.message);
        throw err;
    } 
};

module.exports = { readPublishers, addPublisher, searchPublisher }  