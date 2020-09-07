const largestOverlap = (A, B) => {
  let max = 0;

  const search = (x, y) => {
    let matching = 0;

    for (let row = 0; row < A.length; row++) {
      const offRow = row + x;

      if (offRow >= 0 && offRow < A.length) {
        for (let col = 0; col < A.length; col++) {
          const offCol = col + y;

          if (offCol >= 0 && offCol < A.length) {
            if (A[offRow][offCol] === B[row][col]) {
              matching += B[row][col];
            }
          }
        }
      }
    }

    return matching;
  };

  for (let row = 1 - A.length; row < A.length; row++) {
    for (let col = 1 - A[0].length; col < A.length; col++) {
      max = Math.max(max, search(row, col));
    }
  }

  return max;
};
