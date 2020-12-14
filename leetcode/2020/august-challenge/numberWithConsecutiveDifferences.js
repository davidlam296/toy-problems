const numsSameConsecDiff = (N, K) => {
  const result = [];

  if (K === 0 || N === 1) {
    for (let i = N > 1 ? 1 : 0; i < 10; i++) {
      result.push(Number(new Array(N).fill(i).join('')));
    }

    return result;
  }

  const search = (curr) => {
    if (curr.length >= N) {
      result.push(Number(curr.join('')));
      return;
    }

    const minusK = curr[curr.length - 1] - K;
    const plusK = curr[curr.length - 1] + K;

    if (minusK >= 0) {
      search([...curr, minusK]);
    }

    if (plusK < 10) {
      search([...curr, plusK]);
    }
  };

  for (let i = 1; i < 10; i++) {
    search([i]);
  }

  return result;
};
