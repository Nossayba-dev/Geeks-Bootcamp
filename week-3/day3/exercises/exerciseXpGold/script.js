// Exercise 1 : is_Blank
function isBlank(word){
    return word.trim() == '';
}
console.log(isBlank('')); 
console.log(isBlank('abc')); 
// Exercise 2 : Abbrev_name
function abbrevName(fullname){
    const name = fullname.split(' ')
    return name[0]+' '+name[1].charAt(0)+'.';
}
console.log(abbrevName("Robin Singh"));
// Exercise 3 : SwapCase
function casefunction (str) {
    let phrase='';
    for(let i=0 ; i< str.length; i++){
        
        if (str[i] === str[i].toUpperCase()){
            phrase += str[i].toLowerCase();
        }else {
           phrase += str[i].toUpperCase();
        }
    }
    return phrase;
}
console.log(casefunction('The Quick Brown Fox'));
// Exercise 4 : Omnipresent value
//method de Oussama
function isOmnipresent(array , O){
let cmp=0;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<2;j++){
            if(array[i][j]==1){
                ++cmp;

            }
        }
    }
if(cmp>=array.length){
    return 1
}else{
    return 0
}

}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1],[7,1]], 1))
// ma method
function isOmnipresent(array , O){
    let r
    for(let i=0; i<array.length; i++){
        for(let j=0;j<2;j++){
            if(O in array[i]){
                r=true;
            }else{
                r=false;
            }
        }
    }
    return r
}
console.log(isOmnipresent([[1, 2], [1, 3], [5, 1], [6, 1],[7,1]], 1));
// Exercise 5 : Red table
let table = document.querySelector("table");

for (let i = 0; i < table.rows.length; i++) {
  let cell = table.rows[i].cells[i]; 
  cell.style.backgroundColor = "red";
}
