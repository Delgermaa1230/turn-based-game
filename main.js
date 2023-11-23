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

        // Check for win or tie conditions (implement your own logic)

        // Switch to the next player
        currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';

        // Render the updated game board
        renderGame();
    }
}

// Initial render
renderGame();

