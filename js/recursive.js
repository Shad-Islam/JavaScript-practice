// function sum(n) {
//   if (n === 1) {  //base case
//     return 1;
//   }

//   return n + sum(n - 1);  //recursive case
// }

// let n = 5;
// console.log(sum(n));

// function printNumber(number) {
//   if (number === 0) return;
//   printNumber(number - 1);
//   console.log(number);
// }
// printNumber(5);

// let arr = [2, 4, 6, 8, 10];

// const person = {
//   name: "Shad",
//   info: {
//     age: 26,
//     address: {
//       city: "Dhaka",
//       homeTown: "Khulna",
//     },
//   },
// };

// function printObj(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       printObj(obj[key]); //recursive case
//     } else {
//       console.log(`${key}: ${obj[key]}`);
//     }
//   }
// }

// printObj(person);

// output :
// name : Shad
// age : 26
// city : Dhaka
// homeTown : Khulna

// tail recursive
function factorialTail(n, acc) {
  if (n == 0) return acc; // base case
  return factorialTail(n - 1, n * acc); //recursive case
}

console.log(factorialTail(5, 1));

// non-tail recursive
function factorialTail(n) {
  if (n == 0) return 1; // base case
  return n * factorialTail(n-1); //recursive case
}

console.log(factorialTail(5));
