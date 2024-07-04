// 삼총사
// https://school.programmers.co.kr/learn/courses/30/lessons/131705
function solution(number) {
  let answer = 0;

  for (let low = 0; low < number.length - 2; low++) {
    for (let mid = low + 1; mid < number.length - 1; mid++) {
      for (let high = mid + 1; high < number.length; high++) {
        if (number[low] + number[mid] + number[high] === 0) answer++;
      }
    }
  }

  return answer;
}
