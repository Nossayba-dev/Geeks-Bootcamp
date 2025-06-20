// server/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Define routes and link them to controller functions
router.get('/', bookController.getAllBooks);
router.get('/:bookId', bookController.getBookById); // Using :bookId as per instructions
router.post('/', bookController.createBook);
router.put('/:bookId', bookController.updateBook);   // Included for full CRUD
router.delete('/:bookId', bookController.deleteBook); // Included for full CRUD

module.exports = router;