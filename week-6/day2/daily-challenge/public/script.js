
const questionDisplay = document.getElementById('questionDisplay');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const currentScoreSpan = document.getElementById('currentScore');
const totalQuestionsAnsweredSpan = document.getElementById('totalQuestionsAnswered');
const restartQuizBtn = document.getElementById('restartQuizBtn');

const finalScoreArea = document.getElementById('finalScoreArea');
const finalScoreValueSpan = document.getElementById('finalScoreValue');
const totalQuestionsValueSpan = document.getElementById('totalQuestionsValue');
const playAgainBtn = document.getElementById('playAgainBtn');

let currentQuestionId = null; 
let currentScore = 0;
let questionsAnsweredCount = 0; 

const API_BASE_URL = '/api/quiz';



function updateScoreDisplay() {
    currentScoreSpan.textContent = currentScore;
    totalQuestionsAnsweredSpan.textContent = questionsAnsweredCount;
}


function clearFeedback() {
    feedbackMessage.textContent = '';
    feedbackMessage.classList.remove('correct', 'incorrect');
}


async function fetchAndDisplayQuestion() {
    clearFeedback();
    optionsContainer.innerHTML = '<button class="option-btn" disabled>Loading question...</button>'; 
    questionDisplay.textContent = 'Loading question...';

    try {
        const response = await fetch(`${API_BASE_URL}/current`); 
        if (!response.ok) {
            if (response.status === 404 || response.status === 400) { 
                return await startNewQuiz(); 
            }
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (data.gameOver) {
            displayFinalScore(); 
            return;
        }

        renderQuestion(data); 
    } catch (error) {
        console.error('Error fetching question:', error);
        feedbackMessage.textContent = 'Failed to load question. Please try restarting the quiz.';
        feedbackMessage.classList.add('incorrect');
        optionsContainer.innerHTML = '<button class="option-btn" disabled>Error loading</button>';
    }
}


async function startNewQuiz() {
    clearFeedback();
    currentScore = 0;
    questionsAnsweredCount = 0;
    updateScoreDisplay();
    hideFinalScoreArea(); 

    optionsContainer.innerHTML = '<button class="option-btn" disabled>Starting quiz...</button>';
    questionDisplay.textContent = 'Starting quiz...';

    try {
        const response = await fetch(`${API_BASE_URL}/new`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        renderQuestion(data);
    } catch (error) {
        console.error('Error starting new quiz:', error);
        feedbackMessage.textContent = 'Failed to start quiz. Please try again.';
        feedbackMessage.classList.add('incorrect');
        optionsContainer.innerHTML = '<button class="option-btn" disabled>Error starting</button>';
    }
}


function renderQuestion(questionData) {
    currentQuestionId = questionData.questionId; 
    questionDisplay.textContent = questionData.question;
    optionsContainer.innerHTML = ''; 

    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.dataset.answer = option; 
        button.addEventListener('click', handleOptionClick);
        optionsContainer.appendChild(button);
    });
    optionsContainer.querySelectorAll('.option-btn').forEach(btn => btn.disabled = false);
}


async function handleOptionClick(event) {
    const userGuess = event.target.dataset.answer; 

    optionsContainer.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

    try {
        const response = await fetch(`${API_BASE_URL}/answer`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ questionId: currentQuestionId, guess: userGuess })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        currentScore = data.score;
        questionsAnsweredCount++;
        updateScoreDisplay();

        if (data.isCorrect) {
            feedbackMessage.textContent = 'Correct! ';
            feedbackMessage.classList.add('correct');
        } else {
            feedbackMessage.textContent = `Incorrect. The answer was "${data.correctAnswer}". 😢`;
            feedbackMessage.classList.add('incorrect');
        }

        setTimeout(() => { 
            if (data.quizOver) {
                displayFinalScore();
            } else if (data.nextQuestion) {
                renderQuestion(data.nextQuestion);
            } else {
                feedbackMessage.textContent = 'Issue loading next question. Please restart.';
                feedbackMessage.classList.add('incorrect');
                optionsContainer.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
            }
        }, 1500); 
    } catch (error) {
        console.error('Error submitting answer:', error);
        feedbackMessage.textContent = 'Error submitting answer. Please try again.';
        feedbackMessage.classList.add('incorrect');
        optionsContainer.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true); 
    }
}


 
async function displayFinalScore() {
    try {
        const response = await fetch(`${API_BASE_URL}/score`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        finalScoreValueSpan.textContent = data.finalScore;
        totalQuestionsValueSpan.textContent = data.totalQuestions; 
        
        document.querySelector('.game-area').classList.add('hidden');
        finalScoreArea.classList.remove('hidden');
        
        currentQuestionId = null; 
        currentScore = data.finalScore; 
        questionsAnsweredCount = data.totalQuestions;
        updateScoreDisplay(); 

    } catch (error) {
        console.error('Error fetching final score:', error);
        finalScoreArea.innerHTML = '<h2>Error!</h2><p>Could not load final score.</p><button id="playAgainBtn" class="main-btn">Play Again</button>';
        document.querySelector('.game-area').classList.add('hidden');
        finalScoreArea.classList.remove('hidden');
    }
}


function hideFinalScoreArea() {
    finalScoreArea.classList.add('hidden');
    document.querySelector('.game-area').classList.remove('hidden');
}

restartQuizBtn.addEventListener('click', startNewQuiz);
playAgainBtn.addEventListener('click', startNewQuiz); 

document.addEventListener('DOMContentLoaded', fetchAndDisplayQuestion);