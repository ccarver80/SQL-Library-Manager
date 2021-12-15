var express = require('express');
var router = express.Router();
const Book = require('../models').Book;

router.get('/new-book', async(req, res, next) => {
    res.render('new-book', {article: {}});
  });

router.post('/new-book', async(req, res, next) => {
    const book = await Book.create(req.body);
    console.log(book); 
    res.redirect('/');
  });
module.exports = router;