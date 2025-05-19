// let a = 10;
// let b = 20;
// function declare
// function showText() {
//   console.log(a + b);
//   console.log("Hello js");
// }
// function call
// showText();

// function addition( abc, bcd){
//     console.log(abc+bcd)
// }

// addition(909,20)

// let text = prompt("What is ur name?");
// function greetings(text) {
//   console.log(`${text}`);
// }
// greetings(text)

// let name = "Shad"
// let line = `hello ${name},how are u?`
// console.log(line)

// local veriable and outer veriable

// let name = "Shad";
// function showText() {
//   name = "Abrar";
//   console.log(name);
// }
// console.log(name);
// showText();

// outer variables
// let name = "Shad";
// function showText() {
//   name = "Abrar";
//   console.log(name);
// }
// console.log(name)//shad
// showText();//abrar
// console.log(name)//abrar

//local variable
// function showText() {
//  let  name = "Abrar";
//   console.log(name);
// }
// showText()
// console.log(name)

// default parameter//
// function showText(name, text = "Hello") {
//   console.log(name + " : " + text);
// }
// showText("Shad");

// function showText(name, text) {
//   if (text === undefined) {
//     text = "Abrar kisu dai nai";
//   }
//   console.log(name + " : " + text);
// }
// showText("Shad", "Hello js");

// function showText(name, text) {
//   text = text || "No text given";
//   console.log(name + " : " + text);
// }
// showText("Shad");

// function showText(name, text) {
//   console.log(name + " : " + text);
// }
// showText();

// return //
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(90,2));

// function doNothing() {}
// console.log(doNothing() === undefined);

// function expression

// function sayHi() {
//   console.log("Hello");
// }

// let sayHi = function () {
//   console.log("hello");
// };
// let func = sayHi
// func()


// function callback
// function ask(question, yes, no) {
//     let result = confirm(question);
//   if (result) yes();
//   else no();
// }

// function showOk() {
//   console.log("Yes, I agree");
// }
// function showCancel() {
//   console.log("Cancel the execution");
// }

// ask("Do you agree?", showOk, showCancel);


