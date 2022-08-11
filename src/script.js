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

game[5].shipOn = true;
game[4].shipOn = true;
game[8].shipOn = true;
game[14].shipOn = true;

renderBoard()

let gameplay = document.querySelector('.gameplay');


// make loop for allSquers event listener for setting ships









