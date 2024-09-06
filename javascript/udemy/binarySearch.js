function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  let idx;

  while (low <= high) {
    idx = Math.floor((low + high) / 2);

    if (arr[idx] === val) return idx;
    else if (arr[idx] < val) low = idx + 1;
    else high = idx;
  }

  return -1;
}
