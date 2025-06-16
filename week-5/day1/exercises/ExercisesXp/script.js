// Exercice 1 
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

// Test des cas 
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Exercice 2 
const delaySuccess = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

delaySuccess.then(message => console.log(message));

// Exercice 3 
Promise.resolve(3).then(value => console.log(value));

Promise.reject("Boo!").catch(error => console.log(error));




