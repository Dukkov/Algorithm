// function solution(str1, str2) {
//   return str1.includes(str2) ? 1 : 2;
// }

// ---

// function solution(n) {
//   return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
// }

// ---

// function solution(n, t) {
//   return n * Math.pow(2, t);
// }

// ---

function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join('');
}
