import { game } from './gameboardFactory';
import {Ship} from './shipsFactory';
import {renderBoard} from './renderBoard'

import {listenerForPlacingShipsVertical} from './listenerForPlacingShipsVertical';
import {listenerForPlacingShipsHorisontal} from './listenerForPlacingShipsHorisontal';

let main = document.querySelector('main');

let shipsInHarbour = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

let shipsForm = document.querySelector('.shipsForm');

let body = document.querySelector('body')

function shipsSetup () {


    shipsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // let horisonRadio = document.getElementById('horisonRadio').value;
        // let verticalRadio = document.getElementById('verticalRadio').value;
        if (shipsForm.value == 'horison') {
            listenerForPlacingShipsHorisontal()
            body.className = ('red')
        }

        else if (shipsForm.value == 'vertical') {
            listenerForPlacingShipsVertical()
            body.className = ('green')
        }
        
        // when click, toggle class and call different listener
        // do it with input, after validation -> lunch listener for placing ships
        // logic for calling different listener when placing ship on gameboard
    })

    // let allSquers = document.querySelectorAll('.squere');

    // for (let i = 0; i < allSquers.length; i++) {
    //     allSquers[i].addEventListener('click', () => {
    //         game[i].shipOn == true;
    //         renderBoard()
    //     })
    // }


}

export {shipsSetup}

