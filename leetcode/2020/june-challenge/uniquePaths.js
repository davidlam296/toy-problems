const uniquePaths = (m, n) => {
  // if (m === 1 || n === 1) {
  //   return 1;
  // }

  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([1]);
  }

  for (let i = 1; i < m; i++) {
    matrix[0].push(1);
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < m; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[n - 1][m - 1];
};

const uniquePaths = (m, n) => {
  const dp = new Array(m).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }

  return dp[m - 1];
};
