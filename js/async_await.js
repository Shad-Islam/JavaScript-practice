async function normalFunction() {
  return "Hello, World!";
}

console.log(normalFunction());


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
};

async function job(user) {
  try {
    const first = await startWork(user);
    const second = await doSomething(first);
    await completeWork(second);
  } catch (error) {
    console.error("Error:", error);
  }
}

job("Abrar");
console.log("Hello world");
