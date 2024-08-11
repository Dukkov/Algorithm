// 옹알이 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/133499
function solution(babbling) {
  const words = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((acc, cur) => {
    let low = 0;
    let high = low + 1;
    let curWord;
    let usedWord;

    while (high < cur.length) {
      curWord = cur.slice(low, high + 1);

      if (usedWord !== curWord && words.includes(curWord)) {
        low = high + 1;
        high = low + 1;
        usedWord = curWord;
      } else high++;
    }

    if (low === cur.length) return acc + 1;
    else return acc;
  }, 0);
}
