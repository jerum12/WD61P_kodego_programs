const arrayData = [5, 10, 4, 3, 2, 12, 25, 35, 1, 100, 90];

function bbSort() {
  for (let i = 0; i < arrayData.length - 1; i++) {
    for (let j = 0; j < arrayData.length - i - 1; j++) {
      //   console.log('arrayData[j]:', arrayData[j]);
      //   console.log('arrayData[j + 1]:', arrayData[j + 1]);
      if (arrayData[j] > arrayData[j + 1]) {
        //console.log('-----------------------');
        const temp = arrayData[j];
        arrayData[j] = arrayData[j + 1];
        arrayData[j + 1] = temp;

        //console.log('-----------------------', arrayData);
      }
    }
  }
}
bbSort();
console.log(arrayData);
