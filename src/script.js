import _ from 'lodash';
import css from './style.css';
import { Ship } from './shipsFactory';
import {gameboardFactory} from './gameboardFactory'
import {game} from './gameboardFactory';
import {renderBoard} from './renderBoard';
import {shipsSetup} from './shipsOnBoard';


window['game'] = game;

let ships = [];
window['ships'] = ships;

gameboardFactory(100);

renderBoard()

let gameplay = document.querySelector('.gameplay');

let allSquers = document.querySelectorAll('.squere');

// make loop for allSquers event listener for setting ships


// allSquers.forEach((element, index) => {
//     element.addEventListener('click', () => {
//         game[index].shipOn = true;
//         renderBoard()
//     })
// })




