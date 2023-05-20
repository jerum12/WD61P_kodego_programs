// let s = 18;
// let adult = s >= 18 ? (s >= 60 ? (s >= 100 ? 'more than senior' : 'senior') : 'adult') : 'teen';

// // if (s >= 18) {
// //   adult = true;
// // } else {
// //   adult = false;
// // }

// let obj = {};

// console.log(obj?.address?.city);

let name2 = '';
let address = null;
let age = undefined;

address.toUpperCase();
//COALESCING ??
let result = name2 ?? 'default value for name2';
let result2 = address ?? 'default value for address';
let result3 = age ?? 'default value for age';

console.log('result-name2', result);
console.log('result-address', result2.toUpperCase());
console.log('result-age', result3);
