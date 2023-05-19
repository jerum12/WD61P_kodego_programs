const fruits = ['apples', 'banana', 'orange', 'strawberry'];
const vegetables = ['carrots', 'broccoli'];
//combine
const allFoods = [...fruits, ...vegetables];

console.log(allFoods);

let students = {
  firstName: 'John',
  age: 25,
  address: '123 Main St',
};
//destructuring students
let { firstName, age, address } = students;

console.log(firstName, age, address);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const [one, two, three, ...otherParams] = numbers;

console.log(one, two, three, otherParams);

//cloning
const origArrayOfStudents = [1, 2, 3];
const cloneArrayOfStudents = [...origArrayOfStudents];

cloneArrayOfStudents.splice(0, 1);

//object combination/merge
const obj1 = { a: '1', b: '2' };
const obj2 = { c: '3' };
const mergedObj = { ...obj1, ...obj2 };

console.log('Object1 ->', obj1);
console.log('Object2 ->', obj2);
console.log('Merged Object ->', mergedObj);
