// 크기가 작은 부분문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355
function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    if (Number(t.substring(i, i + p.length)) <= Number(p)) answer++;
  }

  return answer;
}
