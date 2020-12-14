const arrangeCoins = (n) => {
  const val = Math.floor(Math.sqrt(n * 2));

  return n * 2 >= val * (val + 1) ? val : val - 1;
};
