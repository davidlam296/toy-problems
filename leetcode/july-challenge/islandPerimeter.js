const islandPerimeter = (grid) => {
  const ROWS = grid.length;

  if (ROWS < 1) return 0;

  const COLS = grid[0].length;

  const countPerimeter = (row, col) => {
    grid[row][col] = 'x';

    let numSides = 0;

    if (row - 1 < 0 || grid[row - 1][col] === 0) {
      numSides++;
    } else if (grid[row - 1][col] === 1) {
      numSides += countPerimeter(row - 1, col);
    }

    if (col + 1 >= COLS || grid[row][col + 1] === 0) {
      numSides++;
    } else if (grid[row][col + 1] === 1) {
      numSides += countPerimeter(row, col + 1);
    }

    if (row + 1 >= ROWS || grid[row + 1][col] === 0) {
      numSides++;
    } else if (grid[row + 1][col] === 1) {
      numSides += countPerimeter(row + 1, col);
    }

    if (col - 1 < 0 || grid[row][col - 1] === 0) {
      numSides++;
    } else if (grid[row][col - 1] === 1) {
      numSides += countPerimeter(row, col - 1);
    }

    return numSides;
  };

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === 1) {
        return countPerimeter(i, j);
      }
    }
  }
};

const islandPerimeter = (grid) => {
  const ROWS = grid.length;
  if (ROWS < 1) return 0;
  const COLS = grid[0].length;

  let sides = 0;

  const countSides = (row, col) => {
    let count = 0;
    if (row - 1 < 0 || !grid[row - 1][col]) count++;
    if (col + 1 === COLS || !grid[row][col + 1]) count++;
    if (row + 1 === ROWS || !grid[row + 1][col]) count++;
    if (col - 1 < 0 || !grid[row][col - 1]) count++;

    sides += count;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) countSides(i, j);
    }
  }

  return sides;
};
