const würfel = (arg: number): number => {
  return Math.floor(Math.random() * arg) + 1;
};

console.log(würfel(6));

export {};
