// function solution(array) {
//   const arrayString = array.join('');

//   return arrayString.split('').reduce((acc, cur) => {
//     if (cur === '7') acc += 1;

//     return acc;
//   }, 0);
// }

// ---

// function solution(my_str, n) {
//   const answer = [];

//   for (let i = 0; i < my_str.length; i += n) {
//     answer.push(my_str.slice(i, i + n));
//   }

//   return answer;
// }

// ---

// function solution(array, n) {
//   return array.reduce((acc, cur) => {
//     if (cur === n) acc++;

//     return acc;
//   }, 0);
// }

// ---

function solution(array, height) {
  return array.reduce((acc, cur) => {
    if (cur > height) acc++;

    return acc;
  }, 0);
}
