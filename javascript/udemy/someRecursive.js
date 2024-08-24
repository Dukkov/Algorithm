const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (arr.length === 1) return callback(arr.pop());
  return callback(arr.pop()) || someRecursive(arr, callback);
}
