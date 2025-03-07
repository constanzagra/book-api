// Implementa en los modelos la lógica para leer y
// escribir datos desde y hacia estos archivos
// usando el módulo FS.
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/books.json');

const readBooks = () => {
        const data = fs.readFileSync(dataPath, 'utf-8')
        return JSON.parse(data)
};

const addBook = (book) => {
    fs.writeFileSync(dataPath, JSON.stringify(book, null, 2))
};

module.exports = {readBooks, addBook}