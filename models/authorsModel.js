const fs = require('fs');
const path = require('path');
const { v4 : uuidv4 } = require('uuid');

const authorsPath = path.join(__dirname, '../data/authors.json');

const readAuthors = () => {
    try{
        if(!fs.existsSync(authorsPath)){
            throw new Error("⚠️ Authors file doesn't exist");
        }
        const data = fs.readFileSync(authorsPath, 'utf-8')
        return JSON.parse(data)
    }catch(err) {
        console.error("⚠️ Error reading authors", err.message);
        throw err;
    }
};

const addAuthor = (authorObject) => {
    try{
        const authors = readAuthors();
        const newAuthor = { id: uuidv4(), name: authorObject.name, nationality: authorObject.nationality };
        authors.push(newAuthor);
        
        fs.writeFileSync(authorsPath, JSON.stringify(authors, null, 2))
        return newAuthor;
    } catch(err) {
        console.error("⚠️ Error saving author", err.message);
        throw err; 
    }
    
};

const searchAuthor = (query) => {
    try{
        const authors = readAuthors();
        const results = authors.filter(author => 
            author.name.toLowerCase().includes(query.toLowerCase()) || 
            author.nationality.toLowerCase().includes(query.toLowerCase())
        );
        if(results.length === 0){
            throw new Error("❌ Author not found"); 
            //Detiene la ejecución normal de la función.
            //Salta inmediatamente al bloque catch(err), donde el error será capturado.
        }
        return results;
    } catch(err){
        console.error("⚠️ Error searching author", err.message);
        throw err; //Esto hace que se lance el error al controlador y que el controlador lo maneje
        // Vuelve a lanzar el mismo error que capturó en el catch.
        // Esto permite que otro nivel superior en la aplicación (como el controlador o el servidor TCP) lo maneje en lugar de simplemente imprimirlo en la consola.
    }
}
// const searchAuthor = (query) => {
//     try{
//         const authors = readAuthors();
//         const result = authors.find(author => 
//             author.authorName.toLowerCase() === query.toLowerCase() || 
//             author.nationality.toLowerCase() === query.toLowerCase()
//         );
//         if(!result){
//             console.error('⚠️ Author not founded');
//             return null;
//         }
//         return JSON.stringify(result);
//     } catch(err){
//         console.error("⚠️ Error searching author", err.message);
//         return null;
//     }
// }

module.exports = {readAuthors, addAuthor, searchAuthor}