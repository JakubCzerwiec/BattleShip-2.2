let gameplay = document.querySelector('.gameplay');



let renderBoard = () => {
    gameplay.innerHTML = '';
    for (let i = 0; i < game.length; i++) {
        let squere = document.createElement('div');
        squere.className = 'squere';
        gameplay.appendChild(squere);
    }
}

export {renderBoard}