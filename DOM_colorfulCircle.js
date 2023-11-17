let parent = document.getElementById("inner_circle");
let numbers = document.getElementById("circle_input");
const array = [];
function circle() {
  for (let i = 0; i < numbers.value; i++) {
    generateCircle = document.createElement("div");
    parent.appendChild(generateCircle);
    generateCircle.classList.add("circle");
    array.push(generateCircle);
  }
  console.log(array);
}
function reEnter() {
  for (i = 0; i < array.length; i++) {
    parent.removeChild(array[i]);
  }
  console.log("deleting", array.length);
}
