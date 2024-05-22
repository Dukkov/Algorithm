// function solution(num, k) {
//   const answer = num.toString().indexOf(k.toString());

//   return answer === -1 ? -1 : answer + 1;
// }

// ---

// function solution(n, numlist) {
//   return numlist.filter((val) => val % n === 0);
// }

// ---

// function solution(n) {
//   const nArr = Array.from(n.toString());

//   return nArr.reduce((acc, cur) => acc + Number(cur), 0);
// }

// ---

const calculator = (str) => {
  const [x, operator, y, , z] = str.split(' ');

  if (operator === '+') return Number(x) + Number(y) === Number(z) ? 'O' : 'X';
  else return Number(x) - Number(y) === Number(z) ? 'O' : 'X';
};

function solution(quiz) {
  const answer = quiz.map((str) => calculator(str));

  return answer;
}
