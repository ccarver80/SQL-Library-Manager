var express = require('express');
var router = express.Router();
const Book = require('../models').Book;


router.get('/new-book', async(req, res, next) => {
    res.render('new-book', {article: {}});
  });


router.post('/new-book/post', async(req, res, next) => {
    try{
    const book = await Book.create(req.body);
    console.log(book); 
    res.redirect('/');
    } catch {
      res.render('new-book', {article: {}, test: ""})
    }
  });
module.exports = router;