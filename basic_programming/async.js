async function getData() {
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      let rand = Math.random();
      console.log(`random numbers`, rand);
      if (rand > 0.5) {
        resolve('The operation was successful');
      } else {
        reject('The operation was unsuccessful');
      }
    }, 3000);
  });

  console.log('response', response);
}

getData();
