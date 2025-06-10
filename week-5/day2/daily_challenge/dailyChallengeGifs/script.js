const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchGif(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${query}`
    );
    const data = await response.json();

    if (data.data && data.data.images) {
      const imageUrl = data.data.images.fixed_height.url;
      displayGif(imageUrl);
    } else {
      alert("No GIF found for this category.");
    }
  } catch (error) {
    console.error("Error fetching gif:", error);
  }
}

function displayGif(url) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("gif-wrapper");

  const img = document.createElement("img");
  img.src = url;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.onclick = () => wrapper.remove();

  wrapper.appendChild(img);
  wrapper.appendChild(deleteBtn);
  gifContainer.appendChild(wrapper);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) fetchGif(query);
  form.reset();
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
