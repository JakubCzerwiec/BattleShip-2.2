import { Ship } from './shipsFactory';

function GridBox (isHit, shipOn, indexX, indexY, index) {
    this.isHit = isHit
    this.shipOn = shipOn
    this.indexX = indexX
    this.indexY = indexY
    this.index = index
}

let game = []


// ${String.fromCharCode([i])}


let gameboardFactory = (size) => {

    let x = 0;
    let y = 0;

    let characterCode;

    for (let i = 0; i < size; i++) {
        
        x++;


        characterCode = String.fromCharCode([64+x])
         
         
        if (characterCode == 'A') y++;

        game.push(new GridBox (false, false, characterCode, y, i))

        

        if (x == 10) x = 0;


    }

}

export {gameboardFactory}
export {game}