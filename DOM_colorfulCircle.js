let parent = document.getElementById("inner_circle");
let numbers = document.getElementById("circle_input");
let array = [];
let n = 0;
// function circleColor() {
//   n++;
//   let background = "linear-garden";
//   let degree = "(270deg,";
//   let color01 = "rgba(128, 36, 113, 1) 0%,";
//   let color02 = "rbga(255, 255, 255, 1)" + n + "%)";
//   let changeColor = background + degree + color01 + color02;
//   console.log(changeColor);
//   return changeColor;
// }
// console.log(circleColor);
function circle() {
  for (let i = 0; i < numbers.value; i++) {
    n = n + i / 3;
    generateCircle = document.createElement("div");
    generateCircle.style.background =
      "linear-gradient(180deg,rgba(128, 36, 113, 1) 0%,rgba(255, 255, 255, 1)" +
      n +
      "%";
    console.log(generateCircle.style.background);
    parent.appendChild(generateCircle);
    generateCircle.classList.add("circle");
    array.push(generateCircle);
  }
  console.log(array);
  numbers.value = "";
}

function reEnter() {
  let removed = [];
  for (i = 0; i < array.length; i++) {
    parent.removeChild(array[i]);
    removed = array.slice(i, -1);
    console.log(removed);
  }
  array = removed;
  // console.log("deleting", array.length);
}
