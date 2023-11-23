// Sample JavaScript code

// Game state
let currentPlayer = 'Player 1';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Function to render the game board
function renderGame() {
    const gameBoardElement = document.getElementById('game-board');
    gameBoardElement.innerHTML = '';

    // Loop through the game board and create HTML elements
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = gameBoard[i][j];
            cell.addEventListener('click', () => handleCellClick(i, j));

            gameBoardElement.appendChild(cell);
        }
    }

    // Update player information
    const playerInfoElement = document.getElementById('player-info');
    playerInfoElement.textContent = `Current Player: ${currentPlayer}`;
}

// Function to handle cell click
function handleCellClick(row, col) {
    // Check if the cell is empty
    if (gameBoard[row][col] === '') {
        // Update the cell with the current player's symbol
        gameBoard[row][col] = currentPlayer;

        // Check for win conditions
        if (checkWin()) {
            alert(`${currentPlayer} wins! Restarting the game.`);
            resetGame();
        } else {
            // Switch to the next player
            currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';

            // Render the updated game board
            renderGame();
        }
    }

    // Check for a tie and restart the game
    if (isTie()) {
        alert('It\'s a tie! Restarting the game.');
        resetGame();
    }
}

// Function to check for a tie
function isTie() {
    for (let row of gameBoard) {
        if (row.includes('')) {
            return false; // There is an empty cell, game continues
        }
    }
    return true; // All cells are filled, it's a tie
}

// Function to check for a win
function checkWin() {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2]) {
            return true; // Row win
        }
        if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[0][i] === gameBoard[2][i]) {
            return true; // Column win
        }
    }

    // Check diagonals
    if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
        return true; // Diagonal win (top-left to bottom-right)
    }
    if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
        return true; // Diagonal win (top-right to bottom-left)
    }

    return false; // No win
}

// Function to reset the game
function resetGame() {
    // Reset game state
    currentPlayer = 'Player 1';
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // Render the initial game state
    renderGame();
}

// Initial render
renderGame();


