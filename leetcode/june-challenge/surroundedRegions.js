const solve = (board) => {
  if (board.length <= 1 || board[0].length <= 1) return;

  const borderCoords = new Set();
  const m = board.length;
  const n = board[0].length;

  const search = (x, y) => {
    if (x < 0 || y < 0 || x >= m || y >= n) return;
    if (board[x][y] === 'X') return;
    if (borderCoords.has(`${x},${y}`)) return;

    borderCoords.add(`${x},${y}`);
    search(x, y - 1);
    search(x, y + 1);
    search(x - 1, y);
    search(x + 1, y);
  };

  for (let i = 0; i < n; i++) {
    search(0, i);
    search(m - 1, i);
  }

  for (let i = 1; i < m; i++) {
    search(i, 0);
    search(i, n - 1);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (borderCoords.has(`${i},${j}`)) continue;
      board[i][j] = 'X';
    }
  }
};
