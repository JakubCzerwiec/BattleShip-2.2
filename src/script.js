import _ from 'lodash';
import { Ship } from './shipsFactory';
import {gameboardFactory} from './gameboardFactory'
import {game} from './gameboardFactory'
import {renderBoard} from './renderBoard'


window['game'] = game;

gameboardFactory(100);

let gameplay = document.querySelector('.gameplay');



// let renderBoard = () => {
//     for (let i = 0; i < game.length; i++) {
//         let squere = document.createElement('div');
//         squere.className = 'squere';
//         gameplay.appendChild(squere);
//     }
// }

game[1].shipOn = true

renderBoard()

let allSquers = document.querySelectorAll('.squere');

let bums = () => {
    for (let i = 0; i < allSquers.length; i++) {
        if (game[i].shipOn == true) {
            allSquers[i].classList.add('shipOn')
        }
    }

renderBoard()
}
bums()