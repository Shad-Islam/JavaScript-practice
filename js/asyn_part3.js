// 1. question:
// console.log('A')
// setTimeout(() => {
//   console.log('B')
// }, 0)
// console.log('C')

// answer: A C B

// 2. question:
// Start
// Loading ...
// Done!
// write a program using setTimeout

// answer

console.log("Start");

setTimeout(() => {
  console.log("Loading...");
}, 0);

setTimeout(() => {
  console.log("Done");
}, 1000);

// console.log("Start");

// setTimeout(() => {
//   console.log("Loading...");

//   setTimeout(() => {
//     console.log("Done!");
//   }, 1000);
// }, 1000);

// Question 4
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D")

// answer ADCB

// Question 5 convert this callback - based code into a Promise based version

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData((msg) => console.log(msg));

// answer

