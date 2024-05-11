// function solution(hp) {
//   const general = Math.floor(hp / 5);
//   hp -= general * 5;
//   const soldier = Math.floor(hp / 3);
//   hp -= soldier * 3;
//   const worker = hp;

//   return general + soldier + worker;
// }

// ---

// function solution(letter) {
//   const answer = [];
//   const letterArr = letter.split(' ');
//   const morse = {
//     '.-': 'a',
//     '-...': 'b',
//     '-.-.': 'c',
//     '-..': 'd',
//     '.': 'e',
//     '..-.': 'f',
//     '--.': 'g',
//     '....': 'h',
//     '..': 'i',
//     '.---': 'j',
//     '-.-': 'k',
//     '.-..': 'l',
//     '--': 'm',
//     '-.': 'n',
//     '---': 'o',
//     '.--.': 'p',
//     '--.-': 'q',
//     '.-.': 'r',
//     '...': 's',
//     '-': 't',
//     '..-': 'u',
//     '...-': 'v',
//     '.--': 'w',
//     '-..-': 'x',
//     '-.--': 'y',
//     '--..': 'z'
//   };

//   for (code of letterArr) {
//     answer.push(morse[code]);
//   }

//   return answer.join('');
// }

// ---

// function solution(rsp) {
//   const answer = [];

//   for (num of [...rsp]) {
//     if (num === '0') answer.push('5');
//     else if (num === '2') answer.push('0');
//     else answer.push('2');
//   }

//   return answer.join('');
// }

// ---

const factorial = (num) => {
  if (num === 1 || num === 0) return 1;

  return num * factorial(num - 1);
};

function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}
