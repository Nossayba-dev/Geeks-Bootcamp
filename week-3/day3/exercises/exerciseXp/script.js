//Exercise 1 : Find the numbers divisible by 23
function displayNumbersDivisible(divisor){
    let sum = 0;
    for(let i=0 ; i<=500;i++){
        if(i % divisor == 0){
            console.log(`${i}`);
            sum+=i;
        }
    }
console.log(` la some des nombre deviser par ${divisor} est  ${sum}`);
}
displayNumbersDivisible(100);
//  Exercise 2 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange",  "apple"];
function myBill(){
    for( let i=0; i< shoppingList.length ;i++){
        if (shoppingList[i] in stock ){
            if ( stock[shoppingList[i]]==0 ){
                console.log(` ${shoppingList[i]} n'est pas au stock `);
            }else{
                stock[shoppingList[i]]-- ; //bonus 
                console.log(`le prix de ${shoppingList[i]} est ${prices[shoppingList[i]]}`);
            }
        }
    }
    for (let item in stock) {
        console.log(`${item}: ${stock[item]}`); //pour etre sur que le stock de banane est deminué
    }
}
myBill();
// Exercise 3 : What’s in my wallet ?
let Change = [0.25, 0.10, 0.05, 0.01];

function changeEnough(itemPrice, amountOfChange) {
    let sum = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        sum += amountOfChange[i] * Change[i];
    }
    return sum >= itemPrice;
}

console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0,0,20,5]));
//  Exercise 4 : Vacations Costs
function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights would you like to stay in the hotel?");
    } while (isNaN(nights) || nights.trim() === "" || Number(nights) <= 0);

    const costPerNight = 140;
    return Number(nights) * costPerNight;
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("What is your travel destination?");
    } while (!isNaN(destination) || destination.trim() === "");

    destination = destination.trim().toLowerCase();
    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost() {
    let days;
    do {
        days = prompt("How many days would you like to rent the car?");
    } while (isNaN(days) || days.trim() === "" || Number(days) <= 0);

    const dailyRate = 40;
    let total = Number(days) * dailyRate;

    if (Number(days) > 10) {
        total *= 0.95; // 5% discount
    }

    return total;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    const total = hotel + plane + car;

    console.log(`The car cost: $${car.toFixed(2)}, the hotel cost: $${hotel.toFixed(2)}, the plane tickets cost: $${plane.toFixed(2)}.`);
    console.log(`Total vacation cost: $${total.toFixed(2)}.`);
}

totalVacationCost();
// Exercise 5 : Users
const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

lists[1].removeChild(lists[1].children[1]);

for (let ul of lists) {
    ul.children[0].textContent = "Nossayba";
}

lists.forEach(ul => ul.classList.add("student_list"));

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

for (let li of lists[1].children) {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
}

for (let li of lists[0].children) {
    if (li.textContent === "Richard") {
        li.style.border = "1px solid black";
    }
}

document.body.style.fontSize = "18px";
// bonus
if (container.style.backgroundColor === "lightblue") {
    const users = lists[0].querySelectorAll("li");
    alert(`Hello ${users[0].textContent} and ${users[1].textContent}`);
}
//  Exercise 6 : Change the navbar
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");

const textNode = document.createTextNode("Logout");

newLi.appendChild(textNode);

const ul = navDiv.querySelector("ul");
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);
// Exercise 7 : My Book List
const allBooks = [
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        image: "https://m.media-amazon.com/images/I/41jEbK-jG+L.jpg",
        alreadyRead: true
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andy Hunt & Dave Thomas",
        image: "https://m.media-amazon.com/images/I/41as+WafrFL.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.style.marginBottom = "20px";

    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    const bookImg = document.createElement("img");
    bookImg.src = book.image;
    bookImg.style.width = "100px";

    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImg);
    section.appendChild(bookDiv);
});




