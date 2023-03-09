"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uebung2_1 = require("./uebung2");
function addToParticipants(name, participants) {
    participants.push(name);
    return participants;
}
function removeFromParticipants(name, participants) {
    const index = participants.indexOf(name);
    if (index > -1) {
        participants.splice(index, 1);
    }
    return participants;
}
let participants = ["Marzio"];
participants = addToParticipants("Chad", participants);
console.log((0, uebung2_1.greetEveryone)("Hi", participants));
participants = removeFromParticipants("Marzio", participants);
console.log((0, uebung2_1.greetEveryone)("Hi", participants));
//# sourceMappingURL=uebung3.js.map