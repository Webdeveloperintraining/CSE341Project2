const router = require('express').Router();

router.use('/',require('./swagger'))

router.get('/',(req,res) => {
    res.send('Second project in development')});

router.use('/books', require('./books'));

module.exports = router;