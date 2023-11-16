function changeColor() {
  document.getElementById("background").style.backgroundColor = randomCOlor();
}
function randomCOlor() {
  let random = Math.floor(Math.random() * 16777215).toString(16);
  let rndmColor = "#" + random;
  return rndmColor;
}
