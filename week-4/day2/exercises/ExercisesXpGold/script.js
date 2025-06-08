// exercise1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
})
//[2, 4, 6]

// exercise2
console.log([[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
))//[1,2,0,1,2,3,]
// exercise3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2; 
})
console.log("newArray:", newArray);
// 0 1 2 3 4 5
// exercise4