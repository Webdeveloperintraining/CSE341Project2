const validator = require('../helpers/validate'); 
const saveBook = (req, res, next) => { 
    const validationRule = { 
        bookName: 'required|string', 
        authorFirstName: 'required|string', 
        authorLastName: 'required|string', 
        publicationDate: 'required|string',
        pages:"string"}; 
        validator(req.body, 
            validationRule, {}, 
            (err, status) => { 
                if (!status) { 
                    res.status(412).send({ 
                        success: false, 
                        message: 'Validation failed', 
                        data: err }); } else { next(); } }); 
                    }; 
                    
module.exports = { saveBook }; 