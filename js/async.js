// const doSomething = () => {
//   console.log("Doing something...");
//   let currentTime = new Date().getTime();
//   while (currentTime + 5000 >= new Date().getTime()) {}
//   console.log("Done something after 5 seconds");
// };

// console.log("Start");
// doSomething();
// console.log("End");

// asynchronous //

// const doSomething = () => {
//   console.log("Doing something...");

//   setTimeout(() => {
//     console.log("Done something after 5 seconds");
//   }, 5000);
// };

// console.log("Start");
// doSomething();
// console.log("End");

// callback hell //

// const startWork = (user, callback) => {
//   console.log("Start");
//   callback(user);
// };

// const doSomething = (user, callback) => {
//   console.log("Doing something...");

//   setTimeout(() => {
//     console.log("Done something after 5 seconds");
//     console.log("End");
//     callback(user);
//   }, 5000);
// };

// const completeWork = (user) => {
//   console.log(`All work completed for ${user}`);
// };

// startWork("Abrar", (user) => {
//   doSomething(user, (user) => {
//     completeWork(user);
//   });
// });

// console.log("Hello world");

// Promise //

const startWork = (user) => {
  console.log("Start");
  return Promise.resolve(user);
};

const doSomething = (user) => {
  console.log("Doing something...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Done something after 5 seconds");
      console.log("End");
      resolve(user);
    }, 5000);
  });
};

const completeWork = (user) => {
  console.log(`All work completed for ${user}`);
  return Promise.resolve();
}

startWork("Abrar")
  .then(doSomething)
  .then(completeWork)
  .catch((error) => {
    console.error("Error:", error);
  })

  console.log("Hello world");