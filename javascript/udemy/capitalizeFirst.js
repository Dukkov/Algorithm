function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  } else {
    return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)].concat(
      capitalizeFirst(arr.slice(1))
    );
  }
}
