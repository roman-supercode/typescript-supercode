"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetEveryone = void 0;
//! 1. greeting: string statt number
//! 2. Rückgabewert der Funktion string anstatt boolean
function greetEveryone(greeting, participants) {
    let message = "";
    participants.forEach((participant) => {
        if (!blacklistedParticipants.includes(participant)) {
            message += greeting + " " + participant + "\n";
        }
    });
    return message;
}
exports.greetEveryone = greetEveryone;
let welcomeText = "Willkommen im TypeScript-Kurs";
//! 3. participants: string[] statt number[]
let participants = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];
let blacklistedParticipants = ["Lars"];
console.log(greetEveryone(welcomeText, participants));
//# sourceMappingURL=uebung2.js.map