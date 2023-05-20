function orderPizza(callbackFunction) {
  console.log('Nag order si sir Kervi ng pizza kase dumating yung chicks nya');

  setTimeout(() => {
    callbackFunction(); //callback function
  }, 2000);
  console.log('Nag order si sir Kervi ng pizza kase dumating yung 2nd chicks nya');
}

function callYungFriends() {
  console.log('Notify other friends');
}

orderPizza(callYungFriends);
