const generateMatrix = (n) => {
  const END = n * n;
  const matrix = new Array(n).fill(null).map((row) => new Array(n).fill(0));

  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  let currNum = 1;
  let currRow = 0;
  let currCol = 0;
  let currDirection = 'right';

  while (currNum <= END) {
    matrix[currRow][currCol] = currNum;

    if (currDirection === 'right') {
      if (currCol + 1 > colEnd) {
        currDirection = 'down';
        rowStart++;
        currRow++;
      } else {
        currCol++;
      }
    } else if (currDirection === 'down') {
      if (currRow + 1 > rowEnd) {
        currDirection = 'left';
        colEnd--;
        currCol--;
      } else {
        currRow++;
      }
    } else if (currDirection === 'left') {
      if (currCol - 1 < colStart) {
        currDirection = 'up';
        rowEnd--;
        currRow--;
      } else {
        currCol--;
      }
    } else if (currDirection === 'up') {
      if (currRow - 1 < rowStart) {
        currDirection = 'right';
        colStart++;
        currCol++;
      } else {
        currRow--;
      }
    }

    currNum++;
  }

  return matrix;
};
