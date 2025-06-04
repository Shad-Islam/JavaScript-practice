// Write a function that takes an object where all values are strings, and returns a new object with each string reversed.

// function reverseString(obj) {
//   let reversedObj = {};

//   for (let key in obj) {
//     const str = obj[key];
//     let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     reversedObj[key] = reversed;
//   }
//   return reversedObj;
// }

// let input = {
//   name: "Abrar",
//   city: "Dhaka",
// };

// let result = reverseString(input);
// console.log(result);

// Write a function that receives an object where values are strings. Return a new object with the same keys but values replaced by the number of vowels in the original strings.

// function countVowelInValues(obj) {
//   let vowel = "aeiouAEIOU";
//   let result = {};

//   for (key in obj) {
//     let str = obj[key];
//     let count = 0;

//     for (i = 0; i < str.length; i++) {
//       if (vowel.indexOf(str[i]) !== -1) count++;
//     }
//     result[key] = count;
//   }
//   return result;
// }

// let input = {
//   name: "Ridul",
//   city: "Cumila",
// };

// console.log(countVowelInValues(input));
