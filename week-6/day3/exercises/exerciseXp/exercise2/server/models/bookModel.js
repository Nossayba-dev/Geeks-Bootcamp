// server/controllers/bookController.js
const Book = require('../models/bookModel');

// GET /api/books: Return a list of all books.
exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.getAllBooks();
        res.json(books);
    } catch (err) {
        next(err); // Pass error to the global error handler
    }
};

// GET /api/books/:bookId: Return a specific book based on its id.
exports.getBookById = async (req, res, next) => {
    try {
        const { bookId } = req.params; // Use bookId as per instructions
        const book = await Book.getBookById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found.' });
        }
        res.json(book);
    } catch (err) {
        next(err);
    }
};

// POST /api/books: Create a new book.
exports.createBook = async (req, res, next) => {
    try {
        const { title, author, publishedYear } = req.body;
        if (!title || !author || !publishedYear) {
            return res.status(400).json({ message: 'Title, author, and publishedYear are required.' });
        }
        if (isNaN(publishedYear) || parseInt(publishedYear) <= 0) {
             return res.status(400).json({ message: 'publishedYear must be a positive number.' });
        }
        const newBook = await Book.createBook(title, author, parseInt(publishedYear));
        res.status(201).json(newBook); // 201 Created
    } catch (err) {
        next(err);
    }
};

// PUT /api/books/:bookId: Update an existing book. (Included for full CRUD)
exports.updateBook = async (req, res, next) => {
    try {
        const { bookId } = req.params;
        const { title, author, publishedYear } = req.body;

        if (!title || !author || !publishedYear) {
            return res.status(400).json({ message: 'Title, author, and publishedYear are required for update.' });
        }
        if (isNaN(publishedYear) || parseInt(publishedYear) <= 0) {
             return res.status(400).json({ message: 'publishedYear must be a positive number.' });
        }

        const updatedBook = await Book.updateBook(bookId, title, author, parseInt(publishedYear));
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found.' });
        }
        res.json(updatedBook);
    } catch (err) {
        next(err);
    }
};

// DELETE /api/books/:bookId: Delete a book. (Included for full CRUD)
exports.deleteBook = async (req, res, next) => {
    try {
        const { bookId } = req.params;
        const deletedBook = await Book.deleteBook(bookId);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found.' });
        }
        res.status(204).send(); // 204 No Content
    } catch (err) {
        next(err);
    }
};