//exercise1 
const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchHilariousGifs() {
  try {
    const response = await fetch(url);

    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("GIF Data:", data);    
  } catch (error) {
    console.error("Fetch error:", error); 
  }
}


fetchHilariousGifs();
//exercise2
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const url = `https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&lang=en&api_key=${apiKey}`;

async function fetchSunGifs() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Sun Gifs Data:", data); 
  } catch (error) {
    console.error("Fetch error:", error); 
  }
}

fetchSunGifs();
// exercise3
async function fetchStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data.result); 
  } catch (error) {
    console.error("Fetch error:", error); 
  }
}

fetchStarship();
// exercise4
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');  
        }, 2000);  
    });
}

async function asyncCall() {
    console.log('calling');

    let result = await resolveAfter2Seconds();

    console.log(result);
}

asyncCall();
// output
// calling
// (apres 2 secondes )
// resolved



