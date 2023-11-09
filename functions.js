// 3 -ын зэрэг дэвшүүлнэ үү
// function findCube(x) {
//   return x ** 3;
// }
// console.log("Гурвын гурван зэрэг нь:", findCube(3));

// // Гурвалжны талбай олох
// function findArea(a, b, c) {
//   let s = (a + b + c) / 2;
//   let area = Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
//   console.log("Гурвалжны нийт талбай:", area);
// }
// findArea(5, 6, 8);

// Давхцал
const string = "aabbccd";
function erase(string) {
  const array = string.split("");
  for (let i = 0; i <= array.length; i++) {
    for (let j = i; j <= array.length; j++) {
      if (array[i] == array[j]) {
        array.splice[(j, 1)];
        return array;
      }
      console.log(array);
    }
  }
}

// function erase() {
//   for (let i = 0; i <= array.length; i++) {
//     for (let j = i; j <= array.length; j++) {
//       if (array[i] == array[j]) {
//         array.splice(i, i);
//         return array;
//       }
//     }
//   }
// }
// console.log(array);

// // X2+5x+6
// function logic(x) {
//   let answer = x ** 2 + 5 * x + 6;
//   return answer;
// }
// console.log(logic(6));
