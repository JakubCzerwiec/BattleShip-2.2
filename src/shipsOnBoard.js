import {Ship} from './shipsFactory';

let main = document.querySelector('main');

let shipsInHarbour = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]

function shipsSetup () {
    let shipsBox = document.createElement('div');
    shipsBox.className = 'shipsBox';

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
    orientationSwitch.className = 'orientationSwitch';
    orientation.appendChild(orientationSwitch);

    orientationSwitch.addEventListener('click', () => {
        // logic for changing index step when placing ship on gameboard
    })




}

export {shipsSetup}

