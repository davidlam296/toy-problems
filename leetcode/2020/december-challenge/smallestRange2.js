const smallestRangeII = (A, K) => {
  if (A.length === 1) return 0;

  A.sort((a, b) => a - b);

  return A.reduce((min, num, i) => {
    if (i === A.length - 1) return min;

    const high = Math.max(A[A.length - 1] - K, num + K);
    const low = Math.min(A[0] + K, A[i + 1] - K);

    return Math.min(min, high - low);
  }, A[A.length - 1] - A[0]);
};
