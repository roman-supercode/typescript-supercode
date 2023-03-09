"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diceGame = (player1, player2) => {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let total = dice1 + dice2;
    let diff1 = Math.abs(player1 - total);
    let diff2 = Math.abs(player2 - total);
    if (diff1 < diff2) {
        return "Spieler 1 hat gewonnen!";
    }
    else if (diff2 < diff1) {
        return "Spieler 2 hat gewonnen!";
    }
    else {
        return "Unentschieden!";
    }
};
console.log(diceGame(9, 6));
//# sourceMappingURL=uebung10.js.map