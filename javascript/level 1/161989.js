// 덧칠하기
// https://school.programmers.co.kr/learn/courses/30/lessons/161989
function solution(n, m, section) {
  let start;
  let answer = 0;

  while (section.length) {
    start = section.pop();
    answer++;

    while (section.at(-1) > start - m) {
      section.pop();
    }
  }

  return answer;
}
