import _ from 'lodash';
import css from './style.css';
import { Ship } from './shipsFactory';
import {gameboardFactory} from './gameboardFactory'
import {game} from './gameboardFactory';
import {renderBoard} from './renderBoard';
import {shipsSetup} from './shipsOnBoard';
import {listenerForPlacingShipsVertical} from './listenerForPlacingShipsVertical'


window['game'] = game;

let ships = [];
window['ships'] = ships;

gameboardFactory(100);

renderBoard();



shipsSetup();


// !!!!!!!!!!!!!!!!!!!!!!!!! one shipsInHarbour and ships Count or one funtion for placing v and h, just with different arguments!!!!!!!!!!!!!!!!!

let gameplay = document.querySelector('.gameplay');












