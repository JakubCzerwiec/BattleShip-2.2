import { game } from './gameboardFactory';
import {Ship} from './shipsFactory';
import {renderBoard} from './renderBoard'

let main = document.querySelector('main');

let shipsInHarbour = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]

function shipsSetup () {
    let shipsBox = document.createElement('div');
    shipsBox.className = 'shipsBox';


    // Box to pop up before placing ship to tell size and ask about orientation
    main.appendChild(shipsBox);

    let shipName = document.createElement('div');
    shipName.className = 'shipName';
    shipsBox.appendChild(shipName);
    shipsBox.innerText = `Now let's put ${shipsInHarbour[0]} on the gameboard!`;

    let orientation = document.createElement('div');
    orientation.className = 'orientation';
    shipsBox.appendChild(orientation);
    orientation.innerText = 'Orientation of the ship?';

    let orientationSwitch = document.createElement('div');
    orientationSwitch.className = 'orientationSwitchH';
    orientation.appendChild(orientationSwitch);

    orientationSwitch.addEventListener('click', () => {
        // when click, toggle class and call different listener
        // logic for calling different listener when placing ship on gameboard
    })

    let allSquers = document.querySelectorAll('.squere');

    for (let i = 0; i < allSquers.length; i++) {
        allSquers[i].addEventListener('click', () => {
            game[i].shipOn == true;
            renderBoard()
        })
    }


}

export {shipsSetup}

