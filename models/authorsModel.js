// Implementa en los modelos la lógica para leer y
// escribir datos desde y hacia estos archivos
// usando el módulo FS.
//1. Listar autores
//2. Buscar autores por nombre o nacionalidad
//3. Agregar nuevos autores

const fs = require('fs');
const path = require('path');
const { v4 : uuidv4 } = require('uuid');

const dataPath = path.join(__dirname, '../data/authors.json');

const readAuthors = () => {
    const data = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
};

const addAuthor = (author) => {
    const authors = readAuthors();
    const newAuthor = { id: uuidv4(), nombre: author, nacionalidad: author };
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