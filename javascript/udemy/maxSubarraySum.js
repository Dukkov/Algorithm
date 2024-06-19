function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let low = 0;
  let high = num - 1;
  let maxSum = 0;

  for (let i = 0; i <= high; i++) {
    maxSum += arr[i];
  }

  let tmpSum = maxSum;

  while (high < arr.length - 1) {
    tmpSum = tmpSum - arr[low++] + arr[++high];
    maxSum = Math.max(maxSum, tmpSum);
  }

  return maxSum;
}
