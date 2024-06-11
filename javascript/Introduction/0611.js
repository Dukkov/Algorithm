// function solution(chicken) {
//   let answer = 0;
//   let coupon = chicken;

//   while (coupon >= 10) {
//     answer += Math.floor(coupon / 10);
//     coupon = Math.floor(coupon / 10) + (coupon % 10);
//   }

//   return answer;
// }

// ---

// function solution(bin1, bin2) {
//   const answer = [];
//   let sum;
//   let carry = 0;
//   let x;
//   let y;
//   bin1 = bin1.padStart(Math.max(bin1.length, bin2.length), '0');
//   bin2 = bin2.padStart(Math.max(bin1.length, bin2.length), '0');

//   for (let i = bin1.length - 1; i >= 0; i--) {
//     x = Number(bin1.charAt(i));
//     y = Number(bin2.charAt(i));

//     sum = x ^ y ^ carry;
//     carry = (x & y) | (x & carry) | (y & carry);
//     answer.unshift(sum);
//   }
//   if (carry) answer.unshift(carry);

//   return answer.join('');
// }

// ---

function solution(before, after) {
  var answer = 0;
  return answer;
}
