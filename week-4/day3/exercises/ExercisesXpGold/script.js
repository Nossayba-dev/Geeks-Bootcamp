// exercise1
function printFullName({first , last}){
  // console.log('your full name is'+ first +' '+ last)
  console.log(`your full name is ${first} ${last}`)
}
printFullName({first: 'Elie', last:'Schoppik'}) 

// exercise2
function keysAndValues(obj){
  console.log([Object.keys(obj) ,Object.values(obj)])
}
keysAndValues({ a: 1, b: 2, c: 3 })
keysAndValues({ key1: true, key2: false, key3: undefined })
// exercise3
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();


const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);//3 
