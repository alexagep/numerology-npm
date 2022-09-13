'use strict'
import { calculateNumerology } from "./calculator.js";

let wordList = {
    1: ['a', 'i', 'j', 'q', 'y'],
    2: ['b', 'k', 'r'],
    3: ['c', 'g', 'l', 's'],
    4: ['d', 'm', 't'],
    5: ['e', 'h', 'n'],
    6: ['u', 'v', 'w', 'x'],
    7: ['o', 'z'],
    8: ['f', 'p'],
}


export function chaldeanNumerology(name) {
    name = name.toLowerCase().split(' ').join('').split('');
    let sum = 0;
    name.map((word) => {
        for (let count = 0; count < 8; count++) {
            let row = Object.values(wordList)[count]
            if (row.includes(word)) {
                sum += (count + 1);
            }
        }
    })
    return calculateNumerology(sum)
}