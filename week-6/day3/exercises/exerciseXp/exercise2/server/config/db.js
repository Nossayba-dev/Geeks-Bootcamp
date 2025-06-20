// server/config/db.js
const { Pool } = require('pg');

// Database connection configuration
const pool = new Pool({
    user: 'your_username',     // Replace with your PostgreSQL username
    host: 'localhost',         // Replace with your PostgreSQL host (e.g., 'localhost', '127.0.0.1')
    database: 'your_database_name', // Replace with your database name
    password: 'your_password', // Replace with your PostgreSQL password
    port: 5432,                // Default PostgreSQL port
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database.');
});

pool.on('error', (err) => {
    console.error('Error connecting to the PostgreSQL database:', err.message);
    // In a real application, you might want more sophisticated error handling or graceful shutdown
    process.exit(1); // Exit the process if database connection fails critically
});

module.exports = pool;