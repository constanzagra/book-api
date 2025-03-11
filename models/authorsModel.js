const fs = require('fs');
const path = require('path');
const { v4 : uuidv4 } = require('uuid');

const dataPath = path.join(__dirname, '../data/authors.json');

const readAuthors = () => {
    const data = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
};

const addAuthor = ({author, origin}) => {
    const authors = readAuthors();
    const newAuthor = { id: uuidv4(), author: author, nationality: origin };
    authors.push(newAuthor);
    fs.writeFileSync(dataPath, JSON.stringify(authors, null, 2))
    return newAuthor;
};

const searchAuthor = (query) => {
    const authors = readAuthors();
    const result = authors.find(author => 
        author.nombre.toLowerCase() === query.toLowerCase() || 
        author.nacionalidad.toLowerCase() === query.toLowerCase()
    );
    return JSON.stringify(result);
}

module.exports = {readAuthors, addAuthor, searchAuthor}