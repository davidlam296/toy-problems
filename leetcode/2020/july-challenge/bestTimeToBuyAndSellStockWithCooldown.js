const maxProfit = (prices) => {
  const memo = new Map();
  const once = new Map();

  const findPrice = (start, end) => {
    const index = `${start}+${end}`;

    if (once.has(index)) return once.get(index);

    let profit = 0;
    let min = prices[start];

    for (let i = start + 1; i <= end; i++) {
      profit = Math.max(profit, prices[i] - min);

      if (prices[i] < min) {
        min = prices[i];
      }
    }

    once.set(index, profit);
    return profit;
  };

  const findMax = (start, end) => {
    const index = `${start}+${end}`;
    let max = 0;

    if (memo.has(index)) return memo.get(index);

    if (end - start >= 4) {
      let days = start + 1;

      while (days <= end - 3) {
        max = Math.max(max, findPrice(start, days) + findMax(days + 2, end));
        days++;
      }

      max = Math.max(max, findPrice(start, end));
    } else {
      max = findPrice(start, end);
    }

    memo.set(index, max);
    return max;
  };

  return findMax(0, prices.length - 1);
};

const maxProfit = (prices) => {
  let hold = -Infinity;
  let sold = 0;
  let cooldown = 0;

  for (const price of prices) {
    const newHold = Math.max(hold, cooldown - price);
    const newSold = hold + price;
    const newCooldown = Math.max(cooldown, sold);
    hold = newHold;
    sold = newSold;
    cooldown = newCooldown;
  }

  return Math.max(sold, cooldown);
};

const maxProfit = (prices) => {
  const memo = new Map();

  const findProfit = (x, y) => {
    const index = `${x}+${y}`;

    if (memo.has(index)) return memo.get(index);
    if (y >= prices.length) return 0;

    let profit = -Infinity;

    if (prices[y] <= prices[x]) {
      profit = Math.max(profit, findProfit(y, y + 1));
    } else {
      profit = Math.max(
        profit,
        prices[y] - prices[x] + findProfit(y + 2, y + 3)
      );
      profit = Math.max(profit, findProfit(x, y + 1));
    }

    memo.set(index, profit);
    return profit;
  };

  return findProfit(0, 1);
};
