// 약수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12928
function solution(n) {
  const divisors = new Set();

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }

  return Array.from(divisors).reduce((acc, cur) => (acc += cur), 0);
}
