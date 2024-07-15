// 기사단원의 무기
// https://school.programmers.co.kr/learn/courses/30/lessons/136798
const divisorCounter = (num) => {
  let count = 0;

  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) count++;
  }

  count *= 2;

  return num % Math.sqrt(num) === 0 ? count + 1 : count;
};

function solution(number, limit, power) {
  let answer = 0;
  let atk;

  for (let i = 1; i <= number; i++) {
    atk = divisorCounter(i);
    if (atk > limit) answer += power;
    else answer += atk;
  }

  return answer;
}
