const express = require('express');
const app = express();

app.use(express.json()); 

let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 },
];

const PORT = 5000;

app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "Missing required book data" });
  }

  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Get all books:
// curl http://localhost:5000/api/books

// Get book with ID 2:
// curl http://localhost:5000/api/books/2

// Add a new book (using curl):
// curl -X POST http://localhost:5000/api/books \
//   -H "Content-Type: application/json" \
//   -d '{"title":"Brave New World","author":"Aldous Huxley","publishedYear":1932}'