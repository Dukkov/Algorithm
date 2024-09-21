const merge = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }

  while (i < arr1.length) {
    result.push(arr1[i++]);
  }

  while (j < arr2.length) {
    result.push(arr2[j++]);
  }

  return result;
};

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  return merge(
    mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
    mergeSort(arr.slice(Math.floor(arr.length / 2)))
  );
}

console.log(mergeSort([5, 3, 2, 7, 9, 1]));
