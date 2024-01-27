const mongodb =require('../data/database');
const ObjectId =require('mongodb').ObjectId;

const getAll = async (req, res) =>{
const result = await mongodb.getDatabase().db('bookstore').collection('books').find();

    result.toArray().then((books) => {
        res.setHeader('Content-Type','application/json');
        res.status(200).json(books)
    });
};

const getSingle = async (req, res) =>{
    if (!ObjectId.isValid(req.params.id)) { res.status(400).json('Must use a valid book id to update a book.'); } 
const bookId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('bookstore').collection('books').find({_id:bookId});
    
        result.toArray().then((books) => {
            res.setHeader('Content-Type','application/json');
            res.status(200).json(books[0])
        });
    };

const createBook = async (req,res)=>{
    const book = {
    bookName: req.body.bookName,
    authorFirstName: req.body.authorFirstName,
    authorLastName: req.body.authorLastName,
    publicationDate: req.body.publicationDate,
    pages: req.body.pages
    };
    const response = await mongodb.getDatabase().db('bookstore').collection('books').insertOne(book);
    if (response.acknowledged){
        res.status(204).send();
        }else{
            res.status(500).json(response.error || 'Some error ocurred while inserting the book.');
        }
};

const updateBook = async (req,res)=>{
    if (!ObjectId.isValid(req.params.id)) { res.status(400).json('Must use a valid book id to update a book.'); } 
    const bookId =new ObjectId(req.params.id);
    const book = {
    bookName: req.body.bookName,
    authorFirstName: req.body.authorFirstName,
    authorLastName: req.body.authorLastName,
    publicationDate: req.body.publicationDate,
    pages: req.body.pages
    };
    const response = await mongodb.getDatabase().db('bookstore').collection('books').replaceOne({_id: bookId}, book);
    if (response.modifiedCount > 0){
        res.status(204).send();
        }else{
            res.status(500).json(response.error || 'Some error ocurred while updating the book.');
        };
}

const deleteBook = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) { res.status(400).json('Must use a valid book id to delete a book.'); } 
    const bookId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db('bookstore').collection('books').deleteOne({ _id: bookId });

    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while removing the book.');
    }
};

module.exports= {
    getAll,
    getSingle,
    createBook,
    updateBook,
    deleteBook

};