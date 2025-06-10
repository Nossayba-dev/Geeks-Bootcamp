const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

let score = 0;
let currentEmoji = null;
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '📚', name: 'Book' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🏀', name: 'Basketball' },
];

app.use(express.static('public'));
app.use(express.json());

app.get('/emoji', (req, res) => {
    const correctIndex = Math.floor(Math.random() * emojis.length);
    const correct = emojis[correctIndex];
    currentEmoji = correct;

    // Select 3 other random options
    const options = [correct.name];
    while (options.length < 4) {
        const random = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(random)) options.push(random);
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    res.json({ emoji: correct.emoji, options });
});

app.post('/guess', (req, res) => {
    const { guess } = req.body;
    let result;

    if (guess === currentEmoji.name) {
        score++;
        result = 'correct';
    } else {
        result = 'incorrect';
    }

    res.json({ result, score });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});