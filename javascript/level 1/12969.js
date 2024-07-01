process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const [n, m] = data.split(' ');
  let answer = '*'.repeat(n).concat('\n').repeat(m);

  console.log(answer);
});
