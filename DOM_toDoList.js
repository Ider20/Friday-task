// const addTask = document.getElementById("todolist");
const deleteToDo = document.getElementById("deletetodo");
const toDoList = document.getElementById("listoftask");
const inputToDO = document.getElementById("toDoInput");
// let listArray = [];
let pElement = "";
function addText() {
  let btn = "";
  if (inputToDO.value === "") {
    alert("Ажлын нэрээ оруулна уу!");
  } else {
    pElement = document.createElement("p");
    let tNode = document.createTextNode(inputToDO.value);
    pElement.appendChild(tNode);
    pElement.style.color = "white";
    pElement.setAttribute("class", "list");
    let test = document.getElementsByClassName("list");
    console.log(test);
    console.log(pElement);
    toDoList.appendChild(pElement);
    // delete button
    let span = document.createElement("span");
    btn = document.createElement("button");
    btn.setAttribute("onclick", "deleteBtn()");
    btn.innerText = "Delete";
    span.appendChild(btn);
    pElement.appendChild(span);
    // console.log(btn);
    console.log(pElement);
    // listArray.push(pElement);
  }
  //   console.log(listArray);
  inputToDO.value = "";
  document.querySelector(".list").addEventListener("click", () => {
    toDoList.this.removeChild(pElement);
  });
}
function deleteBtn() {
  toDoList.removeChild(pElement);
}
//   console.log(pElement);

//   toDoList.appendChild(pElement);

// value of input
// create elemet
// add element using appendChild

// add value of input into child element