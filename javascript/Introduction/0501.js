// function solution(n) {
//   return Math.ceil(n / 7);
// }

// ---

// const findGCD = (a, b) => a % b ? findGCD(b, a % b) : b;

// const findLCM = (a, b) => a * b / findGCD(a, b);

// function solution(n) {
//   return findLCM(n, 6) / 6;
// }

// ---

// function solution(slice, n) {
//   return Math.ceil(n / slice);
// }

// ---

function solution(numbers) {
  return (
    numbers.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / numbers.length
  );
}
