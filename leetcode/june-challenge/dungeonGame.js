const calculateMinimumHP = (dungeon) => {
  const m = dungeon.length;

  if (m < 1) return 0;

  const n = dungeon[0].length;

  if (n < 1) return 0;

  const dp = new Array(m + 1)
    .fill(0)
    .map((row) => new Array(n + 1).fill(Infinity));
  dp[m][n - 1] = 1;

  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      dp[row][col] = Math.max(
        1,
        Math.min(dp[row + 1][col], dp[row][col + 1]) - dungeon[row][col]
      );
    }
  }

  return dp[0][0];
};
