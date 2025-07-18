// exercise1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

const hasViolet = colors.includes("Violet");

if (hasViolet) {
    console.log("Yeah");
} else {
    console.log("No...");
}
// exercise2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    const number = index + 1;
    const suffix = (number % 100 >= 11 && number % 100 <= 13) 
                   ? ordinal[0] : (number % 10 <= 3 ? ordinal[number % 10] : ordinal[0]);
    
    console.log(`${number}${suffix} choice is ${color}.`);
});
exercise3
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); 

// ------2------
const country = "USA";
console.log([...country]); 

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); 
// exercice4
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents);

const fullStackLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);
console.log(fullStackLastNames);
// exercise5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
});

console.log(combinedString);
// exercise5
const students = [
  { name: "Ray", course: "Computer Science", isPassed: true }, 
  { name: "Liam", course: "Computer Science", isPassed: false }, 
  { name: "Jenner", course: "Information Technology", isPassed: true }, 
  { name: "Marco", course: "Robotics", isPassed: true }, 
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false }, 
  { name: "Jamie", course: "Big Data", isPassed: false }
];

const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);






