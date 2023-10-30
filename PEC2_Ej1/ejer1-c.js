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

// Al cridar la funció findOne() farem us del Async/await
// Per utilitzar async/await necessitem una funció on estigui definit que es async
async function llamadaFindOne (json, {key,value}) {
  // Posem un try/catch per fer us dels èxits/errors
  try {  
    // Aquí cridem a la funció findOne() i posem un await davant ja que es una promesa que tardarà en retornar un resultat
    const resultado = await findOne(json, {key,value});
    console.log(`Resolución promesa, el usuario es: ${resultado['name']}`);
  } catch (err) {
    console.log(`Error encontrado: ${err['msg']}`);
  }
};
// Cridem la funció que té async/await perquè busqui els dos usuaris si hi son amb els noms corresponents.
llamadaFindOne(users, { key: 'name', value: 'Carlos' });
llamadaFindOne(users, { key: 'name', value: 'Fermin' });