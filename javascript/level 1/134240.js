// 푸드 파이트 대회
// https://school.programmers.co.kr/learn/courses/30/lessons/134240
function solution(food) {
  const answer = [];

  food.forEach((num, idx) => {
    if (idx > 0) {
      while (num > 1) {
        answer.push(idx);
        num -= 2;
      }
    }
  });

  return answer.join('').concat('0').concat(answer.reverse().join(''));
}
