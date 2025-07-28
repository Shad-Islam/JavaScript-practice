function bubbleSort(arr) {
  let n = arr.length;
  let swap = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap++;
      }
    }
  }
  console.log(`Total swaps: ${swap}`);
  console.log(`First element: ${arr[0]}`);
  console.log(`Last element: ${arr[n - 1]}`);
  return arr;
}

let arr = [3, 2, 1];
console.log(bubbleSort(arr));
