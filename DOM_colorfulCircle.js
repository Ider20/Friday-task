let parent = document.getElementById("inner_circle");
let numbers = document.getElementById("circle_input");
let array = [];
function circle() {
  for (let i = 0; i < numbers.value; i++) {
    generateCircle = document.createElement("div");
    parent.appendChild(generateCircle);
    generateCircle.classList.add("circle");
  }
  array = document.getElementsByClassName("circle");
  console.log(array);
}

function reEnter() {
  for (i = 0; i < numbers.value; i++) {
    array.pop[i];
  }
  parent = array;
}
