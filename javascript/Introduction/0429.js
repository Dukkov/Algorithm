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

// const findMode = (map) => {
//   let modeValue = 0;
//   let largestKey;
//   let modeValueCnt = 0;

//   for (const [key, value] of map.entries()) {
//     if (value > modeValue) {
//       modeValue = value;
//       largestKey = key;
//       modeValueCnt = 1;
//     } else if (value === modeValue) {
//       modeValueCnt++;
//     }
//   }

//   if (modeValueCnt === 1) {
//     return largestKey;
//   } else {
//     return -1;
//   }
// };

// function solution(array) {
//   const valueMap = new Map();

//   array.forEach((value) => {
//     if (valueMap.has(value)) {
//       valueMap.set(value, valueMap.get(value) + 1);
//     } else {
//       valueMap.set(value, 1);
//     }
//   });

//   return findMode(valueMap);
// }

// ---

function solution(n) {
  const answer = [];

  for (let i = 0; 2 * i + 1 <= n; i++) {
    answer.push(2 * i + 1);
  }

  return answer;
}
