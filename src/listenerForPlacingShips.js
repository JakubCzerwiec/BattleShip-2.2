import {renderBoard} from './renderBoard'

let shipsInHarbour = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

let shipsCount = 0;



// create loop on shipsInHarbour to place ships and finish listening for placing ships when all are on board

function startGame () {
    alert('start!')
}

function listenerForPlacingShips () {

    let allSquers = document.querySelectorAll('.squere');

    for (let i = 0; i < allSquers.length; i++) {
        allSquers[i].addEventListener('click', () => {


            // ships length included
            // not piling up
            // not going outside of the board (check messeges)


            if (game[i].shipOn == true) alert('Do not pile up ships!')

            else {
                let shipLength = 0;

                    for (let j = 0; j < shipsInHarbour[shipsCount]; j++) {
                        
                        game[i+shipLength].shipOn = true;
                        // vertical +=10, horizontal ++
                        shipLength+=10

                        }
               }

               renderBoard()
               shipsCount++;
               if (shipsCount == shipsInHarbour.length) startGame ()



            
             }
        )
        
        
    }

    


}


export {listenerForPlacingShips}
