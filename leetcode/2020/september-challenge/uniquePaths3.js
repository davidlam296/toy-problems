const uniquePathsIII = (grid) => {
  let result = 0;
  let totalValid = 0;

  const ROW_LIMIT = grid.length;
  const COL_LIMIT = grid[0].length;

  const search = (row, col, remaining) => {
    if (grid[row][col] === 2) {
      if (remaining === 0) result++;
      return;
    }

    if (remaining === 0) return;

    if (row - 1 >= 0) {
      if (grid[row - 1][col] === 0) {
        grid[row - 1][col] = 1;
        search(row - 1, col, remaining - 1);
        grid[row - 1][col] = 0;
      }

      if (grid[row - 1][col] === 2) {
        search(row - 1, col, remaining - 1);
      }
    }

    if (col + 1 < COL_LIMIT) {
      if (grid[row][col + 1] === 0) {
        grid[row][col + 1] = 1;
        search(row, col + 1, remaining - 1);
        grid[row][col + 1] = 0;
      }

      if (grid[row][col + 1] === 2) {
        search(row, col + 1, remaining - 1);
      }
    }

    if (row + 1 < ROW_LIMIT) {
      if (grid[row + 1][col] === 0) {
        grid[row + 1][col] = 1;
        search(row + 1, col, remaining - 1);
        grid[row + 1][col] = 0;
      }

      if (grid[row + 1][col] === 2) {
        search(row + 1, col, remaining - 1);
      }
    }

    if (col - 1 >= 0) {
      if (grid[row][col - 1] === 0) {
        grid[row][col - 1] = 1;
        search(row, col - 1, remaining - 1);
        grid[row][col - 1] = 0;
      }

      if (grid[row][col - 1] === 2) {
        search(row, col - 1, remaining - 1);
      }
    }
  };

  let startX, startY;

  for (let row = 0; row < ROW_LIMIT; row++) {
    for (let col = 0; col < COL_LIMIT; col++) {
      if (grid[row][col] === 1) {
        startX = row;
        startY = col;
      }

      if (grid[row][col] === 0 || grid[row][col] === 2) totalValid++;
    }
  }

  search(startX, startY, totalValid);
  return result;
};
