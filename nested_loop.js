// Easy
// Draw square
// 1)
// for (let i = 0; i < 5; i++) {
//   let sum = "$";
//   for (let j = 1; j < 5; j++) {
//     sum += "$";
//   }
//   console.log(sum);
// }

// 2)
// for (let i = 0; i < 5; i++) {
//   let sum = "$";
//   if (i == 2) {
//     sum = sum.replace("$", "");
//   }
//   for (let j = 0; j < 4; j++) {
//     sum += "$";
//     if (i == 2 && j == 1) {
//       sum = sum + "+";
//       continue;
//     }
//   }
//   console.log(sum);
// }

// 3)
// for (let i = 0; i < 5; i++) {
//   let sum = "";
//   for (let j = 1; j < 5; j++) {
//     sum += "$";
//     if (j == 2) {
//       sum = sum + "+";
//     }
//   }
//   console.log(sum);
// }

// 4)
// for (let i = 0; i < 5; i++) {
//   let sum = "";
//   for (let j = 0; j < 5; j++) {
//     sum += "$";
//     if (i == 2) {
//       sum = sum.replace("$", "*");
//     }
//   }
//   console.log(sum);
// }

// 5)
// for (let i = 0; i < 5; i++) {
//   let sum = "";
//   for (let j = 1; j < 5; j++) {
//     sum += "$";
//     if (i == 2) {
//       sum = sum.replace("$", "+");
//     }
//     if (j == 2) {
//       sum = sum + "+";
//     }
//   }
//   console.log(sum);
// }

// ------------------------------------------------

// Medium
// Draw triangle

// 1)
// let sum = "";
// for (i = 0; i < 5; i++) {
//   for (j = 0; j < 1; j++) {
//     sum = sum + "$";
//   }
//   console.log(sum);
// }

// 2)
// for (i = 0; i < 5; i++) {
//   let sum = "";
//   for (j = i; j < 5; j++) {
//     sum = sum + "$";
//   }
//   console.log(sum);
// }

// 3)
let n = 5;
for (let i = 0; i < n; i++) {
  //1.
  let sum = "";
  for (let j = 0; j < i; j++) {
    //
    sum = sum + " ";
  }
  for (let k = 0; k < n - i; k++) {
    sum = sum + "$";
  }
  console.log(sum);
}
