function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false;

  const numMap = new Map();

  num1
    .toString()
    .split('')
    .forEach((val) => {
      numMap.set(val, (numMap.get(val) || 0) + 1);
    });

  for (let val of num2.toString()) {
    if (!numMap.has(val) || numMap.get(val) === 0) return false;
    numMap.set(val, numMap.get(val) - 1);
  }

  return true;
}
