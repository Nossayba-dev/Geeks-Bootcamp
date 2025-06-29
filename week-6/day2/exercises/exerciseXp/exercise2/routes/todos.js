const express = require('express');
const router = express.Router();

let todos = [
    { id: 1, title: 'Learn Express.js', completed: false },
    { id: 2, title: 'Build a To-Do API', completed: false },
    { id: 3, title: 'Go grocery shopping', completed: true }
];

let nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

const findTodoById = (id) => todos.find(todo => todo.id === parseInt(id));

router.param('id', (req, res, next, id) => {
    if (isNaN(id) || parseInt(id) <= 0) {
        return res.status(400).json({ message: 'Invalid ID format. ID must be a positive integer.' });
    }
    next();
});

router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required for a new to-do item.' });
    }
    const newTodo = {
        id: nextId++, 
        title,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo); 
});

router.get('/:id', (req, res) => {
    const todo = findTodoById(req.params.id);
    if (!todo) {
        return res.status(404).json({ message: 'To-do item not found.' });
    }
    res.json(todo);
});


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
        todo.completed = Boolean(completed);
    }

    res.json(todo);
});

router.delete('/:id', (req, res) => {
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== parseInt(req.params.id));

    if (todos.length === initialLength) {
        return res.status(404).json({ message: 'To-do item not found.' });
    }
    res.status(204).send(); 
});

module.exports = router;