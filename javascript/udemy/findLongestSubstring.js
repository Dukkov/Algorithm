function findLongestSubstring(str) {
  const charMap = new Map();
  const strArr = str.split('');
  let low = 0;
  let high = 0;
  let maxLen = 0;

  for (; high < str.length; high++) {
    if (charMap.has(strArr[high])) {
      maxLen = Math.max(maxLen, high - low);
      low = charMap.get(strArr[high]) + 1;
      high = low;

      charMap.clear();
      charMap.set(strArr[low], low);
    } else charMap.set(strArr[high], high);
  }

  return Math.max(maxLen, high - low);
}
