const data = require('./data');

function entryCalculator(entrants) {
  var resultat = 0;
  if (arguments.length === 0) {
    return 0;
  } else if (typeof entrants === 'object' && Object.keys(entrants).length === 0) {
    return 0;
  } else {
    let keys = Object.keys(entrants);
    let nombres = Object.values(entrants);
    let datakeys = Object.keys(data.prices);
    let prices = Object.values(data.prices);

    for (let i = 0; i < datakeys.length; i++) {
      for (let j = 0; j < keys.length; j++) {
        if (datakeys[i] === keys[j]) {
          resultat += prices[i]*nombres[j];
        }
      }
    }
    return resultat;
  }
}

function schedule(dayName) {
  let days = Object.keys(data.hours);
  let openclose = Object.values(data.hours);
  var horaris = openclose.map(function(obj) {
    var hores = [];
    if (obj.open === 0 && obj.close === 0) {
      hores = 'CLOSED';
    } else {
      hores = `Open from ${obj.open}am until ${obj.close-12}pm`;
    }
    return hores;
  });
  if (dayName === undefined) {
    var text = {};
  
    for (let i = 0; i < days.length; i++) {
        text[days[i]] = horaris[i];
    }

    return text;
  } else {
    var text2 = {};
    for (let j = 0; j < days.length; j++) {
      if (dayName === days[j]) {
        text2[days[j]] = horaris[j];
      }
    }
    return text2;
  };
}

function animalCount(species) {
  let animalsobject = Object.values(data.animals);
  
  if (species === undefined) {
    var res = {};
    var animalnames = animalsobject.map(({ name, residents }) => 
      ({[name] : residents.length})
    );
    animalnames.forEach((animal) => {
      const key = Object.keys(animal)[0];
      const value = animal[key];
      res[key] = value;
    });
    return res;
  } else {
    var res2 = {};
    var animalnames = animalsobject.map(({ name, residents }) => 
      ({[name] : residents.length})
    );
    animalnames.forEach((animal) => {
      const key = Object.keys(animal)[0];
      const value = animal[key];
      if (key === species) {
        res2 = value;
      }
      
    });
    return res2;
  };  
}

function animalMap(options) {
  let animalsobject = Object.values(data.animals);
  if (options === undefined) {
    var res = {};
    var animalnames = animalsobject.map(({ location, name }) => 
      ({ [location] : name })
    );
    // return animalnames;
    animalnames.forEach((animalObj) => {
      for (const direction in animalObj) {
        if (!res[direction]) {
          res[direction] = [];
        }
        res[direction].push(animalObj[direction]);
      }
    });
    return res;
  } else {
    var res2 = {};
    var animalnames = animalsobject.map(({ name, residents }) => 
      ({[name] : residents})
    );
    animalnames.forEach((animal) => {
      const key = Object.keys(animal)[0];
      const value = animal[key];
      if (key === species) {
        res2 = value;
      }
      
    });
    return res2;
  };
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
