const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => randomNumbers(resolve, reject), 3000);
});

function randomNumbers(resolve, reject) {
  let rand = Math.random();
  console.log(`random numbers`, rand);
  if (rand > 0.5) {
    resolve('The operation was successful');
  } else {
    reject('The operation was unsuccessful');
  }
}

myPromise
  .then((result) => {
    console.log('success', result);
  })
  .catch((err) => {
    console.log('failed', err);
  });
