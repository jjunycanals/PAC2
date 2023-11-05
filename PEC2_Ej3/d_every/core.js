// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every((number) => number % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  var primertipo = typeof(input[0]);
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] !== primertipo) {
      return false;
    }    
  }
  return true;
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return false; // Comprovo si es una matriu valida (array de arrays).
  }

  for (const fila of input) {
    if (!Array.isArray(fila) || fila.length === 0) {
      return false; // Comprovo que cada element es un array.
    }

    for (const valor of fila) {
      if (typeof valor !== 'number' || valor <= 0) {
        return false; // Miro si cada elelment del array es un nombre més gran de 0.
      }
    }
  }
  return true;
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  var resultat = input.map((lletra) => {
    return (lletra.split('').map((char) => {
      return char.match(/[aeiou]/ig)
    })).join('')
  });

  for (const vocal of resultat) {
    var lletres = vocal.split('');
    for (let i = 0; i < lletres.length; i++) {
      if (lletres[0]!==lletres[i]) {
        return false;
      }     
    }
  }
  return true;
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
