import {listenerForPlacingShips} from './listenerForPlacingShips'

let gameplay = document.querySelector('.gameplay');



// Przerobić planszę żeby indexy w poziomie były ascii symbols++ a w pionie liczby ++

let renderBoard = () => {
    gameplay.innerHTML = '';
    for (let i = 0; i < game.length; i++) {
        let squere = document.createElement('div');
        squere.className = 'squere';

        let allSquers = document.querySelectorAll('.squere');

        for (let j = 0; j < allSquers.length; j++) {
            if (game[j].shipOn == true) {
                allSquers[j].classList.add('shipOn')
            }
        }

        gameplay.appendChild(squere);
    }
    listenerForPlacingShips()

}

export {renderBoard}