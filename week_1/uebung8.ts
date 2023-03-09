// Übung 5
const vowles = (arg1: string, arg2: number): string => {
  let vowels = "auieo";
  let result = "";

  for (let i = 0; i < arg1.length; i++) {
    let char = arg1.charAt(i).toLocaleLowerCase();
    if (vowels.includes(char)) {
      result += char.repeat(arg2);
    } else {
      result += char;
    }
  }
  return result;
};

let result = vowles("ente", 5);
console.log(result);

export {};
