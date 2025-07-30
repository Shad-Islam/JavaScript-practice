let array = [7, 3, 10, 9, 23, 12, 6];

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n ; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(array));



// pass 1
// [3        ,7,10,9,23,12,6]
// pass 2
// [3,6        ,10,9,23,12,7]
// pass 3
// [3,6,7        ,9,23,12,10]
// pass 4
// [3,6,7,9     ,23,12,10]
// pass 5
// [3,6,7,9,10     ,12,23]
// pass 6
// [3,6,7,9,10,12     ,23]
// pass 7
// [3,6,7,9,10,12,23]

