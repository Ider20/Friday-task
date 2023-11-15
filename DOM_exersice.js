// document.body.appendChild(card)
const container = document.getElementById("container");
// console.log(container)
// // document.body.div[0].classList.add()
// card.classList.add("class")
// card.innerText = "1"
let i = 0;
function addBTN() {
  const btn = document.getElementById("tovchluur");
  const card = document.createElement("div");
  container.appendChild(card);
  card.classList.add("class");
  i++;
  card.innerText = i;
}
