const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
const message = document.getElementById('message');

function updateBoard() {
    board.innerHTML = '';
    
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            if ((i < 2 || i > 4) && (j < 2 || j > 4)) {
                cell.classList.add('invalid');
            } else {
                const circle = document.createElement('div');
                circle.classList.add('circle');
                if (!(i === 3 && j === 3)) {
                    circle.classList.add('piece');
                }
                cell.appendChild(circle);
            }
            board.appendChild(cell);
        }
    }

    //checkWin();
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