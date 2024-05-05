// function solution(my_string, letter) {
//   const stringArr = [...my_string];

//   return stringArr.filter((char) => char !== letter).join('');
// }

// ---

// function solution(angle) {
//   if (angle < 90) return 1;
//   if (angle === 90) return 2;
//   if (angle < 180) return 3;

//   return 4;
// }

// ---

// function solution(n, k) {
//   return n * 12000 + (k - parseInt(n / 10)) * 2000;
// }

// ---

function solution(n) {
  const arr = [...Array(parseInt(n / 2) + 1)].map((v, i) => i * 2);

  return arr.reduce((acc, val) => acc + val, 0);
}
