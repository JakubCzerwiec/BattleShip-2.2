import {renderBoard} from './renderBoard'
import {Ship} from './shipsFactory';
import { game } from './gameboardFactory';

let shipsInHarbour = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

let shipsCount = 0;


// in function parameters: condition for not going outside, coeficient for ships length (vertical +=10, horizontal ++)

function startGame () {
    alert('start!')
}

function listenerForPlacingShips (conditionCalc, condition, coeficient) {

    let allSquers = document.querySelectorAll('.squere');

    for (let i = 0; i < allSquers.length; i++) {
        allSquers[i].addEventListener('click', () => {
            

            let coordinatesX = [];
            let coordinatesY = [];

            // try with variable as a function and two different function, triggered only one by main function parameter

            let conditionCalcV = game[i].indexY + shipsInHarbour[shipsCount];
            let conditionCalcH = game[i].indexX.charCodeAt(0) + shipsInHarbour[shipsCount];

            // condition to do not go outside the board

                if (game[i].indexY + shipsInHarbour[shipsCount] >= condition) {
                    alert('ship will go outside')
                }

                // condition to do not pile up ships
                else if (game[i].shipOn == true) {
                    alert('Do not pile up ships!')
                } 
              

            // condition to ships dont touch each other

            
            // condition to ship dont cross other

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

                            shipLength += coeficient;
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
