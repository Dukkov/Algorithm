// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916
function solution(s) {
  const lowStr = s.toLowerCase();

  return lowStr.split('p').length - 1 === lowStr.split('y').length - 1
    ? true
    : false;
}
