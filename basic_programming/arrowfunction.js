function computeAverage(a, b) {
  console.log(arguments);
  return a + b;
}

const computeAverageArrow = (a, b) => a + b;

function computeAverage3() {
  console.log('regular function', arguments);
}

const computeAverage2 = (a, b) => {
  console.log('arrow function', arguments);
};

// computeAverage3();
// computeAverage2();

const obj = {
  name: 'Kodego',
  regularFunction: function () {
    console.log('regular function', this.name);
  },
  arrowFunction: () => {
    console.log('arrow function', this.name);
  },
};

obj.regularFunction();
obj.arrowFunction();
