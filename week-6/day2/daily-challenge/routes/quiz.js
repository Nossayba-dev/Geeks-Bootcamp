const express = require('express');
const router = express.Router();

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
    answer: "7", 
  },
];

let quizState = {
    currentQuestionIndex: 0,
    score: 0,
    quizCompleted: false,
};

const resetQuiz = () => {
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.quizCompleted = false;
};

router.get('/', (req, res) => {
    resetQuiz(); 

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
        quizState.quizCompleted = true;
        return res.status(400).json({
            message: "No current question found. Quiz might be over or not started. Please GET /quiz/score to see your final score.",
            score: quizState.score
        });
    }

    const isCorrect = userAnswer.toString().trim().toLowerCase() === currentQuestion.answer.toLowerCase();
    let feedback = `Your answer "${userAnswer}" is `;

    if (isCorrect) {
        quizState.score++;
        feedback += "CORRECT! ";
    } else {
        feedback += `INCORRECT. The correct answer was "${currentQuestion.answer}". 😞`;
    }

    quizState.currentQuestionIndex++; 

  
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
            currentScore: quizState.score 
        });
    }
});

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