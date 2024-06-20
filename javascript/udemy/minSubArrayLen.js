function minSubArrayLen(arr, num) {
  let low = 0;
  let high = 0;
  let sum = arr[0];
  let minLen = Infinity;

  while (high < arr.length && low <= high) {
    if (sum < num) sum += arr[++high];

    if (sum >= num) {
      minLen = Math.min(minLen, high - low + 1);
      sum -= arr[low++];
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
