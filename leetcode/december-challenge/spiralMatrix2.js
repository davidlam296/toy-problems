const generateMatrix = (n) => {
  const END = n * n;
  const matrix = new Array(n).fill(null).map((row) => new Array(n).fill(0));

  let [
    rowStart,
    rowEnd,
    colStart,
    colEnd,
    currNum,
    currRow,
    currCol,
    currDirection,
  ] = [0, n - 1, 0, n - 1, 1, 0, 0, 'right'];

  while (currNum <= END) {
    matrix[currRow][currCol] = currNum++;

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
  }

  return matrix;
};

console.log(generateMatrix(3));