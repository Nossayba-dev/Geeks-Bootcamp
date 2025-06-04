// exercise1
// #1
function funcOne() {
    let a = 5; 
    if(a > 1) {
        a = 3; 
    }
    alert(`inside the funcOne function ${a}`); 
}
// #1.1
funcOne(); 
// #1.2 If 'a' is declared with const:
// const a = 5; then trying a = 3; will throw a TypeError because const variables can't be reassigned.

// #2
let a = 0; 
function funcTwo() {
    a = 5; 
}

function funcThree() {
    alert(`inside the funcThree function ${a}`); 
}

// #2.1
funcThree(); 
funcTwo();   
funcThree();
// #2.2 If 'a' is declared with const:
// const a = 0; then funcTwo() will throw TypeError when trying a = 5.

// #3
function funcFour() {
    window.a = "hello"; 
}

function funcFive() {
    alert(`inside the funcFive function ${a}`); 
}

// #3.1
funcFour();  
funcFive(); 

// #4
let a = 1; 
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1
funcSix(); 
// #4.2 If declared with const instead of let:
// const a = "test"; – works fine, no reassignment here, so no error.

// #5
let a = 2;
if (true) {
    let a = 5; 
    alert(`in the if block ${a}`); 
}
alert(`outside of the if block ${a}`); // Output: "outside of the if block 2"
// #5.1 - Outputs:
// "in the if block 5"
// "outside of the if block 2"
// #5.2 If 'a' is declared with const:
// const a = 5; and const a = 2; – works fine since they're separate block-scoped variables.


// exercise 2

const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints); 

// exercise 3
const isString = value => typeof value === 'string';

console.log(isString('hello')); // true

console.log(isString([1, 2, 4, 0]));// false

// exercise 4
const sum = (a, b) => a + b;
console.log(sum(3, 5)); 
// exercise 5
function convertKgToGrams(weightInKg) {
    return weightInKg * 1000;
}
console.log(convertKgToGrams(2)); 

const convertKgToGramsExpr = function(weightInKg) {
    return weightInKg * 1000;
};
console.log(convertKgToGramsExpr(3)); 


const convertKgToGramsArrow = kg => kg * 1000;
console.log(convertKgToGramsArrow(4)); 
// exercise6
(function(children, partner, location, job) {
    const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.innerHTML = `<p>${message}</p>`;
})(3, "Alex", "Canada", "Software Engineer");
// exericse 7
(function(userName) {
    const navbar = document.getElementById('navbar');

    const userDiv = document.createElement('div');
    userDiv.className = 'user-info';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = userName;

    const profilePic = document.createElement('img');
    // Placeholder profile picture
    profilePic.src = "https://via.placeholder.com/40";
    profilePic.alt = `${userName}'s profile picture`;

    userDiv.appendChild(nameSpan);
    userDiv.appendChild(profilePic);

    navbar.appendChild(userDiv);
})("John");
// exercise8
// Part I
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        const output = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
        document.getElementById('juice-output').innerHTML = `<p>${output}</p>`;
    }

    addIngredients("apple", "banana", "mango");
}

makeJuice("large");
// Part II
function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const output = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        document.getElementById('juice-output').innerHTML = `<p>${output}</p>`;
    }

    addIngredients("apple", "banana", "mango");
    addIngredients("pineapple", "orange", "kiwi");

    displayJuice();
}

makeJuice("medium");



