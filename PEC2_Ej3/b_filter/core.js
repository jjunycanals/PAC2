function onlyEven(array) {
  return array.filter(x=>x % 2 == 0);
}

function onlyOneWord(array) {
  const regex = /^\w+$/;
  return array.filter((x) => regex.test(x));
}

function positiveRowsOnly(array) {
  var arr  = [];
  for (let i = 0; i < array.length; i++) {
    var row = array[i];
    var allpositive = row.every((valor) => Number.isInteger(valor) && valor > 0);
    if (allpositive) {
      arr.push(row);
    }
  }
  return arr;
}

function allSameVowels(array) {
  // const paraules = array.split(/\s+/);
  // const regex = /^[aeiou]+$/i;
  // return paraules.filter((paraula) => regex.test(paraula));
  const arr = [];
  function SameVowels(paraula) {
    let commontVowel = null;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const minusc = paraula.toLowerCase();
    for(const lletra of minusc) {
      if(vowels.includes(lletra)) {
        if(commontVowel === null)  {
          commontVowel = lletra;
        } else if (commontVowel !== lletra) {
          return false;
        }
      }
    }
    return commontVowel !== null;
  }
  for(const paraula of array){
    if(SameVowels(paraula)) {
      arr.push(paraula);
    }
  }
  return arr;

}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
