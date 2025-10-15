console.log("Promise Example");

const myPromise = new Promise((resolve, reject) => {
  const success = true; // Change to false to test rejection
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 2000);
});


myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise has been settled (either resolved or rejected).");
  });   