let gameplay = document.querySelector('.gameplay');



let renderBoard = () => {
    gameplay.innerHTML = '';
    for (let i = 0; i < game.length; i++) {
        let squere = document.createElement('div');
        squere.className = 'squere';
        gameplay.appendChild(squere);
    }

    let allSquers = document.querySelectorAll('.squere');

    for (let i = 0; i < allSquers.length; i++) {
        if (game[i].shipOn == true) {
            allSquers[i].classList.add('shipOn')
        }
    }
}

export {renderBoard}