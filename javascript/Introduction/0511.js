// function solution(my_string) {
//   return [...my_string]
//     .filter(
//       (char) =>
//         char !== 'a' &&
//         char !== 'e' &&
//         char !== 'i' &&
//         char !== 'o' &&
//         char !== 'u'
//     )
//     .join('');
// }

// ---

// function solution(my_string) {
//   return [...my_string.replace(/[^\d]/g, '')]
//     .sort((a, b) => a - b)
//     .map(Number);
// }

// ---

// function solution(my_string) {
//   return [...my_string.replace(/[^\d]/g, '')].reduce(
//     (acc, val) => acc + Number(val),
//     0
//   );
// }

// ---

function solution(n) {
  const answer = new Set();

  for (let divisor = 2; n > 1; divisor++) {
    if (n % divisor === 0) {
      answer.add(divisor);
      n /= divisor;
      divisor = 1;
    }
  }

  return [...answer];
}
