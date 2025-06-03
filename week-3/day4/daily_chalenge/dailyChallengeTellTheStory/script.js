const form = document.getElementById("libform");
const libButton = document.getElementById("lib-button");
const storySpan = document.getElementById("story");

let templates = [
    (noun, adj, person, verb, place) => `${person} went to the ${place} with a ${adj} ${noun} to ${verb}.`,
    (noun, adj, person, verb, place) => `In ${place}, ${person} found a ${adj} ${noun} and started to ${verb} uncontrollably.`,
    (noun, adj, person, verb, place) => `${person} decided to ${verb} the ${adj} ${noun} at the ${place}.`
];

let currentInputs = {}; 

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const noun = document.getElementById("noun").value.trim();
    const adj = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!noun || !adj || !person || !verb || !place) {
        alert("Please fill in all fields.");
        return;
    }

    currentInputs = { noun, adj, person, verb, place };

    displayRandomStory();
});

function displayRandomStory() {
    if (!currentInputs.noun) return;

    const randomIndex = Math.floor(Math.random() * templates.length);
    const story = templates[randomIndex](
        currentInputs.noun,
        currentInputs.adj,
        currentInputs.person,
        currentInputs.verb,
        currentInputs.place
    );
    storySpan.textContent = story;
}

const shuffleButton = document.createElement("button");
shuffleButton.textContent = "Shuffle story";
shuffleButton.type = "button";
form.appendChild(shuffleButton);

shuffleButton.addEventListener("click", function () {
    if (Object.keys(currentInputs).length === 0) {
        alert("Please generate a story first by submitting the form.");
        return;
    }
    displayRandomStory();
});
