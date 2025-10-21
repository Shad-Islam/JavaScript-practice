const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve promise after 5 seconds");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve promise 2 after 2 seconds");
  }, 2000);
});

// promise1.then((message) => {
//   console.log(message);
// });

// promise2.then((message) => {
//   console.log(message);
// });

Promise.race([promise1, promise2]).then((messages) => {
  console.log("All promises resolved:", messages);
});
console.log("Promise.race example:");
