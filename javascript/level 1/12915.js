// 문자열 내 마음대로 정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a.charAt(n) < b.charAt(n) || (a.charAt(n) === b.charAt(n) && a < b))
      return -1;
  });
}
