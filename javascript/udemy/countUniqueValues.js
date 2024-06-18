// time: O(n), space: O(n)
function countUniqueValues(arr) {
  const valSet = new Set();

  arr.forEach((val) => {
    valSet.add(val);
  });

  return valSet.size;
}

// time: O(n), space: O(1)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) arr[++i] = arr[j];
  }

  return i + 1;
}
