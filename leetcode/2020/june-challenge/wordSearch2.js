const findWords = (board, words) => {
  const result = [];
  const ROWS = board.length;

  if (ROWS < 1) return result;

  const COLS = board[0].length;

  const findWord = (word) => {
    let found = false;
    let visited = new Set();

    const search = (index, row, col) => {
      const key = `${row}+${col}`;

      if (visited.has(key)) return;

      if (index === word.length) {
        found = true;
        return;
      }

      visited.add(key);

      if (row > 0 && board[row - 1][col] === word.charAt(index)) {
        search(index + 1, row - 1, col);
      }

      if (row < ROWS - 1 && board[row + 1][col] === word.charAt(index)) {
        search(index + 1, row + 1, col);
      }

      if (col > 0 && board[row][col - 1] === word.charAt(index)) {
        search(index + 1, row, col - 1);
      }

      if (col < COLS - 1 && board[row][col + 1] === word.charAt(index)) {
        search(index + 1, row, col + 1);
      }

      visited.delete(key);
    };

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (board[i][j] === word[0]) {
          search(1, i, j);
          if (found) return found;
          visited = new Set();
        }
      }
    }

    return found;
  };

  for (const word of words) {
    if (findWord(word)) result.push(word);
  }

  return result;
};
