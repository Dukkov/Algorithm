// 정수 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12933
function solution(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
