const swaggerAutogen = require('swagger-autogen')();

const doc= 
{
    info:{
        title:"Bookstore Api",
        description:"Books from Bookstore Api"
    },
    //host: 'contacts-project-3i6u.onrender.com',
    host: 'localhost:3050',
    schemes:['http']
};

const outputFile ='./swagger.json';
const endpointFiles =['./routes/index.js'];

swaggerAutogen(outputFile,endpointFiles,doc);