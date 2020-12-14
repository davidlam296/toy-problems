const exist = (board, word) => {
  const ROWS = board.length;
  const COLS = board[0].length;

  let searched = new Set();
  let found = false;

  const search = (x, y, index) => {
    const key = `${x}+${y}`;

    if (found || searched.has(key)) return;
    if (index === word.length - 1) found = true;

    searched.add(key);

    if (x + 1 < ROWS && board[x + 1][y] === word.charAt(index + 1))
      search(x + 1, y, index + 1);
    if (x - 1 >= 0 && board[x - 1][y] === word.charAt(index + 1))
      search(x - 1, y, index + 1);
    if (y + 1 < COLS && board[x][y + 1] === word.charAt(index + 1))
      search(x, y + 1, index + 1);
    if (y - 1 >= 0 && board[x][y - 1] === word.charAt(index + 1))
      search(x, y - 1, index + 1);

    searched.delete(key);
  };

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (found) return true;
      if (word[0] === board[i][j]) {
        search(i, j, 0);
        searched = new Set();
      }
    }
  }

  return found;
};

const exist = (board, word) => {
  const n = board.length;
  const m = board[0].length;

  const search = (x, y, index) => {
    if (index === word.length - 1) {
      return true;
    }

    const letter = board[x][y];
    board[x][y] = null;

    if (y + 1 < m && board[x][y + 1] === word.charAt(index + 1)) {
      if (search(x, y + 1, index + 1)) {
        return true;
      }
    }
    if (x + 1 < n && board[x + 1][y] === word.charAt(index + 1)) {
      if (search(x + 1, y, index + 1)) {
        return true;
      }
    }
    if (y - 1 >= 0 && board[x][y - 1] === word.charAt(index + 1)) {
      if (search(x, y - 1, index + 1)) {
        return true;
      }
    }
    if (x - 1 >= 0 && board[x - 1][y] === word.charAt(index + 1)) {
      if (search(x - 1, y, index + 1)) {
        return true;
      }
    }

    board[x][y] = letter;
    return false;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === word.charAt(0)) {
        if (search(i, j, 0)) {
          return true;
        }
      }
    }
  }

  return false;
};
