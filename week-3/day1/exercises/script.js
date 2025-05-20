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
let number=parseInt(prompt("enter a number"))

// Exercise 4 : Building Management
let number
do{
     number = parseInt(prompt("enter a number"));
}
while(number < 10);
// Exercise 5 : Family

// Exercise 6 : Rudolf
// Exercise 7 : Secret Group