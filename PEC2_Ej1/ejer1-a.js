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

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);


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

console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
