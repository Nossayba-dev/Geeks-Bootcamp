const express = require('express');
const app = express();
const PORT = 3000;

const booksRouter = require('./routes/books');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Simple Books API!');
});

app.use('/books', booksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('API Endpoints:');
    console.log(`GET    http://localhost:${PORT}/books       (Get all books)`);
    console.log(`GET    http://localhost:${PORT}/books/:id   (Get a single book by ID)`); // Added for completeness
    console.log(`POST   http://localhost:${PORT}/books       (Create a new book)`);
    console.log(`PUT    http://localhost:${PORT}/books/:id   (Update a book by ID)`);
    console.log(`DELETE http://localhost:${PORT}/books/:id   (Delete a book by ID)`);
});