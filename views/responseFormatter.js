const responseFormatter = (data) =>{
    if(!data){
        return JSON.stringify({eror: "No se ha encontrado la información"})
    } return JSON.stringify(data, null, 2)
};

module.exports = { responseFormatter };