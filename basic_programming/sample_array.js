let arrayData = ['1', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let arrayData2 = new Array('1', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

let age = arrayData[6];

const arrayStudents = ['Kervi', 'Lea', 'JohnSkyle', 'Nicole', 'Vina', 'allen', 'Merriss'];

const arrayStudents2 = ['Kervi', 'Lea', 'JohnSkyle', 'Nicole', 'Vina', 'allen', 'Merriss'];

// for (let i = 0; i < arrayStudents.length; i++) {
//   console.log('i--', arrayStudents[i]);
// }

// for (let i in arrayStudents) {
//   console.log('i--', arrayStudents[i]);
// }
let x = '          andria                    ';

if (18 <= 25 <= 30) {
  console.log('asdasd');
}

// console.log(arrayStudents);
// arrayStudents.push(x.trim());
// console.log(arrayStudents);
// arrayStudents.splice(0, 1);
// console.log(arrayStudents);

// arrayStudents2.forEach(getAllNames);

// function getAllNames(x) {
//   console.log(x);
// }
// console.log(Array.isArray(arrayStudents));
// console.log(Array.isArray(x));

//Map
// let val = arrayStudents2
//   .map(function (arrayStudent) {
//     console.log(arrayStudent);
//   })
//   .sort(function (a, b) {
//     return;
//   })
//   .join();

const num = [1, 2, 3, 4, 5];

const sum = num.reduce(function (prev, curr) {
  return prev + curr;
});
console.log(sum);
console.log(num.toString());

const artists = ['Kervi', 'Lea', 'JohnSkyle', 'Nicole', 'Vina', 'allen', 'Merriss'];

artists.filter(returnAllGirls);

function returnAllGirls(artist) {
  return artist !== 'Kervi' && artist !== 'JohnSkyle' && artist !== 'Nicole';
}
