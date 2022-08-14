import {renderBoard} from './renderBoard'
import {Ship} from './shipsFactory';

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

            let conditionY = game[i].indexY + shipsInHarbour[shipsCount]
            console.log(conditionY)
            // TO DO!!!
            // not going outside of the board (check messeges)

            let coordinatesX = [];
            let coordinatesY = [];

           // let coordinateXcode = game[i].indexX.charCodeAt(0)

            


            // condition to do not go outside the board
            if (conditionY >= 12) {
                alert('ship will go outside')
            }

            // condition to do not pile up ships
            else if (game[i].shipOn == true) {
                alert('Do not pile up ships!')
             } 
              

            // condition to ships dont touch each other

            
            // condition to ship dont cross other


            
            // 

            //for horizontal
            // else if (coordinateXcode + shipsInHarbour[shipsCount] > 73) {
            //     alert('ship will go outside')
            // }

            // for vertical



            // placing ships
            else   {
                let shipLength = 0;
                let coordinateX;
                let coordinateY;
                

                    for (let j = 0; j < shipsInHarbour[shipsCount]; j++) {
                        
                        game[i+shipLength].shipOn = true;
                        // vertical +=10, horizontal ++
                        

                        coordinateX = game[i+shipLength].indexX;
                        coordinatesX.push(coordinateX);

                        coordinateY = game[i+shipLength-1].indexY;
                        coordinatesY.push(coordinateY);

                        shipLength+=10;
                        }

                                       // creating and pushing new ship object into ships arr
               let ship = new Ship (shipsInHarbour[shipsCount], coordinatesX, coordinatesY);

               ships.push(ship);

               renderBoard()
               shipsCount++;
               }

               
               console.log(shipsCount)

               // when all ships set, start game
               if (shipsCount == shipsInHarbour.length) startGame ()

             }
        )
        
        
    }

    


}


export {listenerForPlacingShips}
