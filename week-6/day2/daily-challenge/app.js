// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Step 5: Import the router module
const quizRouter = require('./routes/quiz');

// Basic route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Trivia Quiz API! Go to /quiz to start.');
});

// Step 5: Mount the quiz router
// All quiz-related routes will be prefixed with '/quiz'
app.use('/quiz', quizRouter);

// Step 6: Start Your Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('\n--- Trivia Quiz API Endpoints ---');
    console.log('To Start/Restart:     GET  http://localhost:${PORT}/quiz');
    console.log('To Submit Answer:     POST http://localhost:${PORT}/quiz (with JSON body: {"answer": "Your Answer"})');
    console.log('To See Final Score:   GET  http://localhost:${PORT}/quiz/score');
});