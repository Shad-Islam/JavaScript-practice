let str = "banana";
let vowel = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < vowel.length; j++) {
    if (str[i] === vowel[j]) {
      count++;
      break;
    }
  }
}

console.log(count);
