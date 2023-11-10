// Easy
// -------------------------------
// Ascending order
// const obj = {
//     b:2, 
//     a:1, 
//     d:4,
//     c:3
// }
// const arr = Object.keys(obj).map((key) => [key, obj[key]])
// let change = 0
// for (let i = 0; i < arr.length; i++){
//     for (let j = i; j < arr.length; j++){
//         if (arr[i] == arr[j]){
//             continue;
//         }
//         if(arr[i] > arr[j]){
//             change = arr[i]
//             arr[i] = arr[j]
//             arr[j] = change
//         }
//         // console.log(arr[j])
//     } 
// }
// console.log(arr)
// for (k = 0; k< arr.length; k++){
//     console.log(arr[k][0])
// }

// Get Full Name
const obj = {
    LastName: "Ishtsog",
    FirstName: "Ider"
}
let LastName = Object.values(obj.LastName)
let FirstName = Object.values(obj.FirstName)
let StrLastName = LastName.toString().replaceAll(",","")
StrLastName = StrLastName.toUpperCase();
let StrFirstName = FirstName.toString().replaceAll(",","")
console.log(StrLastName, StrFirstName)

    

