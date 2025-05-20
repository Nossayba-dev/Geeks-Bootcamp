//  Exercise 1 : List of people
// Part I - Review about arrays
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2,1,"Jason");
people.push("noussayba");
console.log(people.indexOf("Mary"));
people.slice(1,3)
console.log(people.indexOf("Foo"));
// it return -1 because it's doesn't exest 
console.log(people);
console.log(people.slice(1,3));
let last = people[people.length-1]
console.log(last);
// Part II - Loops
 for (let i=0 ; i<people.length ;i++){
    console.log(people[i]);

 }
//  
 for (let i of people){
    console.log(i);

 }
//  
 for (let i in people){
     console.log(people[i]);

 }
//  
for (let i=0 ; i<people.length ;i++){
    if (i==1) {break;}
        console.log(people[i]);

}

// Exercise 2 : Your favorite colors
let colors=["baby blue","baby pink","move","baby yellow","black" ];
let suffixes = ["st", "nd", "rd", "th"];
for( let i in colors){
   if ((parseInt(i)+1) % 10 == 1){
        console.log(`my ${parseInt(i)+1}${suffixes[0]} choice is ${colors[i]} `);
   }else if((parseInt(i)+1)%10==2){
        console.log(`my ${parseInt(i)+1}${suffixes[1]} choice is ${colors[i]} `);
   }else if((parseInt(i)+1)%10==3){
        console.log(`my ${parseInt(i)+1}${suffixes[2]} choice is ${colors[i]} `);
   }else{
        console.log(`my ${parseInt(i)+1}${suffixes[3]} choice is ${colors[i]} `);
   }
}


// Exercise 3 : Repeat the question
let number
do{
     number = parseInt(prompt("enter a number"));
}
while(number < 10);

// Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(`${building.numberOfAptByFloor.firstFloor} and ${building.numberOfAptByFloor.secondFloor}`);
console.log(`${building.nameOfTenants.slice(1,2)} : ${building.numberOfRoomsAndRent.dan}`);
sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if(sum > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200
};
console.log(building.numberOfRoomsAndRent.dan[1]);
// Exercise 5 : Family
const Family={
    father :"Youssef",
    mather :"meriem",
    bigsis : "Noussayba",
    bigbro :"Oubay",
    letterbro : "Abdoelrrahman",
    lettersis : "Razan"
}
for (let key in Family) {
  console.log(key);
}

for(let key in Family){
    console.log(Family[key]);
}
// Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let str=""
for(let i in details ){
    str += `${i} ${details[i]} `;
}
console.log(str)

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const initials = names.map(name => name[0]);
const sortedInitials = initials.sort();
const secretSocietyName = sortedInitials.join("");
console.log(secretSocietyName); 