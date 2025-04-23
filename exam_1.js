// question 1 
// Write a program that takes the hour (0–23) as input and prints:

// "Good Morning" if 5–11

// "Good Afternoon" if 12–16

// "Good Evening" if 17–20

// "Good Night" if 21–4

//  Use if-else for this.

// answer 

if (hour >= 5 && hour <= 11) {
    console.log("Good Morning");
  } else if (hour >= 12 && hour <= 16) {
    console.log("Good Afternoon");
  } else if (hour >= 17 && hour <= 20) {
    console.log("Good Evening");
  } else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour <= 4)) {
    console.log("Good Night");
  } else {
    console.log("Invalid hour input");
  }




//   Question 2 

// Given a number n:

// If it's odd, print "Weird".

// If it's even and in the range 2–5, print "Not Weird".

// If it's even and in the range 6–20, print "Weird".

// If it's even and greater than 20, print "Not Weird".

// Use if-else.

if (n % 2 !== 0) {
    console.log("Weird");
  } else if (n >= 2 && n <= 5) {
    console.log("Not Weird");
  } else if (n >= 6 && n <= 20) {
    console.log("Weird");
  } else if (n > 20) {
    console.log("Not Weird");
  } else {
    console.log("Invalid input");
  }