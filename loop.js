// 1 to 100
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// Өгөгдсөн тооны бүх тэгш тооны нийлбэрийг ол
// let number = 35;
// let sum = 0;
// for (let i = 0; i <= 35; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// N number sum - Өгсөн тооны бүх нийлбэрийг ол
// let number = 35;
// let sum = 0;
// for (let i = 0; i <= number; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// // 1000-с дээш тооны зэргийг олох
// let number = 3;
// let answer = 0;
// for (let i = 0; i <= 10; i++) {
//   let multiple = 0;
//   multiple = number ** i;
//   if (multiple >= 1000) {
//     console.log(multiple);
//   }
// }

// Bubble sort first pass
// let numbers = [6, 2, 15, 21, 12, 5, 0];
// let digit = 0;
// for (i = 0; i <= numbers.length; i++) {
//   for (j = i; j <= numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       digit = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = digit;
//     }
//   }
// }
// console.log(numbers);
/* Bubble sort second pass */
// let swap = 0;
// swap = numbers[0];
// numbers[0] = numbers[1];
// numbers[1] = swap;
// console.log(numbers);
/* Bubble sort third pass */
// let swap = 0;
// swap = numbers[0];
// numbers[0] = numbers[2];
// numbers[2] = numbers[1];
// numbers[1] = swap;
// console.log(numbers);

// Largest difference between any two numbers
// let numbers = [6, 2, 15, 21, 12, 5, 3];
// let digit = 0;
// for (i = 0; i < numbers.length; i++) {
//   for (j = i; j <= numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       digit = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = digit;
//     }
//   }
// }
// console.log(numbers);
// let decrease = 0;
// let answer = 0;
// decrease = numbers[i - 1] - numbers[0];
// console.log(decrease);

// Left pyramid pattern
// let dollar = "$"
// for (let i=0; i <= 5; i++){
//     let sum = ""
//     for (let j=i ; j <= 5; j++ ){
//         sum += "$" 
//     }console.log(sum)
// }

// Min Operations
// const numbers = [1,2,3,4,5,6,7]
// let sum =0
// let average = 0
// let uildel = 0
// let uildel01 = 0
// let totaluildel = 0
// for (let i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i]
//     average = sum / numbers.length
// }
// for(let j = 0; j < average; j++){
//     uildel += 1
//     console.log(uildel)
// }
// for(let k = numbers.length; k >= average; k--){
//     uildel01 +=1  
//     console.log(uildel01)
// }  totaluildel = uildel + uildel01
// console.log(totaluildel)