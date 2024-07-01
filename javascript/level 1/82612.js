// 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/82612
function solution(price, money, count) {
  const result = price * ((count * (count + 1)) / 2);

  return result < money ? 0 : result - money;
}
