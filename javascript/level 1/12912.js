// 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912
function solution(a, b) {
  if (a === b) return a;

  let answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
}
