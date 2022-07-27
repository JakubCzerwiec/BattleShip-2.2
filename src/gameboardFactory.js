import { Ship } from './shipsFactory';

function GridBox (isHit, shipOn, index) {
    this.isHit = isHit
    this.shipOn = shipOn
    this.index = index
}

let game = []

let gameboardFactory = (size) => {
    for (let i = 0; i < size; i++) {
        game.push(new GridBox (false, false, i))
    }

}

export {gameboardFactory}
export {game}