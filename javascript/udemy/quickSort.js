const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pivotIdx = pivot(arr, start, end);

    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }

  return arr;
};

console.log(quickSort([1, 5, 10, 2, 3, 6]));
