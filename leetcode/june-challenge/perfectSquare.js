const numSquares = (n) => {
  const squares = new Map();

  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    squares.set(i, i * i);
  }

  const memo = new Map();

  const countSquares = (n) => {
    if (memo.has(n)) return memo.get(n);
    if (n === 0) return 0;

    let least = Infinity;

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
      least = Math.min(least, 1 + countSquares(n - squares.get(i)));
      memo.set(n, least);
    }

    return least;
  };

  return countSquares(n);
};

const numSquares = (n) => {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
};
