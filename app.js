const boardContainer = document.querySelector('.boardContainer')
const square = document.getElementsByClassName('boardCell')

const gameBoard = (() => {
    const boardContent = ['','','','','','','','','']
    const getBoardContent = () => {
        return boardContent
    }

    return {getBoardContent}

})();


const Player = (name, piece) => {
    const getName = () => {name}
    const gamePiece = () => {piece}
    const spaces = []

    return {getName, gamePiece}
}

const displayController = (() => {

    const initializeBoard = () => {
        const content = gameBoard.getBoardContent();
    
        for (i = 0; i < content.length; i++) {
            let boardCell = document.createElement('div')
            boardCell.classList.add('boardCell')
            boardCell.id = i
            boardContainer.appendChild(boardCell)
        }
    }

    const initializePlayers = () => {
        const playerX = Player('PlayerX', 'X')
        const playerO = Player('PlayerO', 'O')
        console.log(playerX.getName());
        console.log(playerO.getName());
    }

    const pieceListener = () => {
        let lastPiece = ''
        for(i = 0; i < square.length; i++) {
            square[i].addEventListener('click', e => {
                let clickedSquare = document.getElementById(e.target.id)
                if (lastPiece === '') {
                    clickedSquare.textContent = 'X'
                    lastPiece = 'X'
                } else if (lastPiece === 'X') {
                    clickedSquare.textContent = 'O'
                    lastPiece = 'O'
                } else {
                    clickedSquare.textContent = 'X'
                    lastPiece = 'X'
                }
            })
        }
    }

    return {initializeBoard, pieceListener, initializePlayers}
})();

displayController.initializeBoard();
displayController.pieceListener();
displayController.initializePlayers();