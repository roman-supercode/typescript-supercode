const isVowel = (char: string): boolean => {
  return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
};

let result = isVowel("p");
result = isVowel("a");
console.log(result);

export {};
