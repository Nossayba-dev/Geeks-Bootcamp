const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

let board = Array(9).fill('');
let playerSymbol = '';
let aiSymbol = '';
let currentLevel = 'easy';
let gameOver = false;

function chooseSymbol(symbol) {
  playerSymbol = symbol;
  aiSymbol = symbol === 'X' ? 'O' : 'X';
  document.getElementById("symbol-selection").style.display = "none";
  document.getElementById("level-selection").style.display = "block";
}

function setLevel(level) {
  currentLevel = level;
  document.getElementById("level-selection").style.display = "none";
}

function playerMove(index) {
  if (gameOver || board[index]) return;
  board[index] = playerSymbol;
  document.getElementById(index).textContent = playerSymbol;
  if (checkWinner(playerSymbol)) return endGame(`${playerSymbol} wins!`);
  if (isTie()) return endGame("Tie game!");
  setTimeout(aiMove, 500);
}

function aiMove() {
  let move;
  if (currentLevel === 'easy') {
    move = getRandomMove();
  } else {
    move = getBestMove();
  }
  if (move !== null) {
    board[move] = aiSymbol;
    document.getElementById(move).textContent = aiSymbol;
    if (checkWinner(aiSymbol)) return endGame(`${aiSymbol} wins!`);
    if (isTie()) return endGame("Tie game!");
  }
}

function getRandomMove() {
  const empty = board.map((val, idx) => val === '' ? idx : null).filter(v => v !== null);
  return empty.length > 0 ? empty[Math.floor(Math.random() * empty.length)] : null;
}

function getBestMove() {
  // 1. Can AI win?
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      board[i] = aiSymbol;
      if (checkWinner(aiSymbol)) {
        board[i] = '';
        return i;
      }
      board[i] = '';
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      board[i] = playerSymbol;
      if (checkWinner(playerSymbol)) {
        board[i] = '';
        return i;
      }
      board[i] = '';
    }
  }
  return getRandomMove();
}

function checkWinner(sym) {
  return winCombos.some(combo =>
    combo.every(index => board[index] === sym)
  );
}

function isTie() {
  return board.every(cell => cell !== '');
}

function endGame(msg) {
  gameOver = true;
  document.getElementById("result").textContent = msg;
  document.getElementById("restart").style.display = "block";
}

function restartGame() {
  board = Array(9).fill('');
  gameOver = false;
  document.getElementById("result").textContent = '';
  document.getElementById("restart").style.display = "none";
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).textContent = '';
  }
  document.getElementById("symbol-selection").style.display = "block";
}
