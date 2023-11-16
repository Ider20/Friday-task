// Easy
// Add Element
const container = document.getElementById("container");
let i = 0;
function addBTN() {
  const btn = document.getElementById("tovchluur");
  const card = document.createElement("div");
  container.appendChild(card);
  card.classList.add("class");
  i++;
  card.innerText = i;
}
