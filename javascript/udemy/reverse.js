function reverse(string) {
  if (string.length === 1) return string.slice(0);
  return string.slice(-1) + reverse(string.slice(0, -1));
}
