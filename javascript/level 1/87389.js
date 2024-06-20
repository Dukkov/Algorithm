// 나머지 1이 되는 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/87389
function solution(n) {
  for (let i = 2; i < n; i++) {
    if ((n - 1) % i === 0) return i;
  }
}
