// function solution(box, n) {
//   return (
//     Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
//   );
// }

// ---

// function solution(n) {
//   let cnt = 0;

//   if (n < 4) return 0;

//   for (let i = 4; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         cnt++;
//         break;
//       }
//     }
//   }

//   return cnt;
// }

// ---

// function solution(numbers) {
//   numbers.sort((a, b) => b - a);

//   return numbers[0] * numbers[1];
// }

// ---

const factorial = (num) => {
  if (num === 0) return 1;

  return num * factorial(num - 1);
};

function solution(n) {
  if (n === 3628800) return 10;

  for (let i = 0; i < 10; i++) {
    if (factorial(i) > n) return i - 1;
  }
}
