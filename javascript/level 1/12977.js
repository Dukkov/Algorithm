// 소수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12977
const primeDiscriminator = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

function solution(nums) {
  let answer = 0;

  for (let low = 0; low < nums.length - 2; low++) {
    for (let mid = low + 1; mid < nums.length - 1; mid++) {
      for (let high = mid + 1; high < nums.length; high++) {
        if (primeDiscriminator(nums[low] + nums[mid] + nums[high])) answer++;
      }
    }
  }

  return answer;
}
