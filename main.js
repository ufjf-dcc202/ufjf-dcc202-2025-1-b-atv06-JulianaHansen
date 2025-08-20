const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
const message = document.getElementById('message');

function updateBoard() {
    board.innerHTML = '';
    // 
    checkWin();
}

function handleClick(event) {
}

function checkWin() {
    //verifica
    message.textContent = 'Você venceu!';
}

function resetGame() {
    //reseta
    updateBoard();
}
resetButton.addEventListener('click', resetGame);

updateBoard();