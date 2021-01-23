const diagonalSort = (mat) => {
  const ROWS = mat.length;
  const COLS = mat[0].length;

  const swap = (x1, y1, x2, y2) => {
    [mat[x1][y1], mat[x2][y2]] = [mat[x2][y2], mat[x1][y1]];
  };

  const sort = (startRow, startCol) => {
    let row = startRow + 1;
    let col = startCol + 1;

    while (row < ROWS && col < COLS) {
      const curr = mat[row][col];
      let c = col,
        r = row;

      while (r - 1 >= 0 && c - 1 >= 0 && curr < mat[r - 1][c - 1]) {
        swap(r, c, r - 1, c - 1);
        r--;
        c--;
      }

      row++;
      col++;
    }
  };

  for (let row = ROWS - 2; row >= 0; row--) {
    sort(row, 0);
  }

  for (let col = 1; col < COLS; col++) {
    sort(0, col);
  }

  return mat;
};
