// Write a function getTopStudent(obj) that returns the name of the student with the highest average skill level.

// avg = add all input then divided number of inputs


function getTopStudent(obj) {
  let topStudent = "";
  let highestAvg = 0;

  for (let student in students) {
    let scores = obj[student];

    let total = 0;

    for (let i = 0; i < scores.length; i++) {
      total += scores[i];
    }

    let avg = total / scores.length;

    if (avg > highestAvg) {
      highestAvg = avg;
      topStudent = student;
    }
  }

  return topStudent;
}

let students = {
  Ridul: [10, 9, 5, 10],
  Abrar: [10, 9, 8, 0, 2],
  Shanto: [8, 10, 5, 7],
};

console.log(getTopStudent(students));
