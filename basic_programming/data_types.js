// //Number
// var x = 10;

// // String
// var x = '10';
// var z = 'String ito';
// var zz = `another string ito`;

// //Boolean
// var x = false;

// //Object
// var objPerson = {
//   firstName: 'John',
//   age: 34,
//   address: '',
//   gender: '',
// };

// let asd;

// let y = 12;

// y = true;

// let abc = 1;
// let def = 2;

// console.log(abc + def);

// let _a = 5;
// let _b = 6;
// let _c = 5;

// console.log(_a === _c);

// console.log(typeof _a);

// var AbCdEf = 11;

// var fistNameBasis = 'John';
// var fistNameBasis = 'Kodego';

// function sum(x, y) {
//   let azz = '';
//   //return x + y;
//   fistNameBasis = '';
//   let azz2 = '';
//   //return x + y;
//   fistNameBasis = '';
//   let azz3 = '';
//   //return x + y;
//   fistNameBasis = '';
// }

// console.log(azz);

function printData() {
  let x = 12;
  let y = 13;
  var zzz = '';
  const xyz = 25;
  var zzz = 30;
  const jkfdhg = 'kahit anong value';
  console.log(x + y);

  if (true) {
    let z = 100;
    //xyz = 111;
    // const jkfdhg = 'bagong value';
    //console.log(jkfdhg);
  }
  //z;
  //console.log(x + y + z);
  //console.log(xyz);
}

printData();
const obj = true;

let xxx = 'asd';
xxx = 12;

const arrayData = [];

var studentsArray = [];

var age,
  address = '';
var name = '';
name = 'update Here';

function printName() {
  var name = 'abc';
}

printName();
console.log(name);

var x = '';
function sum(x, y, z) {
  return x + y + z;
}
function difference(x, y, z) {
  return x - y - z;
}

function computeAverageBy5(x, y, z) {
  return ((x + y + z) / 2) * 5;
}

function checkIfEven(x) {
  return x % 2 == 0;
}

var sumOutput = sum(5, 3, 1);
//console.log(sumOutput);

var differenceOutput = difference(5, 3, 1);
//console.log(differenceOutput);

var computeAverageBy5Output = computeAverageBy5(5, 3, 1);
//console.log(computeAverageBy5Output);

var checkOutput = checkIfEven(4);
if (checkOutput) {
  console.log('The number is even');
} else {
  console.log('The number is odd');
}

let count = 5;
// count++;
// count++;
// count++;
// console.log(count);
// count--;
// console.log(count);
// ++count;
// ++count;
// console.log(count);
//  5 <  5
// for (var i = 0; i < count; i++) {
//   console.log('i--', i);
// }

// let x = 10,
//   y = 5;

// x += y; //x = x + y;
// console.log(x);

// console.log(1 == true); //true
// console.log(1 === true); //false

// if (cond1 && cond2 && cond3 && cond4 && cond5) {
//   //para mag execute ito
//   //save sa database
// } else {
//   //
// }

// if (cond1 || cond2 || cond3 || cond4 || cond5) {
//   //para mag execute ito
//   //save sa database
// } else {
//   //
// }

// if (!true) {
// }

// if ((cond1 || cond2) && (cond3 || cond4) && cond5) {
//   //para mag execute ito
//   //save sa database
// } else {
//   //
// }
let single = 'kervi';
let ready = 'hindi pa';

let kervi = single === 'kervi' && ready === 'naka move on' ? 'pwedeng makipag date' : 'bawal';

console.log(kervi);

if (kervi === 'pwedeng makipag date') {
  console.log('May ipapa date si mam Lea');
} else if (kervi === 'pwde pero di pa naka move on') {
  console.log('Pede makipag friends pero bawal jowa');
} else if (kervi === 'bawa') {
  console.log('Bawal na forever!');
}
let day = 'Monday';
//let x = 'Monday';
// function changeX(x) {
//   if (true) {
//     x = 'Tuesday';
//   }
// }

switch (day) {
  case 'Monday':
    console.log('Monday Toaday');
    break;
  case 'Tuesday':
    console.log('Monday Toaday');
    break;

  case 'Monday':
    console.log('Monday Toaday');
    break;
  case 'Monday':
    console.log('Monday Toaday');
    break;
  case 'Monday':
    console.log('Monday Toaday');
    break;
  case 'Monday':
    console.log('Monday Toaday');
    break;
  case 'Monday':
    console.log('Monday Toaday');
    break;
  case 'Monday':
    console.log('Monday Toaday');
    break;
  default:
    break;
}
const arrayStudents = ['Kervi', 'Lea', 'JohnSkyle', 'Nicole', 'Vina', 'allen', 'Merriss'];

for (let i = 0; i < arrayStudents.length; i++) {
  console.log('i--', arrayStudents[i]);
}

let jan_meris = '';

while (jan_meris !== 'bati ng jowa') {
  console.log('suyuin mo sir');

  for (let j = 0; j < 5; j++) {
    console.log(j);
    if (j === 4) {
      jan_meris = 'bati ng jowa';
    }
  }
}
let a = 0;

do {
  console.log('do-while', a);
  a++;
} while (a < 5);
