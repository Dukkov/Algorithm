// 3진법 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/68935
function solution(n) {
  const ternary = [];
  let answer = 0;

  while (n >= 3) {
    ternary.push(n % 3);
    n = Math.floor(n / 3);
  }
  ternary.push(n);

  for (let i = 0; ternary.length; i++) {
    answer += ternary.pop() * 3 ** i;
  }

  return answer;
}
