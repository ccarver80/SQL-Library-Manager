var express = require('express');
var router = express.Router();
const Book = require('../models').Book;

/* GET users listing. */
router.get('/books', async(req, res, next) => {
  const Books = await Book.findAll();
  res.render('index', {Books});
});

module.exports = router;
