// La funció findOne() permet trobar dins de la llista si l'usuari existeix
// Reconstruim la funció findOne() perque utilitzi promeses 
const findOne = (list, { key, value }) => {
  // La funció retornarà una promesa amb una resolució o un cas negatiu segons pertoqui
  return new Promise((resolve, reject) => {
    // Mantenim el timeout de 2segons.
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      // Modifiquem perque retorni el resolve o el reject de la promesa. Això ens retorna un objecte en ambdos casos.
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000)
  })
};
// No es fa servir onSuccess i onError, es gestiona dins del then i catch
// const onSuccess = ({ name }) => console.log(`user: ${name}`);
// const onError = ({ msg }) => console.log(msg);

// Aquí es dona una const en format json amb les dades on hi ha la inofrmació. Simula la base de dades.
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];
// Comentem el codi de les funcions ja que no utlitizarem onSuccess i on Error
// findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
// findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

// Es reformula la forma de cridar la funció findOne perquè tinguin un then i un catch.
findOne(users, { key: 'name', value: 'Carlos' })
// Quan aquesta funció s'executi hi ha dins una promesa que pot tardar en retornar un valor. Utlitzem THEN per dir que quan acabi executi el que necessitem que faci.
// Mentre el programa va executant la resta de codi i va executant-ho de forma lineal.
  .then((data) => {
    console.log(`Resolución promesa, el usuario es: ${data['name']}`);
  })
  // Utlitzem CATCH per el cas que no ens torni un resultat favorable la promesa.
  .catch((err) => {
    console.log(`Error encontrado: ${err['msg']}`);
  });

findOne(users, { key: 'name', value: 'Fermin' })
  .then((data) => {
    console.log(`Resolución promesa, el usuario es: ${data['name']}`);
  })
  .catch((err) => {
    console.log(`Error encontrado: ${err['msg']}`);
  });