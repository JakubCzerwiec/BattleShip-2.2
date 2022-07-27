let gameplay = document.querySelector('.gameplay');



let renderBoard = () => {
    for (let i = 0; i < game.length; i++) {
        let squere = document.createElement('div');
        squere.className = 'squere';
        gameplay.appendChild(squere);
    }
}

export {renderBoard}