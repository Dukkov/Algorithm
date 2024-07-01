const gcd = (num1, num2) => {
  let mod;

  while (num2 > 0) {
    mod = num1 % num2;
    num1 = num2;
    num2 = mod;
  }

  return num1;
};

function solution(n, m) {
  return [gcd(n, m), (n * m) / gcd(n, m)];
}
