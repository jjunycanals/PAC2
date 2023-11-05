// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  for (const element of input) {
    if (typeof element === 'number' && element > 10) {
      return true; // Si cada numero es més gran que 10, retorno true.
    }
  }
  return false; // If no number is greater than 10, return false.
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  for (const element of input) {
    if (typeof element === 'string' && element.length > 10) {
      return true; // Si cada string es més gran que 10 caracteres, retorno true.
    }
  }
  return false;
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  for (const row of input) {
    if (!Array.isArray(row) || row.length === 0) {
      return false; // Reviso si cada element es un array
    }

    for (const element of row) {
      if (element === true) {
        return true; // Si algun element es true, retorno true.
      }
    }
  }
  return false;
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  for (let i = 0; i < input.length; i++) {
    const paraula = input[i].split(' ');
    var lost = paraula.some((x) => x.toLowerCase() === 'lost');
    if (lost !== false){
      return true;
    }
  }
  return false;
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
