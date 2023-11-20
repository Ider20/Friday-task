let parent = document.getElementById("inner_circle");
let numbers = document.getElementById("circle_input");
let array = [];
let n = 0;

const width = getComputedStyle(document.querySelector("#mainbar")).width;
console.log("width", width);
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
    generateCircle = document.createElement("div");
    generateCircle.style.backgroundColor;
    let color01 = 73 - i * 6;
    let color02 = 218 - i * 6;
    let color03 = 255 - i * 6;
    generateCircle.style.background = `rgb(${color01}, ${color02}, ${color03})`;
    // "linear-gradient(180deg,rgba(128, 36, 113, 1) 0%,rgba(255, 255, 255, 1)" +
    //   n +
    //   "%";
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
