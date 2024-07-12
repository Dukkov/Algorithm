// 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
  const answer = [];
  const loser1 = [1, 2, 3, 4, 5];
  const loser2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const loser3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const answerCnt = Array(3).fill(0);
  let maxCnt;

  answers.forEach((val, idx) => {
    if (val === loser1[idx % 5]) answerCnt[0]++;
    if (val === loser2[idx % 8]) answerCnt[1]++;
    if (val === loser3[idx % 10]) answerCnt[2]++;
  });

  maxCnt = Math.max(...answerCnt);

  answerCnt.forEach((val, idx) => {
    if (val === maxCnt) answer.push(idx + 1);
  });

  return answer;
}
