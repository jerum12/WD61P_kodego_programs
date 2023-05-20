const myFunction = () => {
  try {
    let b = null;
    //b.trim();
    let rand = Math.random();
    console.log(`random numbers`, rand);
    if (rand > 0.5) {
      console.log('The operation was successful');
    } else {
      console.log('The operation was unsuccessful');
    }
  } catch (e) {
    console.log(`Error: ${e}`);
  } finally {
    console.log(`The operation stopped successfully`);
  }
};
myFunction();
