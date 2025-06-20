// routes/quiz.js
const express = require('express');
const router = express.Router();

// Sample hard-coded trivia questions and answers
const triviaQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
  {
    id: 4,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
  },
  {
    id: 5,
    question: "How many continents are there on Earth?",
    answer: "7", // Or "Seven" depending on desired strictness
  },
];

// --- In-memory quiz state for a single user ---
// In a real application, this state would be managed per user session
let quizState = {
    currentQuestionIndex: 0,
    score: 0,
    quizCompleted: false,
};

// Helper function to reset the quiz state
const resetQuiz = () => {
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.quizCompleted = false;
};

// GET /quiz: Start the quiz and display the first question.
router.get('/', (req, res) => {
    resetQuiz(); // Always reset on new GET /quiz to start fresh

    if (triviaQuestions.length === 0) {
        return res.status(500).json({ message: "No trivia questions available." });
    }

    const currentQuestion = triviaQuestions[quizState.currentQuestionIndex];
    res.json({
        message: "Quiz started! Here is your first question:",
        questionNumber: quizState.currentQuestionIndex + 1,
        question: currentQuestion.question
    });
});

// POST /quiz: Submit an answer to the current question and move to the next question.
router.post('/', (req, res) => {
    const userAnswer = req.body.answer;

    if (quizState.quizCompleted) {
        return res.status(400).json({
            message: "Quiz is already completed. Please GET /quiz to start a new game or GET /quiz/score to see your final score."
        });
    }

    if (userAnswer === undefined || userAnswer === null || userAnswer.toString().trim() === '') {
        return res.status(400).json({ message: "Please provide an answer in the request body, e.g., {'answer': 'Your Answer'}" });
    }

    const currentQuestion = triviaQuestions[quizState.currentQuestionIndex];

    if (!currentQuestion) {
        // This should ideally not happen if quizCompleted check works, but as a safeguard
        quizState.quizCompleted = true;
        return res.status(400).json({
            message: "No current question found. Quiz might be over or not started. Please GET /quiz/score to see your final score.",
            score: quizState.score
        });
    }

    // Compare case-insensitively
    const isCorrect = userAnswer.toString().trim().toLowerCase() === currentQuestion.answer.toLowerCase();
    let feedback = `Your answer "${userAnswer}" is `;

    if (isCorrect) {
        quizState.score++;
        feedback += "CORRECT! 🎉";
    } else {
        feedback += `INCORRECT. The correct answer was "${currentQuestion.answer}". 😞`;
    }

    quizState.currentQuestionIndex++; // Move to the next question

    // Check if there are more questions
    if (quizState.currentQuestionIndex < triviaQuestions.length) {
        const nextQuestion = triviaQuestions[quizState.currentQuestionIndex];
        res.json({
            feedback: feedback,
            message: "Next question:",
            questionNumber: quizState.currentQuestionIndex + 1,
            question: nextQuestion.question
        });
    } else {
        quizState.quizCompleted = true;
        res.json({
            feedback: feedback,
            message: "Quiz completed! You've answered all questions.",
            finalScorePrompt: "Please GET /quiz/score to see your final results.",
            currentScore: quizState.score // Show current score before the final score prompt
        });
    }
});

// GET /quiz/score: Display the user’s final score at the end of the quiz.
router.get('/score', (req, res) => {
    if (!quizState.quizCompleted && quizState.currentQuestionIndex < triviaQuestions.length) {
        return res.status(400).json({
            message: "Quiz is not yet completed. Please continue answering questions via POST /quiz.",
            progress: `You are on question ${quizState.currentQuestionIndex + 1} of ${triviaQuestions.length}.`
        });
    }

    res.json({
        message: "Quiz Results:",
        totalQuestions: triviaQuestions.length,
        yourScore: quizState.score,
        percentage: `${((quizState.score / triviaQuestions.length) * 100).toFixed(2)}%`,
        restartInstructions: "GET /quiz to start a new game."
    });
});

module.exports = router;