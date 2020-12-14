const maxProfit = (prices) => {
  let sell2 = 0,
    sell1 = 0,
    buy1 = -Infinity,
    buy2 = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    // buy1 and sell1 references the best time to buy and sell stock 1
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);

    // buy2 and sell2 uses buy1 and sell1 to find profit achievable with 2 transactions
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }

  return sell2;
};
