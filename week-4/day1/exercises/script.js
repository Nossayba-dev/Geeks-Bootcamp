// my solution
const mergeWords1 = (word) => {
    let phrase = word;
    return s = (next)=>{
        if (next === undefined){
            return phrase;
        }
        phrase += ' ' + next;
        return s;
    };

}


console.log(mergeWords1('Hello')('noussayb')('abbara')('how')('are')('you')('?')())
 //3
// function mergeWords(string) {
//  return function(nextString) {
//    if (nextString === undefined) {
//      return string;
//    } else {
//      return mergeWords(string + ' ' + nextString);
//    }
//  }
// }
// >>>>>>>>>>>>>>
let  mergeWords = string => nextString => ((nextString === undefined) ? string : mergeWords(string + ' ' + nextString));
console.log(mergeWords('Hello')('noussayb')('abbara')('how')('are')('you')('?')())
