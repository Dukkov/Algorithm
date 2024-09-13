function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i];
      let j = i - 1;

      for (; j >= 0 && arr[j] > temp; j--) {
        arr[j + 1] = arr[j];
      }

      arr[j + 1] = temp;
    }
  }

  return arr;
}

console.log(insertionSort([7, 8, 1, 2, 3, 10]));
