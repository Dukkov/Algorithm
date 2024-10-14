// function solution(num1, num2) {
//   return num1 + num2;
// }

// ---

// function solution(num1, num2) {
//   return num1 - num2;
// }

// ---

// function solution(num1, num2) {
//   return num1 * num2;
// }

// ---

// function solution(num1, num2) {
//   return parseInt(num1 / num2);
// }

// ---

// function solution(num1, num2) {
//   return parseInt((num1 / num2) * 1000);
// }

// ---

// function solution(num1, num2) {
//   if (num1 === num2) return 1;
//   return -1;
// }

// ---

function solution(num, k) {
  const N = num.length;
  const K = k + 1; // Total numbers can be up to k + 1
  const MOD = 1e9 + 7;
  const LMAX = 10; // Maximum length of number to consider
  const dp = Array.from({ length: N + 1 }, () => Array(K + 2).fill(Infinity));

  dp[0][0] = 0;

  for (let i = 1; i <= N; i++) {
    for (let n = 1; n <= K; n++) {
      for (let l = 1; l <= Math.min(LMAX, i); l++) {
        const p = i - l;
        const numberStr = num.substring(p, i);
        const number = parseInt(numberStr, 10);

        if (dp[p][n - 1] !== Infinity) {
          dp[i][n] = Math.min(dp[i][n], dp[p][n - 1] + number);
        }
      }
    }
  }

  let result = Infinity;
  for (let n = 1; n <= K; n++) {
    if (dp[N][n] < result) {
      result = dp[N][n];
    }
  }

  return result % MOD;
}

console.log(solution('1234567', 2));
