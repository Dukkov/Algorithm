// function solution(my_string) {
//   return my_string.split(/\D+/).reduce((acc, cur) => (acc += Number(cur)), 0);
// }

// ---

// function solution(board) {
//   class Board {
//     constructor(boardArr) {
//       this.boardArr = boardArr;
//       this.rowCnt = boardArr.length;
//       this.colCnt = boardArr.length;
//     }

//     checkMine(rowIdx, colIdx) {
//       return this.boardArr[rowIdx][colIdx] === 1 ? true : false;
//     }

//     setCellValue(rowIdx, colIdx) {
//       if (rowIdx > 0)
//         this.boardArr[rowIdx - 1][colIdx] =
//           this.boardArr[rowIdx - 1][colIdx] === 1 ? 1 : -1;
//       if (rowIdx > 0 && colIdx < this.colCnt - 1)
//         this.boardArr[rowIdx - 1][colIdx + 1] =
//           this.boardArr[rowIdx - 1][colIdx + 1] === 1 ? 1 : -1;
//       if (colIdx < this.colCnt - 1)
//         this.boardArr[rowIdx][colIdx + 1] =
//           this.boardArr[rowIdx][colIdx + 1] === 1 ? 1 : -1;
//       if (colIdx < this.colCnt - 1 && rowIdx < this.rowCnt - 1)
//         this.boardArr[rowIdx + 1][colIdx + 1] =
//           this.boardArr[rowIdx + 1][colIdx + 1] === 1 ? 1 : -1;
//       if (rowIdx < this.rowCnt - 1)
//         this.boardArr[rowIdx + 1][colIdx] =
//           this.boardArr[rowIdx + 1][colIdx] === 1 ? 1 : -1;
//       if (rowIdx < this.rowCnt - 1 && colIdx > 0)
//         this.boardArr[rowIdx + 1][colIdx - 1] =
//           this.boardArr[rowIdx + 1][colIdx - 1] === 1 ? 1 : -1;
//       if (colIdx > 0)
//         this.boardArr[rowIdx][colIdx - 1] =
//           this.boardArr[rowIdx][colIdx - 1] === 1 ? 1 : -1;
//       if (colIdx > 0 && rowIdx > 0)
//         this.boardArr[rowIdx - 1][colIdx - 1] =
//           this.boardArr[rowIdx - 1][colIdx - 1] === 1 ? 1 : -1;
//     }

//     updateBoard() {
//       this.boardArr.forEach((row, rowIdx) => {
//         row.forEach((_, colIdx) => {
//           if (this.checkMine(rowIdx, colIdx)) this.setCellValue(rowIdx, colIdx);
//         });
//       });
//     }

//     getSafePlaceCnt() {
//       let cnt = 0;

//       this.boardArr.forEach((row) => {
//         row.forEach((col) => {
//           if (col === 0) cnt++;
//         });
//       });

//       return cnt;
//     }
//   }

//   const myBoard = new Board(board);

//   myBoard.updateBoard();

//   return myBoard.getSafePlaceCnt();
// }

// ---

// function solution(sides) {
//   return 2 * Math.min(...sides) - 1;
// }

// ---

function solution(spell, dic) {
  for (let str of dic) {
    if (str.length === spell.length) {
      for (let i = 0; i < spell.length; i++) {
        if (!str.includes(spell[i])) break;
        if (i === spell.length - 1) return 1;
      }
    }
  }

  return 2;
}
