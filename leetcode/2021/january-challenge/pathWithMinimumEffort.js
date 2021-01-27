const minimumEffortPath = (heights) => {
  const ROWS = heights.length;
  const COLS = heights[0].length;

  if (ROWS === 1 && COLS === 1) return 0;

  const isPathPossible = (k) => {
    const isCoordValid = (x, y) => x >= 0 && y >= 0 && x < ROWS && y < COLS;
    const isPathValid = (x, y, prev) => Math.abs(prev - heights[x][y]) <= k;

    const searched = new Set(['0,0']);
    const queue = [[0, 0]];

    while (queue.length > 0) {
      const [row, col] = queue.pop();
      const height = heights[row][col];

      const coords = [
        [row - 1, col],
        [row, col - 1],
        [row, col + 1],
        [row + 1, col],
      ];

      for (const [r2, c2] of coords) {
        const idx = `${r2},${c2}`;

        if (
          !searched.has(idx) &&
          isCoordValid(r2, c2) &&
          isPathValid(r2, c2, height)
        ) {
          if (r2 === ROWS - 1 && c2 === COLS - 1) return true;
          queue.push([r2, c2]);
          searched.add(idx);
        }
      }
    }

    return false;
  };

  const poss = new Set();

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const h = heights[row][col];

      if (row + 1 < ROWS) poss.add(Math.abs(h - heights[row + 1][col]));
      if (col + 1 < COLS) poss.add(Math.abs(h - heights[row][col + 1]));
    }
  }

  const possK = [...poss].sort((a, b) => a - b);
  let start = 0;
  let end = possK.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (isPathPossible(possK[mid])) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return possK[start];
};
