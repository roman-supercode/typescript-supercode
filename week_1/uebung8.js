"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Übung 5
const vowles = (arg1, arg2) => {
    let vowels = "auieo";
    let result = "";
    for (let i = 0; i < arg1.length; i++) {
        let char = arg1.charAt(i).toLocaleLowerCase();
        if (vowels.includes(char)) {
            result += char.repeat(arg2);
        }
        else {
            result += char;
        }
    }
    return result;
};
let result = vowles("ente", 5);
console.log(result);
//# sourceMappingURL=uebung8.js.map