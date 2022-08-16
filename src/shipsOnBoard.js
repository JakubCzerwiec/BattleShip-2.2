import { game } from './gameboardFactory';
import {Ship} from './shipsFactory';
import {renderBoard} from './renderBoard'

// import {listenerForPlacingShipsVertical} from './listenerForPlacingShipsVertical';
// import {listenerForPlacingShipsHorisontal} from './listenerForPlacingShipsHorisontal';

import {listenerForPlacingShips} from './listenerForPlacingShips'

let main = document.querySelector('main');


let shipsForm = document.querySelector('.shipsForm');

let body = document.querySelector('body')

let conditionCalcV = 'indexY';
let conditionCalcH = 'indexX.charCodeAt(0)';
// let conditionCalcV = game[i].indexY + shipsInHarbour[shipsCount];
// let conditionCalcH = game[i].indexX.charCodeAt(0) + shipsInHarbour[shipsCount];

let conditionV = 12;
let conditionH = 75;

let coeficientV = 10;
let coeficientH = 1;

function shipsSetup () {


    shipsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let horisonRadio = document.getElementById('horisonRadio').checked;
        let verticalRadio = document.getElementById('verticalRadio').checked;
        console.log(horisonRadio)

         if (verticalRadio == true && horisonRadio == false) {
            listenerForPlacingShips(conditionCalcV, conditionV, coeficientV)
            body.className = ('blue')
        }

        else if (horisonRadio == true && verticalRadio == false) {
            listenerForPlacingShips(conditionCalcH, conditionH, coeficientH)
            body.className = ('red')
        }
    

        
        // when click, toggle class and call different listener
        // do it with input, after validation -> lunch listener for placing ships
        // logic for calling different listener when placing ship on gameboard
    }
    )




}

export {shipsSetup}

