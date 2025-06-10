const characterContainer = document.getElementById("character-container");
const getCharacterBtn = document.getElementById("get-character");

getCharacterBtn.addEventListener("click", getRandomCharacter);

async function getRandomCharacter() {
  try {
    characterContainer.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner fa-spin"></i> Loading character...
            </div>
        `;

    const randomId = Math.floor(Math.random() * 83) + 1;

    const characterData = await fetchCharacter(randomId);

    const homeworldData = await fetchHomeworld(characterData.homeworld);

    displayCharacter(characterData, homeworldData);
  } catch (error) {
    console.error("Error:", error);
    characterContainer.innerHTML = `
            <div class="error">
                <i class="fas fa-exclamation-triangle"></i> 
                Failed to load character data. Please try again.
            </div>
        `;
  }
}

async function fetchCharacter(id) {
  const response = await fetch(`https://www.swapi.tech/api/people/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.result.properties;
}

async function fetchHomeworld(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.result.properties;
}

function displayCharacter(character, homeworld) {
  characterContainer.innerHTML = `
        <h2>${character.name}</h2>
        <div class="character-info">
            <p><span class="property">Height:</span> ${character.height} cm</p>
            <p><span class="property">Gender:</span> ${character.gender}</p>
            <p><span class="property">Birth Year:</span> ${character.birth_year}</p>
            <p><span class="property">Home World:</span> ${homeworld.name}</p>
        </div>
    `;
}
