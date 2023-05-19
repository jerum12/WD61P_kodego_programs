const greeting = (username, address = 'QC') => {
  console.log(`Hello ${username} from ${address}`);
};

const sum = (a, b = 0) => {
  let sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
};

//greeting('Kodego', 'Marikina');
sum(1);
