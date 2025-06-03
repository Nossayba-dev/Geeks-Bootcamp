//  Exercise 1 : Change the article

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("article h1");
  console.log(h1);

  const article = document.querySelector("article");
  article.lastElementChild.remove();

  const h2 = document.querySelector("article h2");
  h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
  });

  const h3 = document.querySelector("article h3");
  h3.addEventListener("click", () => {
    h3.style.display = "none";
  });

  const boldBtn = document.createElement("button");
  boldBtn.textContent = "Make Paragraphs Bold";
  document.body.appendChild(boldBtn);
  boldBtn.addEventListener("click", () => {
    document.querySelectorAll("article p").forEach(p => p.style.fontWeight = "bold");
  });

  h1.addEventListener("mouseover", () => {
    const randomSize = Math.floor(Math.random() * 100) + "px";
    h1.style.fontSize = randomSize;
  });

  const secondP = document.querySelectorAll("article p")[1];
  secondP.style.transition = "opacity 1s";
  secondP.addEventListener("mouseover", () => {
    secondP.style.opacity = 0;
  });
});

// Exercise 2 : Work with forms
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const fnameInput = document.getElementById("fname");
  const lnameInput = document.getElementById("lname");
  const usersAnswer = document.querySelector(".usersAnswer");

  console.log(form);
  console.log(fnameInput, lnameInput);
  console.log(document.getElementsByName("firstname"), document.getElementsByName("lastname"));

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();

    if (fname && lname) {
      usersAnswer.innerHTML = "";
      const li1 = document.createElement("li");
      li1.textContent = fname;
      const li2 = document.createElement("li");
      li2.textContent = lname;
      usersAnswer.appendChild(li1);
      usersAnswer.appendChild(li2);
    }
  });
});

//  Exercise 3 : Transform the sentence
let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("p strong");
}

function highlight() {
  allBoldItems.forEach(item => item.style.color = "blue");
}

function returnItemsToDefault() {
  allBoldItems.forEach(item => item.style.color = "black");
}

document.addEventListener("DOMContentLoaded", () => {
  getBoldItems();
  const p = document.querySelector("p");
  p.addEventListener("mouseover", highlight);
  p.addEventListener("mouseout", returnItemsToDefault);
});

//  Exercise 4 : Volume of a sphere
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("MyForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const radius = parseFloat(document.getElementById("radius").value);
    const volumeInput = document.getElementById("volume");
    if (!isNaN(radius)) {
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      volumeInput.value = volume.toFixed(2);
    } else {
      volumeInput.value = "Invalid radius";
    }
  });
});
