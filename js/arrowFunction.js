// console.log("Hello, World!");
showMessage();

function showMessage() {
  console.log("Hello world");
}

let showText = function () {
  console.log("hello js ");
};
showText();

// console.log(showMessage);
// console.log(showMessage());

(function () {
  console.log("iife = immediately invoked function expression");
})();

setTimeout(function () {
  console.log("after 2 sec");
}, 2000);

// arrow funtion
let add = function (a, b) {
  return a + b;
};

console.log(add(10, 10));

const addition = (a, b) => a + b;
console.log(addition(5, 5));
