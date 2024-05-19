// function solution(array, n) {
//   const processedArr = array
//     .sort((a, b) => a - b)
//     .map((val) => Math.abs(n - val));

//   return array[processedArr.indexOf(Math.min(...processedArr))];
// }

// ---

// function solution(order) {
//   return String(order).split('').reduce((acc, cur) => {
//     if (cur === '3' || cur === '6' || cur === '9') acc++;
//     return acc;
//   }, 0);
// }

// ---

// function solution(cipher, code) {
//   return cipher.split('').filter((letter, idx) => (idx + 1) % code === 0).join('');
// }

// ---

function solution(my_string) {
  return my_string
    .split('')
    .map((val) => {
      if (val === val.toUpperCase()) return val.toLowerCase();
      else return val.toUpperCase();
    })
    .join('');
}
