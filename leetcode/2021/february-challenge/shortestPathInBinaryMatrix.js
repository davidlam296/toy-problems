const shortestPathBinaryMatrix = (grid) => {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const END = `${ROWS - 1},${COLS - 1}`;

  if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) return -1;
  if (ROWS === 1 && COLS === 1) return 1;

  const queue = [[0, 0, 1]];
  const searched = new Set(['0,0']);

  const getNeighbors = (x, y) => {
    return [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1],
    ];
  };

  const checkValidity = ([x, y]) => x >= 0 && x < ROWS && y >= 0 && y < COLS;

  while (queue.length > 0) {
    const [x, y, steps] = queue.shift();
    const neighbors = getNeighbors(x, y).filter(checkValidity);

    for (const [x2, y2] of neighbors) {
      const index = `${x2},${y2}`;

      if (index === END) return steps + 1;
      if (!searched.has(index) && grid[x2][y2] === 0) {
        searched.add(index);
        queue.push([x2, y2, steps + 1]);
      }
    }
  }

  return -1;
};
