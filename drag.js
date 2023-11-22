// number01 -ee huvisagchind hiij baina
const number01 = document.getElementById("number01");
// number01-ee event hiij baina
number01.addEventListener("dragstart", dragStart);
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  console.log("dragstart");
  document.getElementById("demo").innerText = "dragging started";
}
const dropbox = document.querySelector("dropbox");
dropbox.addEventListener("dragenter");
dropbox.addEventListener("dragover");
dropbox.addEventListener("dragleave");
dropbox.addEventListener("drop");
