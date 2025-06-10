import { people } from './data.js';

function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / personArray.length;
  console.log(`Average age: ${averageAge.toFixed(2)}`);
}

calculateAverageAge(people);
