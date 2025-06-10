// // exercise1
// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// })
// //[2, 4, 6]

// // exercise2
// console.log([[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// ))//[1,2,0,1,2,3,]
// // exercise3
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2; 
// })
// console.log("newArray:", newArray);
// // 0 1 2 3 4 5
// exercise4
//1
const array = [[1],[2],[3],[[[4]]],[[[5]]]];

const result = array.map((item, index) => {
  if (index < 3) {
    return item[0];
  } else {
    return item[0][0]; 
  }
});

console.log(result); 
//bonus
const flattened = array.flat(2);  
console.log(flattened);

//2
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const result1 = greeting.map(arr => arr.join(' '));
console.log(result1);
//3
const result2 = result1.join(',');
console.log(result2);
//4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const flattened1 = trapped.flat(Infinity);  
console.log(flattened1);

