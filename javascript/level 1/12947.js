// 하샤드 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947
function solution(x) {
  return x %
    x
      .toString()
      .split('')
      .reduce((acc, cur) => (acc += Number(cur)), 0) ===
    0
    ? true
    : false;
}
