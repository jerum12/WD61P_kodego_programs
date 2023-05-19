const arrayData = [1, 5, 21, 100, 30, 499, 1234, 50, 90, 99, 88];
const targetData = 90;

console.log(arrayData.sort(compareFunction));

function compareFunction(a, b) {
  return a - b;
}

const result = linearSearch(arrayData, targetData);
console.log(result);
function linearSearch(arrayData, targetData) {
  for (let i = 0; i < arrayData.length; i++) {
    if (arrayData[i] === targetData) return i;
  }

  return -1;
}

console.log(arrayData.indexOf(targetData));
let stringData = 'Hello Kodego';

console.log(stringData.match('Kodego'));
