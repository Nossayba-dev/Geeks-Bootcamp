const array =[
    {
        id :0,
        author: 'Steve Jobs',
        quote:'The only way to do great work is to love what you do.'
    },
    {
        id :1,
        author: 'Albert Einstein',
        quote:'In the middle of every difficulty lies opportunity'
    },
    {
        id :2,
        author: 'Winston Churchill',
        quote:'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    }
]
//part1
let lastIndex = -1;
function randomOBJ(){
    let newIndex ;
    do{
        newIndex = Math.floor(Math.random() * array.length);
        //Math.random():Génère un nombre décimal aléatoire entre 0 (inclus) et 1 (exclus).
        //(Math.random() * array.length):Multiplie ce nombre aléatoire par la taille du tableau array
        //Math.floor(Math.random() * array.length):Arrondit à l’entier inférieur le plus proche
    }while(newIndex===lastIndex)
    lastIndex = newIndex;
    const randomUser = array[newIndex];
    document.getElementById("Quote").textContent = randomUser.quote;
}
document.getElementById("button").addEventListener("click",randomOBJ);
part2
function addQuote(){
    const __quote = new parseFloat(input);

  if (!isNaN(__quote)) {
       array.push(
        {
            id : parseInt(array.length)+1,
            author:__quote.author,
            quote:__quote.quote
        }
    )
    alert("GOOD");

  } else {
    alert("Please enter a valid number.");
  }
 
}
function addQuote() {
  const quoteText = document.getElementById("quoteInput").value.trim();
  const authorText = document.getElementById("authorInput").value.trim();

  if (quoteText && authorText) {
    array.push({
      id: array.length,
      author: authorText,
      quote: quoteText
    });
    alert("GOOD");

    // Clear inputs (optionnel)
    document.getElementById("quoteInput").value = "";
    document.getElementById("authorInput").value = "";
  } else {
    alert("Please enter both quote and author.");
  }
}


