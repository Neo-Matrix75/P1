const myElement = document.querySelector("#count");
const myCounter = document.createElement("div");
myCounter.classList.add("counter");
myCounter.textContent = "Il y a en ce moment " + Math.floor(Math.random() * 1000000) + " visteurs en ligne sur ce site !";
myElement.appendChild(myCounter);
