// La funció findOne() seguira utlitizant promeses. Utilitzarem async/await al cridar la funció findOne()
const findOne = (list, { key, value }) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const element = list.find(element => element[key] === value);
        // Modifiquem perque retorni el resolve o el reject de la promesa. Això ens retorna un objecte en ambdos casos.
        element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
      }, 2000)
    })
  } catch (error) {
    console.log(error);
  }
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
// Comentem el codi de les funcions ja que no utlitizarem onSuccess i onError
// findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
// findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

// Creem una funció asincrona que crida la funció findOne() i farem us del Async/await
async function llamadaFindOne () {
  // Posem un try/catch per fer us dels èxits/errors, com fem 2 casos posaré dos try/catch. Un per cada promesa.
  try {  
    // Aquí cridem a la funció findOne() i posem un await davant ja que es una promesa que tardarà en retornar un resultat
    const resultado = await findOne(users, { key: 'name', value: 'Carlos' });
    // Quan la promesa retorna un resolve, l'imprimirem amb aquest console.log
    console.log(`Resolución promesa, el usuario es: ${resultado['name']}`);
  } catch (err) {
    // Quan la promesa retorna un reject, imprimirem l'error trobat
    console.log(`Error encontrado: ${err['msg']}`);
  }

  // Cridem per segona vegada findOne amb el cas Fermin. Això fa que la primera promesa condiciona la segona.
  try {  
    const resultado = await findOne(users, { key: 'name', value: 'Fermin' });
    console.log(`Resolución promesa, el usuario es: ${resultado['name']}`);
  } catch (err) {
    console.log(`Error encontrado: ${err['msg']}`);
  }
};
// Cridem la funció que té async/await perquè busqui els dos usuaris per veure si hi son amb els noms corresponents.
llamadaFindOne();