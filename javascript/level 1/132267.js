// 콜라 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267
function solution(a, b, n) {
  let empty = n;
  let filled = 0;

  while (empty >= a) {
    empty -= a;
    filled += b;
    empty += b;
  }

  return filled;
}
