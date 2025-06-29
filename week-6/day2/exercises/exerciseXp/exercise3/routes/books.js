const express = require('express');
const router = express.Router();

let books = [
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
    { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }
];

let nextId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;

const findBookById = (id) => books.find(book => book.id === parseInt(id));

router.param('id', (req, res, next, id) => {
    if (isNaN(id) || parseInt(id) <= 0) {
        return res.status(400).json({ message: 'Invalid ID format. ID must be a positive integer.' });
    }
    next();
});

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:id', (req, res) => {
    const book = findBookById(req.params.id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found.' });
    }
    res.json(book);
});

router.post('/', (req, res) => {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: 'Title, author, and publishedYear are required.' });
    }
    if (isNaN(publishedYear) || publishedYear <= 0) {
         return res.status(400).json({ message: 'publishedYear must be a positive number.' });
    }

    const newBook = {
        id: nextId++,
        title,
        author,
        publishedYear: parseInt(publishedYear)
    };
    books.push(newBook);
    res.status(201).json(newBook); 
});

router.put('/:id', (req, res) => {
    const book = findBookById(req.params.id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    const { title, author, publishedYear } = req.body;

    if (title !== undefined) {
        book.title = title;
    }
    if (author !== undefined) {
        book.author = author;
    }
    if (publishedYear !== undefined) {
        if (isNaN(publishedYear) || publishedYear <= 0) {
            return res.status(400).json({ message: 'publishedYear must be a positive number.' });
        }
        book.publishedYear = parseInt(publishedYear);
    }

    res.json(book);
});

router.delete('/:id', (req, res) => {
    const initialLength = books.length;
    books = books.filter(book => book.id !== parseInt(req.params.id));

    if (books.length === initialLength) {
        return res.status(404).json({ message: 'Book not found.' });
    }
    res.status(204).send(); 
});

module.exports = router;