function ligthsOn() {
  document.querySelector('#lights').setAttribute('src', 'pic_bulbon.gif');
}

function ligthsOff() {
  document.querySelector('#lights').setAttribute('src', 'pic_bulboff.gif');
}

document.querySelector('p').style.fontSize = '50px';

document.querySelector('#no-data').innerHTML =
  'Paragraph No Data - Lorem ipsum dolor sit am Lorem ipsum dolor';

console.log('================================Testing');
//alert('Hello Sir Kervi!');
// function hide() {
//   document.querySelector('p').style.display = 'none';
// }

// function show() {
//   document.querySelector('p').style.display = 'block';
// }

function changeInput() {
  let input = document.querySelector('#my-input');
  //   if (input.value === '') {
  //     alert('Please enter a valid input');
  //   }
  console.log('change input', input.value);
}

// //   document.querySelector('#btn-hide').onclick = function(){

// //   }

// //   document.querySelector('#btn-hide').addEventListener('click', function(){

// //   })

// document.querySelector('p').style.fontSize = '50px';

// document.querySelector('#no-data').innerHTML =
//   'Paragraph No Data - Lorem ipsum dolor sit am Lorem ipsum dolor';

//alert('Page is Loading...');

//from api backend
const menus = ['Home ', '    About', 'Services    ', 'Contact', true, 12, 100, 'Projects'];

//document.querySelector('#array-demo').innerHTML = menus;

//   let a = 'String,asdasdm,asdasd,asdf';
//   let arrayA = a.split(',');
//built in methods of arrays
menus.sort();

//for loop para makuha ung mga data sa array
for (let i = 0; i < menus.length; i++) {
  //console.log(menus[i]);

  //check if the menu is string
  if (typeof menus[i] === 'string') {
    //create li element
    const liItem = document.createElement('li');
    //add class to li element
    liItem.classList.add('nav-item');

    //create a element
    const aItem = document.createElement('a');
    //add href attribute to a element
    aItem.setAttribute('href', '#');
    //add class to a element
    aItem.classList.add('nav-link');
    //add data/text to a element
    aItem.textContent = menus[i].trim();
    //nilagay si a sa li element
    liItem.appendChild(aItem);

    //kinuha si yung may id na navigation-menu then nilagay yung li-item
    //document.getElementById('navigation-menu').appendChild(liItem);
    document.querySelector('#navigation-menu').appendChild(liItem);
  }
}

let obj = { name: 'Hello', lastName: 'Kodego!' };

let newString = '';
for (let key in obj) {
  newString += obj[key] + ' ';
}

document.querySelector('#obj-value').innerHTML = `${newString}`;
