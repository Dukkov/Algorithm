// 수박수박수박수박수박수?
// https://school.programmers.co.kr/learn/courses/30/lessons/12922
function solution(n) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(i % 2 === 0 ? '수' : '박');
  }

  return answer.join('');
}
