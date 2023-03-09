const chain = (arg: string, count: number): string => {
  return arg.repeat(count);
};

const result = chain("test", 3);
console.log(result);

export {};
