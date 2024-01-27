const router = require('express').Router();

router.use('/',require('./swagger'))

router.get('/',(req,res) => {
    res.send('Hello World!! This is the CSE341Project2')});

router.use('/books', require('./books'));

module.exports = router;