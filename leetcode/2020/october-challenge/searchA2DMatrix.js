const searchMatrix = (matrix, target) => {
  if (matrix.length < 1) return false;

  const findRow = () => {
    for (let i = 1; i < matrix.length; i++) {
      if (matrix[i][0] > target) return i - 1;
    }

    return matrix.length - 1;
  };

  const row = findRow();

  for (let i = 0; i < matrix[row].length; i++) {
    if (matrix[row][i] === target) return true;
  }

  return false;
};
