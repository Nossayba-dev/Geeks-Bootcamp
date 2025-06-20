// server.js
const express = require('express');
const postRoutes = require('./server/routes/postRoutes');
const pool = require('./server/config/db'); // Import the database pool to ensure connection is established

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Blog API! Go to /api/posts to get started.');
});

// Mount the post routes
app.use('/api/posts', postRoutes);

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
pool.query('SELECT 1')
    .then(() => {
        console.log('Database connection successfully tested.');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            console.log('\nAPI Endpoints:');
            console.log(`GET    http://localhost:${PORT}/api/posts       (Get all blog posts)`);
            console.log(`GET    http://localhost:${PORT}/api/posts/:id   (Get a specific blog post)`);
            console.log(`POST   http://localhost:${PORT}/api/posts       (Create a new blog post)`);
            console.log(`PUT    http://localhost:${PORT}/api/posts/:id   (Update an existing blog post)`);
            console.log(`DELETE http://localhost:${PORT}/api/posts/:id   (Delete a blog post)`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to the database on startup:', err.message);
        process.exit(1); // Exit the process if database connection fails
    });