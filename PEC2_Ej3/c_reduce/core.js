function sum(array) {
  const suma = array.reduce((acumulador, valor) => acumulador+valor, 0);
  return suma;
}

function productAll(array) {
  const prod = array.flat().reduce((acumulador, valor) => acumulador*valor);
  return prod;
}

function objectify(array) {
  var obj = {};
  for (const subarray of array) {
    if (subarray.length >= 2) {
      const key = subarray[0];
      const value = subarray[1];
      obj[key] = value;
    }
  }
  return obj;
}

function luckyNumbers(array) {
  var array1 = [];
  for (let i = 0; i < array.length-1; i++) {
      array1[i] = array[i];
      var last = array[i+1];
  }
  var text = array1.join(', ');
  return `Your lucky numbers are: ${text}, and ${last}`;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
