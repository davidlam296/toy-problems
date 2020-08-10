const orangesRotting = (grid) => {
  let timeElapsed = 0;
  let numFresh = 0;
  let queue = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) numFresh++;
      if (grid[row][col] === 2) queue.push([row, col]);
    }
  }

  while (numFresh > 0 && queue.length > 0) {
    const newQueue = [];

    for (const [row, col] of queue) {
      if (row - 1 >= 0 && grid[row - 1][col] === 1) {
        grid[row - 1][col] = 2;
        newQueue.push([row - 1, col]);
        numFresh--;
      }

      if (row + 1 < grid.length && grid[row + 1][col] === 1) {
        grid[row + 1][col] = 2;
        newQueue.push([row + 1, col]);
        numFresh--;
      }

      if (col - 1 >= 0 && grid[row][col - 1] === 1) {
        grid[row][col - 1] = 2;
        newQueue.push([row, col - 1]);
        numFresh--;
      }

      if (col + 1 < grid[0].length && grid[row][col + 1] === 1) {
        grid[row][col + 1] = 2;
        newQueue.push([row, col + 1]);
        numFresh--;
      }
    }

    timeElapsed++;
    queue = newQueue;
  }

  return numFresh === 0 ? timeElapsed : -1;
};
