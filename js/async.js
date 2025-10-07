const doSomething = () => {
  console.log("Doing something...");

  setTimeout(() => {
    console.log("Done something after 5 seconds");
  }, 5000);
};

console.log("Start");
doSomething();
console.log("End");
