// La funció findOne() permet trobar dins de la llista si l'usuari existeix
// Té com a parametres: 
// 1.La llista que actua com a BBDD dels usuaris que tenim. Format json (clau:valor)
// 2. Clau-valor que correspon a l'element a buscar dins de la llista. Seria el Request del callback.
// 3. Retorna el valor buscat o un error en el cas de no trobar-lo. Seria el Response del callback.
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  // Posa un timeout perquè s'executi al cap de 2000mili segons
  setTimeout(() => {
    // amb find busca l'element que tingiui com a key=name el valor esperat i ho guarda com dins de la constant element.
    // Aquí es on tenim el callback, ja que això pot tardar en trobar el valor.
    const element = list.find(element => element[key] === value);
    // en segon lloc, dona un missatge d'èxit o error en funció del que es guardi a element. 
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

// Aqui s'imprimeix en consola el nom de l'usuari trobat, si la funció findOne() retorna un valor (cas d'èxit)
const onSuccess = ({ name }) => console.log(`user: ${name}`);
// Aqui s'imprimeix en consola l'error en cas que la funció findOne() retorna que no ha trobat el nom d'usuari a users[].
const onError = ({ msg }) => console.log(msg);

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
// Aquí s'imprmieix per consola les paraules 'findOne success'. Suposo que es fa perquè es visualitzi de forma clara a la consola que s'executa la línea abans el timeout no dona la resposta en el callback
console.log('findOne success');
// Aquí es crida la funció findOne() passant que busqui en la clau 'name' el valor 'carlos' i retoni exit o error segons pertoqui per les línies 18 i 20. En aquest cas retorna exit perquè l'usuari 'Carlos' existeix a const users.
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
// Idem  de la fila 33.
console.log('findOne error');
// Aquí es crida la funció findOne() passant que busqui en la clau 'name' el valor 'Fermin' i retoni exit o error segons pertoqui per les línies 18 i 20. En aquest cas retorna error perquè l'usuari 'Fermin' NO existeix a const users.
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });