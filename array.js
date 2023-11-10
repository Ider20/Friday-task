// Average
// const numbers = [10, 20, 30, 40, 55]
// let sum = 0
// let average = 0
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// }average = sum/numbers.length
// console.log(average)

// const numbers = [10, 20, 30, 40, 50]
// numbers.pop(4)
// numbers.push(30)
// console.log(numbers)

// let sum = 0;
// const numbers = [2, -3, 5, 6, -8, 10];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0 && numbers[i] % 2 == 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

// let min = 0;
// const numbers = [6, 3, 5, 22, 46, 17, 1];
// console.log(
//   Math.max(
//     numbers[0],
//     numbers[1],
//     numbers[2],
//     numbers[3],
//     numbers[4],
//     numbers[5],
//     numbers[6]
//   )
// );
// console.log(
//   Math.min(
//     numbers[0],
//     numbers[1],
//     numbers[2],
//     numbers[3],
//     numbers[4],
//     numbers[5],
//     numbers[6]
//   )
// );

// Chunk
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let chunk = 4
// const new_numbers = []
// for (let i = 0; i < numbers.length; i+=chunk){
//   new_numbers.push(numbers.slice(i,i+chunk))
// }console.log(new_numbers)

// Sort an array
// const numbers = [8, 1, 3, 10, 5, 6, 7];
// for (let i = 0; i < numbers.length; i++) {
//   // let max = 0
//   for (let j = 0; j < numbers.length; j++) {
//     if (numbers[i] < numbers[j]) {
//       let max = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = max;
//     }
//   }
// }
// console.log(numbers);

// Find max and min
// const numbers = [1, 3, 5, 22, 89, 46, 17, 31];
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i; j < numbers.length; j++) {
//     if (numbers[i] < numbers[j]) {
//       let min = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = min;
//     }
//   }
// }
// let min = numbers.length - 1;
// console.log("Min number is -", numbers[min]);
// console.log("Max number is -", numbers[0]);
