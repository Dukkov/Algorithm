function isSubsequence(str1, str2) {
  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str1.charAt(i) === str2.charAt(j)) i++;

    if (i === str1.length) return true;
  }

  return false;
}
