import { greetEveryone } from "./uebung2";

function addToParticipants(name: string, participants: string[]): string[] {
  participants.push(name);
  return participants;
}

function removeFromParticipants(
  name: string,
  participants: string[]
): string[] {
  const index = participants.indexOf(name);
  if (index > -1) {
    participants.splice(index, 1);
  }
  return participants;
}

let participants = ["Marzio"];

participants = addToParticipants("Chad", participants);

console.log(greetEveryone("Hi", participants));

participants = removeFromParticipants("Marzio", participants);

console.log(greetEveryone("Hi", participants));

export {};
