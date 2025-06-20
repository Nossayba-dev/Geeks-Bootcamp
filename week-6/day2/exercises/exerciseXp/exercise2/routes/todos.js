// routes/todos.js
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
// In a real application, this would be a database (MongoDB, PostgreSQL, etc.)
let todos = [
    { id: 1, title: 'Learn Express.js', completed: false },
    { id: 2, title: 'Build a To-Do API', completed: false },
    { id: 3, title: 'Go grocery shopping', completed: true }
];

let nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

// Helper function to find a todo by ID
const findTodoById = (id) => todos.find(todo => todo.id === parseInt(id));

// Middleware for ID validation (optional but good practice)
router.param('id', (req, res, next, id) => {
    if (isNaN(id) || parseInt(id) <= 0) {
        return res.status(400).json({ message: 'Invalid ID format. ID must be a positive integer.' });
    }
    next();
});

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required for a new to-do item.' });
    }
    const newTodo = {
        id: nextId++, // Assign a unique ID
        title,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo); // 201 Created
});

// Get a single to-do item by ID (added for completeness, not in original instructions but useful)
router.get('/:id', (req, res) => {
    const todo = findTodoById(req.params.id);
    if (!todo) {
        return res.status(404).json({ message: 'To-do item not found.' });
    }
    res.json(todo);
});


// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const todo = findTodoById(req.params.id);
    if (!todo) {
        return res.status(404).json({ message: 'To-do item not found.' });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
        todo.title = title;
    }
    if (completed !== undefined) {
        // Ensure 'completed' is a boolean
        todo.completed = Boolean(completed);
    }

    res.json(todo);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const initialLength = todos.length;
    // Filter out the todo item with the given ID
    todos = todos.filter(todo => todo.id !== parseInt(req.params.id));

    if (todos.length === initialLength) {
        // If length hasn't changed, item wasn't found
        return res.status(404).json({ message: 'To-do item not found.' });
    }
    res.status(204).send(); // 204 No Content
});

module.exports = router;