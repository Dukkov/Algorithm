// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918
function solution(s) {
  if (s.search(/^[a-zA-Z]/) >= 0) return false;

  if (s.length === 4 || s.length === 6) return true;

  return false;
}
