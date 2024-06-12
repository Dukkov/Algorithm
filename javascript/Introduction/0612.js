// function solution(A, B) {
//   if (A === B) return 0;

//   const aArr = A.split('');

//   for (let i = 1; i < aArr.length; i++) {
//     aArr.unshift(aArr.pop());
//     if (aArr.join('') === B) return i;
//   }

//   return -1;
// }

// ---

// function solution(M, N) {
//   return (M * N - 1);
// }

// ---

// function solution(num, total) {
//   const answer = Array(num).fill(0);
//   const firstNum =
//     num % 2 === 0
//       ? Math.ceil(total / num) - num / 2
//       : Math.floor(total / num) - Math.floor(num / 2);

//   return answer.map((_, idx) => firstNum + idx);
// }

// ---

function solution(common) {
  if (common[0] - common[1] === common[1] - common[2])
    return common.pop() + common[1] - common[0];
  if (common[0] / common[1] === common[1] / common[2])
    return common.pop() * (common[1] / common[0]);
}
