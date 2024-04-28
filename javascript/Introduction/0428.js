// function solution(num1, num2) {
//   return num1 + num2;
// }

// ---

// function solution(num1, num2) {
//   return num1 - num2;
// }

// ---

// function solution(num1, num2) {
//   return num1 * num2;
// }

// ---

// function solution(num1, num2) {
//   return parseInt(num1 / num2);
// }

// ---

// function solution(num1, num2) {
//   return parseInt((num1 / num2) * 1000);
// }

// ---

// function solution(num1, num2) {
//   if (num1 === num2) return 1;
//   return -1;
// }

// ---

// const findGCD = (a, b) => a % b ? findGCD(b, a % b) : b;

// const findLCM = (a, b) => a * b / findGCD(a, b);

// function solution(numer1, denom1, numer2, denom2) {
//   let denom3 = findLCM(denom1, denom2);
//   let numer3 = (numer1 * (denom3 / denom1)) + (numer2 * (denom3 / denom2));
//   const gdc = findGCD(numer3, denom3);

//   if (gdc === 1) return [numer3, denom3];
//   return [numer3 / gdc, denom3 / gdc];
// }

// ---

function solution(numbers) {
  numbers.map((value) => value * 2);

  return numbers;
}
