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

renderBoard();

shipsSetup();

let gameplay = document.querySelector('.gameplay');












