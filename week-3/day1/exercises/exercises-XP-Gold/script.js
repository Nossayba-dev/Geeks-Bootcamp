// exercise1
let numbers = [123, 8409, 100053, 333333333, 7];
for( i in numbers){
    // first method
    if (numbers[i] % 3 == 0){
        console.log('true');
    }else{
        console.log('false');
    }
    // second method
    console.log(numbers[i] % 3 === 0);

}
// exercise2
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
let name = prompt('entrer votre nom');
if (name in guestList){
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
}else {
    console.log('Hi! I m a guest');
}
// exercise3
let age = [20,5,12,43,98,55];
let sum = 0;
let max = 0;
for (i in age){
    sum += age[i];
     if( age[i]>max)
        max = age[i];
}
console.log(`${sum}`);
console.log(`${max}`);



