const findDiagonalOrder = (matrix) => {
  if (matrix.length < 1) return [];

  const elements = [];
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  const goDiagonal = (x, y, northeast) => {
    let lastX = x;
    let lastY = y;

    elements.push(matrix[x][y]);

    if (x + 1 === ROWS && y + 1 === COLS) return false;

    if (northeast) {
      let col = y + 1;

      for (let row = x - 1; row >= 0; row--) {
        if (col === COLS) break;
        elements.push(matrix[row][col]);
        lastX = row;
        lastY = col++;
      }

      return lastY + 1 === COLS ? [lastX + 1, lastY] : [0, lastY + 1];
    } else {
      let col = y - 1;

      for (let row = x + 1; row < matrix.length; row++) {
        if (col < 0) break;
        elements.push(matrix[row][col]);
        lastX = row;
        lastY = col--;
      }

      return lastX + 1 === ROWS ? [lastX, lastY + 1] : [lastX + 1, 0];
    }
  };

  let currCoord = [0, 0];
  let direction = true;

  while (currCoord) {
    currCoord = goDiagonal(currCoord[0], currCoord[1], direction);
    direction = !direction;
  }

  return elements;
};
