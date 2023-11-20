//     const filteredArr = [
//       { name: "Narantsatsralt" },
//       { name: "Lkhagva" },
//     ].filter((el) => el.name.startsWith("asdasd"));

//     if (filteredArr.length === 0) {
//       // ilerts oldsongui
//     }

//     // loop
//     // render
//   });

// const array01 = [
//   "Cherry",
//   "Apple",
//   "Watermelon",
//   "Grape",
//   "Blueberry",
//   "Banana",
//   "Orange",
// ];
let array01 = [];
let ul = document.getElementsByTagName("li");
for (let i = 0; i < ul.length; i++) {
  array01.push(ul[i].innerHTML.toLowerCase());
  // console.log(array01);
}
// let a = [];
// for (let i = 0; i < array01.length; i++) {
//   a.push(array01[i].toLowerCase());
// }

let searching = document.getElementById("searchFruit");
searching.addEventListener("input", () => {
  //   let inputvalue = searching.value;
  const inputarray = array01.filter((el) => el.startsWith(searching.value));
  for (let i = 0; i < array01.length; i++) {
    if (inputarray == array01[i]) {
      document.getElementsByTagName("li")[i].style.display = "block";
    } else {
      document.getElementsByTagName("li")[i].style.display = "none";
    }
    if (searching.value == 0) {
      document.getElementsByTagName("li")[i].style.display = "block";
    }
  }

  // console.log(array01);

  console.log(inputarray);
});

// console.log(inputarray);
// const inputValue = document.getElementById("searchFruit").toLowerCase();
