const swaggerAutogen = require('swagger-autogen')();

const doc= 
{
    info:{
        title:"Bookstore Api",
        description:"Books from Bookstore Api"
    },
    host: 'cse341project2-vexy.onrender.com',
    //host: 'localhost:3050',
    schemes:['https']
};

const outputFile ='./swagger.json';
const endpointFiles =['./routes/index.js'];

swaggerAutogen(outputFile,endpointFiles,doc);