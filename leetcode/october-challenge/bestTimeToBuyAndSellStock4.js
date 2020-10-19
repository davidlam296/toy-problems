const maxProfit = (k, prices) => {
  if (prices.length < 1) return 0;

  if (k > prices.length / 2) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }

    return profit;
  } else {
    const dp = new Array(prices.length).fill(0);

    for (let i = 0; i < k; i++) {
      let min = prices[0];
      let max = 0;

      for (let j = 0; j < prices.length; j++) {
        min = Math.min(min, prices[j] - dp[j]);
        max = Math.max(max, prices[j] - min);
        dp[j] = max;
      }
    }

    return dp[prices.length - 1];
  }
};
