// exercise1
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

// Promise.all waits for all the promises to resolve.
// If all succeed, it returns an array of their values in the same order.
// `promise2` is a plain value, treated like Promise.resolve(42).
// If any of them rejected, the .catch() block would handle the error.
// exercise2
function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
//   [2,4,6]
