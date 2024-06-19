// time: O(n^2), space: O(1)
function averagePair(arr, num) {
  if (arr.length < 2) return false;

  let i = arr.length - 1;

  for (let j = i - 1; i > 1; j--) {
    if (arr[i] > num * 2 || arr[i] + arr[j] < num * 2) {
      i--;
      j = i;
      continue;
    }

    if (arr[i] + arr[j] > num * 2) continue;

    if (arr[i] + arr[j] === num * 2) return true;
  }

  return false;
}

// time: O(n), space: O(1)
function averagePair(arr, num) {
  if (arr.length < 2) return false;

  let low = 0;
  let high = arr.length - 1;

  while (high > low) {
    if (arr[low] + arr[high] === num * 2) return true;

    if (arr[low] + arr[high] > num * 2) high--;

    if (arr[low] + arr[high] < num * 2) low++;
  }

  return false;
}
