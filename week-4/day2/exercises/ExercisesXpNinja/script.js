//exercise1
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
// method1
const dogAges =[];
 data.forEach(
    el => {
      if (el.type === 'dog') {
        dogAges.push(el.age);     
      }
    });
const totalDogAge = dogAges.reduce((acc,age) => acc + age, 0);

console.log('Total age of dogs:', totalDogAge);
// method2
const totalDogAge = data.reduce((acc, el) => {
  return el.type === 'dog' ? acc + el.age : acc;
}, 0);

console.log('Total age of dogs:', totalDogAge);
// method3
const totalDogAge = data
   .filter(el => el.type === 'dog')
   .reduce((acc, el) => acc + el.age, 0);

console.log('Total age of dogs:', totalDogAge);
// exercise2
// method1
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
let news = '' ;
for(let i=0 ; i< userEmail3.length ;i++){
  
  if(userEmail3[i]!==' '){
    news += userEmail3[i];
  }
}
console.log(news);
// method2
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanedEmail = userEmail3.replace(/\s/g, '');
console.log(cleanedEmail); 
// exercise3
const users = [
             { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
            ];
let newUser = new Object(); 
users.forEach((obj)=> newUser[obj.firstName , obj.lastName] = obj.role)
console.log(newUser)
// exercise4
const letters = ['x', 'y', 'z', 'z'];
const newLetters = {};

for (const char of letters) {
  if (newLetters[char]) {
    newLetters[char]++; 
  } else {
    newLetters[char] = 1; 
  }
}

console.log(newLetters);

const newLetters = letters.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(newLetters);


