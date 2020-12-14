const flipAndInvertImage = (A) => {
  return new Array(A.length).fill(null).map((x, row) => {
    const result = [];
    for (let i = A[row].length - 1; i >= 0; i--) {
      result.push(A[row][i] === 0 ? 1 : 0);
    }

    return result;
  });
};

const flipAndInvertImage = (A) => {
  return A.map((row) => row.reverse().map((pixel) => (pixel === 0 ? 1 : 0)));
};
