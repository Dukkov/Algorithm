// 정수 제곱근 판별
// https://school.programmers.co.kr/learn/courses/30/lessons/12934
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1) ** 2 : -1;
}
