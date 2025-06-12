// exercise1
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207]
  }
};

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// exercise2
function displayStudentInfo(objUser){
    console.log(`your full name is ${Object.values(objUser)[0]} ${Object.values(objUser)[1] } `)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
// exercise3
const users = { 
    user1: 18273,
    user2: 92833,
    user3: 90315
}
const newUsers = {}; 
for ( let key in users){
  newUsers[key] = users[key] * 2;
}

console.log(Object.entries(newUsers))
// exercise4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); 
// object
// exercise5
class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
// exercise6
//1
console.log(`${[2] === [2]}`)  //false
console.log(`${{} === {}}`) //false
// 2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number);//4
console.log(object3.number);//4
console.log(object4.number);//5
// object1, object2, et object3 pointent tous vers le même objet en mémoire → changer number dans object1 affecte les autres.
// object4 est un nouvel objet indépendant, donc il garde number: 5.

class Animal{
  constructor(name, type ,color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal{
    constructor(name, type ,color) {
    super(name ,type,color);
  }
  sound(sound){
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;  }
}
const farmerCow = new Mammal('Bessie', 'cow', 'brown');
console.log(farmerCow.sound('moooo'));
