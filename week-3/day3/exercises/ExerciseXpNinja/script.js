//exercise1
let n = 5;
for(let i=0; i<=5;i++ ){
    console.log(`${i}`);
}
//exercise2
const capitalize =(str) =>{
    let phrase='';
        let phrase1='';
    7
    for( let i =0 ;i <str.length ; i++){
        if ((i+1) % 2 == 0){
            phrase+=str[i].toUpperCase();
        }else{
            phrase+=str[i];
        }

         if ((i+1) % 2 != 0){
            phrase1+=str[i].toUpperCase();
        }else{
            phrase1+=str[i];
        }
        
    }
    
    return [phrase , phrase];
}
console.log(capitalize('abcdef'));
// exercise3
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return 'non';
    }
  }
  return 'palindrome';
}
console.log(isPalindrome("mom")); 
// exercise4

const biggestNumberInArray = arrayNumber => {
    // Math.max(...arrayNumber.filter(items=> typeof items ==='number')) ;
    // +
    // Math.max(...(arrayNumber ?? [])) || 0;
    // =
    const numbersOnly = (arrayNumber ?? []).filter(item => typeof item === 'number');
    return numbersOnly.length ? Math.max(...numbersOnly) : 0;

}

console.log(biggestNumberInArray(['m',2,-6]))
// exercise5
const unique = array => [...new Set(array)];
console.log(unique([1,2,3,3,3,4,5,5,4,6,7,8,5,9,1]))
// exercise6
function createCalendar(year, month) {
  
  month = month - 1;

  
  const table = document.createElement('table');
  table.border = '1';
  table.style.borderCollapse = 'collapse';

  
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  for (const day of weekDays) {
    const th = document.createElement('th');
    th.textContent = day;
    th.style.padding = '5px';
    th.style.backgroundColor = '#eee';
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  
  const firstDay = new Date(year, month, 1);
  
  let startDay = firstDay.getDay() - 1;
  if (startDay === -1) startDay = 6; 

 
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let currentDay = 1;

  
  for (let week = 0; week < 6; week++) {
    const tr = document.createElement('tr');

    
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      const td = document.createElement('td');
      td.style.padding = '5px';
      td.style.textAlign = 'center';
      td.style.width = '30px';
      td.style.height = '30px';

      
      if ((week === 0 && dayOfWeek < startDay) || currentDay > daysInMonth) {
        td.textContent = '';
      } else {
        td.textContent = currentDay;
        currentDay++;
      }
      tr.appendChild(td);
    }

    tbody.appendChild(tr);

   
    if (currentDay > daysInMonth) break;
  }

  table.appendChild(tbody);

 
  document.body.appendChild(table);
}



console.log(createCalendar(2025, 6));


