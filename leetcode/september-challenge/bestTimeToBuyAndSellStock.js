const maxProfit = (prices) => {
  if (prices.length < 2) return 0;

  let max = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      max = Math.max(max, prices[i] - min);
    }
  }

  return max;
};
