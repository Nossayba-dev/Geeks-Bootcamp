// app.js
const express = require('express');
const bookRoutes = require('./server/routes/bookRoutes');
const pool = require('./server/config/db'); // Import the database pool to ensure connection is established

const app = express();
const PORT = process.env.PORT || 5000; // Listen on port 5000 as per instructions

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Book API! Go to /api/books to get started.');
});

// Mount the book routes
app.use('/api/books', bookRoutes);

// --- Error Handling Middleware ---

// 404 Not Found Middleware for invalid routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found.' });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('An unhandled error occurred:', err); // Log the full error for debugging
    res.status(err.status || 500).json({
        message: err.message || 'An unexpected server error occurred.',
        error: process.env.NODE_ENV === 'production' ? {} : err.stack // Only send stack in development
    });
});

// Start the Express app
// Ensure database connection is ready before starting the server
pool.query('SELECT 1') // Simple query to test the connection
    .then(() => {
        console.log('Database connection successfully tested.');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            console.log('\nAPI Endpoints:');
            console.log(`GET    http://localhost:${PORT}/api/books       (Get all books)`);
            console.log(`GET    http://localhost:${PORT}/api/books/:id   (Get a specific book)`);
            console.log(`POST   http://localhost:${PORT}/api/books       (Create a new book)`);
            console.log(`PUT    http://localhost:${PORT}/api/books/:id   (Update an existing book)`);
            console.log(`DELETE http://localhost:${PORT}/api/books/:id   (Delete a book)`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to the database on startup:', err.message);
        process.exit(1); // Exit the process if database connection fails
    });