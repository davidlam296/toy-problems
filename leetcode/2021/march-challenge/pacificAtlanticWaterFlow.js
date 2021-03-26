const pacificAtlantic = (matrix) => {
  if (matrix.length < 1) return [];

  const result = [];
  const ROW_END = matrix.length - 1;
  const COL_END = matrix[0].length - 1;

  const touchesPacific = (row, col, visited = new Set()) => {
    const index = `${row},${col}`;

    if (visited.has(index)) return false;
    if (row === 0 || col === 0) return true;

    visited.add(index);

    if (
      matrix[row - 1][col] <= matrix[row][col] &&
      touchesPacific(row - 1, col, visited)
    )
      return true;
    if (
      matrix[row][col - 1] <= matrix[row][col] &&
      touchesPacific(row, col - 1, visited)
    )
      return true;
    if (
      row + 1 <= ROW_END &&
      matrix[row + 1][col] <= matrix[row][col] &&
      touchesPacific(row + 1, col, visited)
    )
      return true;
    if (
      col + 1 <= COL_END &&
      matrix[row][col + 1] <= matrix[row][col] &&
      touchesPacific(row, col + 1, visited)
    )
      return true;

    return false;
  };

  const touchesAtlantic = (row, col, visited = new Set()) => {
    const index = `${row},${col}`;

    if (visited.has(index)) return false;
    if (row === ROW_END || col === COL_END) return true;

    visited.add(index);

    if (
      matrix[row + 1][col] <= matrix[row][col] &&
      touchesAtlantic(row + 1, col, visited)
    )
      return true;
    if (
      matrix[row][col + 1] <= matrix[row][col] &&
      touchesAtlantic(row, col + 1, visited)
    )
      return true;
    if (
      row - 1 >= 0 &&
      matrix[row - 1][col] <= matrix[row][col] &&
      touchesAtlantic(row - 1, col, visited)
    )
      return true;
    if (
      col - 1 >= 0 &&
      matrix[row][col - 1] <= matrix[row][col] &&
      touchesAtlantic(row, col - 1, visited)
    )
      return true;

    return false;
  };

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (touchesPacific(row, col) && touchesAtlantic(row, col))
        result.push([row, col]);
    }
  }

  return result;
};
