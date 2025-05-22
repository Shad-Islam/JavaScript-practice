// Use a loop to draw a pyramid using each character. Repeat each character based on its value.

let drawPyramid = {
  o: 3,
  c: 5,
  "*": 6,
};

for (let character in drawPyramid) {
  let limit = drawPyramid[character];
  for (let i = 1; i <= limit; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
      line += character;
    }
    console.log(line);
  }
}
