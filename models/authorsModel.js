const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/authors.json');

const readAuthors = () => {
        const data = fs.readFileSync(dataPath, 'utf-8')
        return JSON.parse(data)
};


const addAuthor = (author) => {
    fs.writeFileSync(dataPath, JSON.stringify(author, null, 2))
};

const searchAuthor = (author) => {
    const data = readAuthors();
    return data.filter(author => author.nombre === author || author.nacionalidad === author)
}

module.exports = {readAuthors, addAuthor, searchAuthor}