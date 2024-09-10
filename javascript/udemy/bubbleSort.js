function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let sortFlag = true;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sortFlag = false;
      }
    }

    if (sortFlag) break;
  }

  return arr;
}

console.log(bubbleSort([37, 2, 18, 1, 6, 10, 9, 8, 11]));
