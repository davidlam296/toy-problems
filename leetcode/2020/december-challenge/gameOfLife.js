// const gameOfLife = board => {
//   const ROWS = board.length;
//   const COLS = board[0].length;
//   const newBoard = new Array(ROWS).fill(0).map(row => []);

//   const countNeighbors = (r, c) => {
//     const rowStart = r - 1 < 0 ? 0 : r - 1;
//     const colStart = c - 1 < 0 ? 0 : c - 1;
//     const rowEnd = r + 1 === ROWS ? r : r + 1;
//     const colEnd = c + 1 === COLS ? c : c + 1;
//     let count = 0;

//     for (let row = rowStart; row <= rowEnd; row++) {
//       for (let col = colStart; col <= colEnd; col++) {
//         if (row === r && col === c) continue;
//         if (board[row][col] === 1) count++;
//       }
//     }

//     return count;
//   }

//   for (let row = 0; row < ROWS; row++) {
//     for (let col = 0; col < COLS; col++) {
//       const neighbors = countNeighbors(row, col);

//       if (board[row][col] === 1) {
//         newBoard[row].push(neighbors < 2 || neighbors > 3 ? 0 : 1);
//       } else {
//         newBoard[row].push(neighbors === 3 ? 1 : 0);
//       }
//     }
//   }

//   for (let row = 0; row < ROWS; row++) {
//     for (let col = 0; col < COLS; col++) {
//       board[row][col] = newBoard[row][col];
//     }
//   }
// };

const gameOfLife = (board) => {
  const ROWS = board.length;
  const COLS = board[0].length;
  const living = new Map();

  const populate = (x, y) => {
    for (let row = x - 1; row <= x + 1; row++) {
      for (let col = y - 1; col <= y + 1; col++) {
        if (x === row && y === col) continue;

        const id = `${row},${col}`;

        living.set(id, (living.get(id) || 0) + 1);
      }
    }
  };

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] === 1) populate(row, col);
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const id = `${row},${col}`;

      if (board[row][col] === 1) {
        board[row][col] = living.get(id) === 2 || living.get(id) === 3 ? 1 : 0;
      } else {
        board[row][col] = living.get(id) === 3 ? 1 : 0;
      }
    }
  }
};
