import {renderBoard} from './renderBoard'

function listenerForPlacingShips () {
    let allSquers = document.querySelectorAll('.squere');
    for (let i = 0; i < allSquers.length; i++) {
        allSquers[i].addEventListener('click', () => {
            game[i].shipOn = true;
            renderBoard()
        })
    }
}

export {listenerForPlacingShips}
