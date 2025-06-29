const Book = require('../models/bookModel');

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.getBookById(req.params.bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, author, published_year } = req.body;
    if (!title || !author || !published_year) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBook = await Book.createBook(title, author, published_year);
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};