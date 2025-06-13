// 1
// function allTruthy(...args) {
//   return args.every(Boolean);//vérifie que tous sont truthy (≠ false, 0, "", null, undefined, NaN).
// }
// console.log(allTruthy(1,0))
// 2
const allTruthy = (...args) => {
  return args.reduce((acc, curr) => acc && !!curr, true);
};

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));