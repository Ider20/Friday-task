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
// erase("aaaabbbcccd")
// function erase(string) {
//   const array = string.split("");
//   let l = array.length ;
//   for (let i = 0; i <= l; i++) {
//     for (let j = 0; j <= l; j++) {
//       if (array[i] == array[j]) {
//         if(i == j){
//           continue;
//         }
//         array.splice(j, 1)
//      }
//     }
//    }
// console.log(array);
// return array;
// }

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

// Find the longest word?????????
// findLongestWord("The quick brown fox jumps over the lazy dog");
// function findLongestWord(words) {
//   const wordsArray = words.split(" ");
//   console.log(wordsArray);
//   let longWord = "";
//   for (let i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i].length > longWord) {
//       console.log(wordsArray[i].length);
//       longWord = wordsArray[i].length;
//       console.log(longWord);
//     }
//   }
//   console.log(wordsArray[longWord]);
//   return longWord;
// }

// Mini calculator
// function miniCalc(x, y) {
//   let sum = x + y;
//   let minus = x - y;
//   return [sum, minus];
// }
// console.log(miniCalc(10, 4));

// Palendrom words --------------------------
// function palindrome(string) {
//   let strArray = string.split("");
//   let reverseArray = strArray.reverse();
//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i] == reverseArray[i]) {
//       console.log("palendrome");
//     }
//   }
// }

// palindrome("raceca");
// function palindrome(str) {
//   const len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       console.log("It is not a palindrome");
//     } else {
//       console.log("It is a palindrome");
//     }
//   }
// }

// Remove vowels
// removeVowels("I like Pinecone");
// function removeVowels(words) {
//   let remove = 0;
//   remove = words.replace(/[aeiou]/gi, "");
//   console.log(remove);
// }
