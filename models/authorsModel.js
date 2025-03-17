const fs = require('fs');
const path = require('path');
const { v4 : uuidv4 } = require('uuid');

const dataPath = path.join(__dirname, '../data/authors.json');

const readAuthors = () => {
    try{
        if(!fs.existsSync(dataPath)){
            console.error("⚠️ Authors file doesn't exist");
        }
        const data = fs.readFileSync(dataPath, 'utf-8')
        return JSON.parse(data)
    }catch(err) {
        console.error("⚠️ Error reading authors", err.message);
        throw err;
    }
};

const addAuthor = (authorObject) => {
    console.log('Add author')
    // console.log('author desde model', author);
    // console.log('origin desde model', origin)
    console.log('Author object', authorObject);
    try{
        const authors = readAuthors();
        const newAuthor = { id: uuidv4(), authorName: authorObject.author, nationality: authorObject.nationality };
        authors.push(newAuthor);
        
        fs.writeFileSync(dataPath, JSON.stringify(authors, null, 2))
        return newAuthor;
    } catch(err) {
        console.error("⚠️ Error saving author", err.message);
        throw err; 
    }
    
};

//TODO: Terminar de hacer esta funcion
const searchAuthor = (query) => {
    try{
        const authors = readAuthors();
        const result = authors.find(author => 
            author.authorName.toLowerCase() === query.toLowerCase() || 
            author.nationality.toLowerCase() === query.toLowerCase()
        );
        if(!result){
            console.error('⚠️ Author not founded');
            return null;
        }
        return JSON.stringify(result);
    } catch(err){
        console.error("⚠️ Error searching author", err.message);
        return null;
    }
}

module.exports = {readAuthors, addAuthor, searchAuthor}