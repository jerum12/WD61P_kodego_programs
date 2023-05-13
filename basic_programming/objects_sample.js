// const person = new Person('John', 25, 'QC');
// person.showDetails();
// const person3 = { name: ''}
// const p = Object.create(person3);

const person2 = { name: 'John ', age: 25, address: 'QC', nationality: 'Filipino' };

const objError = {};

// console.log(person2.name);
// console.log(person2['age']);

for (let key in person2) {
  console.log(person2[key]);
}

person2.name = 'Filipino';
console.log(person2);

objError.inputName = 'username';
objError.message = 'Mandatory username';

const objError2 = {
  inputName: 'username',
  message: 'Mandatory username',
  age: 15,
  today: new Date(),
  showDetails: function () {
    return this.inputName + ' is required = ' + this.message;
  },
  address: [
    {
      name: {
        a: '1',
        b: '2',
      },
      location: '',
    },
    {
      name: {
        a: '3',
        b: '4',
      },
      location: '',
    },
  ],
};

let ad = objError2.address;

//console.log(ad);
for (let i = 0; i < ad.length; i++) {
  console.log(ad[i].name.a);
}

console.log(objError2.showDetails());

objError2.validAge = function () {
  if (this.age > 18) return 'adult';
  else return 'minor';
};

console.log(objError2);

console.log(objError2.validAge());

console.log(JSON.stringify(objError2));

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let zz = JSON.stringify(arr1);

//zz.substring(zz.indexOf('message'));

for (let key in objError2) {
  console.log(key, objError2[key]);
}

function aaa2(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

const b = new aaa2('', 12, '');

const asdasd = new String('');
const dfdfg = '';
