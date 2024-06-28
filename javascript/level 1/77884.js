// 약수의 개수와 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/77884
const divisorCnt = (num) => {
  const countArr = [];
  let count = 0;

  for (let i = 2; num > 1; i++) {
    while (num % i === 0) {
      num /= i;
      count++;
    }
    countArr.push(count);
    count = 0;
  }

  return countArr.reduce((acc, cur) => (acc *= cur + 1), 1);
};

function solution(left, right) {
  let answer = 0;
  let count;

  for (let i = left; i <= right; i++) {
    count = divisorCnt(i);
    answer += count % 2 === 0 ? i : -i;
  }

  return answer;
}
