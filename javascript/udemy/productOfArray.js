function productOfArray(arr) {
  if (arr.length === 1) {
    return arr.pop();
  } else {
    return arr.pop() * productOfArray(arr);
  }
}
