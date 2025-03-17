const responseFormatter = (data) =>{
    if(!data){
        return JSON.stringify({error: "⚠️ Information not found"})
    } return JSON.stringify(data, null, 2)
};

const formatError = (message, errorInfo) => {
    return JSON.stringify({
        message,
        errorInfo
    }, null, 2);
};

module.exports = { responseFormatter, formatError };