let numbers = [100, 2, 3, 577, 43, 28, 0];

let heigherNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (heigherNumber < numbers[i]) {
    heigherNumber = numbers[i];
  }
}

console.log(heigherNumber);
