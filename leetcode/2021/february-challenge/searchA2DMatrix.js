// const searchMatrix = (matrix, target) => {
//   const ROWS = matrix.length - 1;
//   const COLS = matrix[0].length - 1;

//   const searchRow = (row, end = matrix[0].length) => {
//     for (let col = 0; col <= end; col++) {
//       if (matrix[row][col] === target) {
//         return [true, col];
//       }

//       if (matrix[row][col] > target) {
//         return [false, col - 1];
//       }
//     }

//     return [false, end];
//   }

//   const searchCol = (col, rowStart) => {
//     for (let row = rowStart; row <= ROWS; row++) {
//       if (matrix[row][col] === target) {
//         return [true, row];
//       }

//       if (matrix[row][col] > target) {
//         return [false, row];
//       }
//     }

//     return [false, ROWS];
//   }

//   let found = false;
//   let row = 0;
//   let col = COLS;

//   while (!found && row < matrix.length) {
//     [found, col] = searchRow(row, col);

//     if (found || row === ROWS) break;

//     [found, row] = searchCol(col, row + 1);

//     col--;
//   }

//   return found;
// };

const searchMatrix = (matrix, target) => {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  let row = 0;
  let col = COLS - 1;

  while (row < ROWS && col >= 0) {
    if (matrix[row][col] === target) return true;

    if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }

  return false;
};
