var express = require('express');
var router = express.Router();
const Book = require('../models').Book;

router.get('/books/:id', async(req, res) => {
    try {
    const book = await Book.findByPk(req.params.id)
    res.render('update-book', {title: book.title, author: book.author, genre: book.genre, year: book.year, id: book.id})
    } catch (error) {
            res.render('error', {error: "500", message: "Sorry maybe this book dose not exist yet!"})
        }
    })

router.post('/books/:id', async(req, res, next) => {
    const book = await Book.findByPk(req.params.id);
    await book.update(req.body); 
    res.redirect('/');
  });

  router.post('/books/:id/delete', async(req, res, next) => {
      const book = await Book.findByPk(req.params.id); 
      await book.destroy()
      res.redirect('/')
  })

module.exports = router;
