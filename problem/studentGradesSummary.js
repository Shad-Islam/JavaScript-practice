// You are given an array of student objects. Each student object contains the student's name and an array of scores.
// Write a function calculateAverage(scoreArray) that returns the average of an array of numbers.

// Write another function printStudentSummary(studentsArray) that:

// Loops through the array of student objects.

// For each student, calculates their average score using calculateAverage.

// Logs their name and average score in this format:
// You

// Bonus Task:
// Add a condition that marks any student with an average score below 75 as "Needs Improvement".

const students = [
  { name: "Korim", scores: [95, 80, 70] },
  { name: "Rorim", scores: [55, 60, 70] },
  { name: "Joshim", scores: [100, 80, 70] },
];

function calculateAverage(scoreArray) {
  let total = 0;
  for (let i = 0; i < scoreArray.length; i++) {
    total += scoreArray[i];
  }
  return (total / scoreArray.length).toFixed(2);
}

function printStudentSummary(studentsArray) {
  for (let i = 0; i < studentsArray.length; i++) {
    let student = studentsArray[i];
    let average = calculateAverage(student.scores);

    let message = `${student.name}'s average score is ${average}`;
    if (average < 75) {
      message += " -Needs Improvement";
    }
    console.log(message);
  }
}

printStudentSummary(students);
