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

let shipsForm = document.querySelector('.shipsForm');

let body = document.querySelector('body')
shipsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let horisonRadio = document.getElementById('horisonRadio').checked;
    let verticalRadio = document.getElementById('verticalRadio').checked;
    console.log(horisonRadio)
    if (horisonRadio == true) {
      //  listenerForPlacingShipsHorisontal()
        body.className = ('red')
    }

    else if (verticalRadio == true) {
      //  listenerForPlacingShipsVertical()
        body.className = ('green')
    }
    
    // when click, toggle class and call different listener
    // do it with input, after validation -> lunch listener for placing ships
    // logic for calling different listener when placing ship on gameboard
})

shipsSetup();

let gameplay = document.querySelector('.gameplay');












