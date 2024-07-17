// 소수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12921
function solution(n) {
  let answer = 0;
  const primeArr = Array(n + 1).fill(true);
  primeArr[0] = primeArr[1] = false;

  for (let i = 2; i ** 2 <= n; i++) {
    if (primeArr[i]) {
      for (let j = i ** 2; j <= n; j += i) {
        primeArr[j] = false;
      }
    }
  }

  return primeArr.reduce((acc, cur) => acc + (cur ? 1 : 0));
}
