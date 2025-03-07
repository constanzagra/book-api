const responseFormatter = (data) =>{
    if(!data){
        return JSON.stringify({error: "No se ha encontrado la información"})
    } return JSON.stringify(data, null, 2)
};

module.exports = { responseFormatter };