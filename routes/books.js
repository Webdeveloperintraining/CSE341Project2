const express =require('express');
const router =express.Router();

const booksController= require('../controllers/books');
const {isAuthenticated} =require('../middleware/authenticate');
const validation = require('../middleware/validate');

router.get('/', booksController.getAll);
router.get('/:id', booksController.getSingle);

router.post('/', isAuthenticated ,validation.saveBook, booksController.createBook);

router.put('/:id', isAuthenticated,validation.saveBook, booksController.updateBook); 


router.delete('/:id', isAuthenticated, booksController.deleteBook);

module.exports = router;

/*const express =require('express');
const router =express.Router();

const booksController= require('../controllers/books');


const {isAuthenticated} =require('../middleware/authenticate');

router.get('/', booksController.getAll);
router.get('/:id', booksController.getSingle);
router.post('/', isAuthenticated, booksController.createBook);
router.put('/:id', isAuthenticated, booksController.updateBook); 
router.delete('/:id', isAuthenticated, booksController.deleteBook);

module.exports = router;*/