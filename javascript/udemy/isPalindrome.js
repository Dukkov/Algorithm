function isPalindrome(string) {
  if (string.length === 1) return true;
  return string.slice(0, 1) === string.slice(-1)
    ? true && isPalindrome(string.slice(1, -1))
    : false;
}
