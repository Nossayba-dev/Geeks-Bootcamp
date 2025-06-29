const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const quizRouter = require('./routes/quiz');

app.get('/', (req, res) => {
    res.send('Welcome to the Trivia Quiz API! Go to /quiz to start.');
});

app.use('/quiz', quizRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('\n--- Trivia Quiz API Endpoints ---');
    console.log('To Start/Restart:     GET  http://localhost:${PORT}/quiz');
    console.log('To Submit Answer:     POST http://localhost:${PORT}/quiz (with JSON body: {"answer": "Your Answer"})');
    console.log('To See Final Score:   GET  http://localhost:${PORT}/quiz/score');
});