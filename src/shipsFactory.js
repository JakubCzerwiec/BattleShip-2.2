function Ship (size, coordinatesX, coordinatesY) {
    this.size = size
    this.model = []
    this.coordinatesX = coordinatesX
    this.coordinatesY = coordinatesY

    for (let i = 0 ; i < this.size; i++) {
        this.model.push(0)
    }

    let hit = () => {

    }

    let isSunk = () => {

    }
}


export  {Ship};
