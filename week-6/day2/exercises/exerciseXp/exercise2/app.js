const express = require('express');
const app = express();
const PORT = 3000;

const todosRouter = require('./routes/todos');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Simple To-Do API!');
});

app.use('/todos', todosRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('API Endpoints:');
    console.log(`GET    http://localhost:${PORT}/todos       (Get all to-do items)`);
    console.log(`POST   http://localhost:${PORT}/todos       (Create a new to-do item)`);
    console.log(`PUT    http://localhost:${PORT}/todos/:id   (Update a to-do item by ID)`);
    console.log(`DELETE http://localhost:${PORT}/todos/:id   (Delete a to-do item by ID)`);
});