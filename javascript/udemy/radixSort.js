const getDigit = (num, digit) => {
  return Math.floor(Math.abs(num) / 10 ** digit) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (arr) => {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
};

const radixSort = (arr) => {
  const maxDigitCnt = mostDigits(arr);

  for (let i = 0; i < maxDigitCnt; i++) {
    let bucket = new Array(10).fill().map(() => []);

    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }

    arr = [].concat(...bucket);
  }

  return arr;
};

console.log(radixSort([10, 3, 2, -1, 8, 6, 50]));
