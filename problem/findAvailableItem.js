// Write a function getAvailableItems(obj) that returns a new object with only the items that have quantity greater than 0.

let items = {
  mango: 0,
  lichi: 7,
  banana: 5,
  orange: 0,
  apple: 10,
};

function getAvailableItems(obj) {
  let result = {};
  for (let item in obj) {
    if (obj[item] > 0) {
      result[item] = obj[item];
    }
  }
  return result;
}

console.log(getAvailableItems(items));

// sample code
// let obj = {
//   name: "Shad",
//   id: 319,
//   add: "Arambag",
// };

// let obj2 = {};
// obj2.name = obj.name;
