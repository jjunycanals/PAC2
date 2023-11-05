function multiplyBy10(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i]*10;
  }
  return array;
}

function shiftRight(array) {
  var arr = [];
  var size = array.length;
  for (let i = 0; i < size; i++) {
    if (i === size-1) {
      arr[0] = array.findLast((element) => element);
    } else {
      arr[i+1] = array[i];
    }
  }
  return arr;
}

function onlyVowels(array) {
  array = array.map(x => x.replace(/[^aeiou]/g, ''));
  return array;
}

function doubleMatrix(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      array[i][j] = array[i][j]*2;      
    }
  }
  return array;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
