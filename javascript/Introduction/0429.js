// function solution(num1, num2) {
//   return num1 % num2;
// }

// ---

// function solution(array) {
//   const arrayLen = array.length;
//   array.sort((a, b) => a - b);

//   return array[parseInt(arrayLen / 2)];
// }

// ---

function solution(array) {
  const valueMap = new Map();

  array.forEach((value) => {
    if (valueMap.has(value)) {
      const origin = valueMap.get(value);

      valueMap.set(value, ++origin);
    }

    valueMap.set(value, 1);
  });
}
