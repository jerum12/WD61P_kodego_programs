const sum = (...number) => {
  // number.reduce((prev,current) => prev + current);
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    result += number[i];
    console.log(number[i]);
  }
  return result;
};

sum(1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 'asd', 12312, true, {
  name: 'asd',
});
