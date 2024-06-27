// 가운데 글자 가져오기
// https://school.programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
  if (s.length % 2 === 0) return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  else return s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
}
