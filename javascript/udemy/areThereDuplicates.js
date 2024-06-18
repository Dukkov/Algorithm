function areThereDuplicates(...params) {
  let i = 0;
  typeof params[0] === 'number' ? params.sort((a, b) => a - b) : params.sort();

  for (let j = 1; j < params.length; j++) {
    if (params[i] === params[j]) return true;
    i++;
  }

  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'));
