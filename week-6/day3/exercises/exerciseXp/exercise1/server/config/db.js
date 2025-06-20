// server/config/db.js
const { Pool } = require('pg');

// Database connection configuration
const pool = new Pool({
    user: 'your_username',     // Replace with your PostgreSQL username
    host: 'localhost',         // Replace with your PostgreSQL host
    database: 'your_database_name', // Replace with your database name
    password: 'your_password', // Replace with your PostgreSQL password
    port: 5432,                // Default PostgreSQL port
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database.');
});

pool.on('error', (err) => {
    console.error('Error connecting to the PostgreSQL database:', err.message);
    // You might want to exit the process or try to reconnect here in a real app
    process.exit(-1);
});

module.exports = pool;