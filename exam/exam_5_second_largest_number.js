arr = [10, 20, 30, 40, 50];

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array must conatain 2 numbers.";
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }
  return secondMax === -Infinity ? "No second largest number" : secondMax;
}

console.log(findSecondLargest(arr));
