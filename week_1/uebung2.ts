//! 1. greeting: string statt number
//! 2. Rückgabewert der Funktion string anstatt boolean
function greetEveryone(greeting: string, participants: string[]): string {
  let message = "";
  participants.forEach((participant) => {
    if (!blacklistedParticipants.includes(participant)) {
      message += greeting + " " + participant + "\n";
    }
  });
  return message;
}

let welcomeText: string = "Willkommen im TypeScript-Kurs";

//! 3. participants: string[] statt number[]
let participants: string[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];
let blacklistedParticipants: string[] = ["Lars"];

console.log(greetEveryone(welcomeText, participants));

export { greetEveryone };
