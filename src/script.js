import _ from 'lodash';
import css from './style.css';
import { Ship } from './shipsFactory';
import {gameboardFactory} from './gameboardFactory'
import {game} from './gameboardFactory';
import {renderBoard} from './renderBoard';


window['game'] = game;

gameboardFactory(100);

let gameplay = document.querySelector('.gameplay');



game[1].shipOn = true

renderBoard()

let allSquers = document.querySelectorAll('.squere');

let bums = () => {
    for (let i = 0; i < allSquers.length; i++) {
        if (game[i].shipOn == true) {
            allSquers[i].classList.add('shipOn')
        }
    }

renderBoard()
}
bums()