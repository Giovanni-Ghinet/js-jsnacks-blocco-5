const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

const nomi = people.map(person => person.name);
console.log(nomi);

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'