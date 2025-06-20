// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Step 5: Import the router module
const todosRouter = require('./routes/todos');

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Basic route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Simple To-Do API!');
});

// Step 5: Mount the router
// All routes defined in todosRouter will be prefixed with '/todos'
app.use('/todos', todosRouter);

// Step 6: Start Your Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('API Endpoints:');
    console.log(`GET    http://localhost:${PORT}/todos       (Get all to-do items)`);
    console.log(`POST   http://localhost:${PORT}/todos       (Create a new to-do item)`);
    console.log(`PUT    http://localhost:${PORT}/todos/:id   (Update a to-do item by ID)`);
    console.log(`DELETE http://localhost:${PORT}/todos/:id   (Delete a to-do item by ID)`);
});