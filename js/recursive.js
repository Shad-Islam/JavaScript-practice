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

let arr = [2, 4, 6, 8, 10];

const person = {
  name: "Shad",
  info: {
    age: 26,
    address: {
      city: "Dhaka",
      homeTown: "Khulna",
    },
  },
};

function printObj(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      printObj(obj[key]);//recursive case 
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

printObj(person)

// output :
// name : Shad
// age : 26
// city : Dhaka
// homeTown : Khulna
