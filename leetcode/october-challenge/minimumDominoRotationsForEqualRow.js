const minDominoRotations = (A, B) => {
  const common = new Map();

  if (A[0] === B[0]) {
    common.set(A[0], [1, 1]);
  } else {
    common.set(A[0], [1, 0]);
    common.set(B[0], [0, 1]);
  }

  for (let i = 1; i < A.length; i++) {
    for (const [num, [top, bottom]] of common.entries()) {
      if (A[i] === num || B[i] === num) {
        common.set(num, [
          A[i] === num ? top + 1 : top,
          B[i] === num ? bottom + 1 : bottom,
        ]);
      } else {
        common.delete(num);
      }
    }
  }

  let result = Infinity;

  for (const [num, [top, bottom]] of common.entries()) {
    result = Math.min(result, A.length - top, A.length - bottom);
  }

  return result !== Infinity ? result : -1;
};
