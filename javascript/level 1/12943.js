// 콜라츠 추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
  if (num === 1) return 0;

  for (let i = 1; i < 501; i++) {
    if (num % 2 === 0) {
      num /= 2;

      if (num === 1) return i;
    } else num = num * 3 + 1;
  }

  return -1;
}
