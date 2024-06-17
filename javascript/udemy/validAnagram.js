function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charMap = new Map();

  str1.split('').forEach((char) => {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  });

  for (let char of str2) {
    if (!charMap.has(char) || charMap.get(char) <= 0) return false;

    charMap.set(char, charMap.get(char) - 1);
  }

  return true;
}
