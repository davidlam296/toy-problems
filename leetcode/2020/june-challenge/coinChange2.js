// Brute force; recursion
const change = (amount, coins) => {
  let result = 0;

  coins.sort((a, b) => b - a);

  const countChange = (current, availableCoins) => {
    if (current > amount) {
      return;
    }

    if (current === amount) {
      result += 1;
      return;
    }

    for (const [i, coin] of availableCoins.entries()) {
      countChange(current + coin, availableCoins.slice(i));
    }
  };

  countChange(0, coins);
  return result;
};

// Recursion & Memoization
const change = (amount, coins) => {
  const memo = new Map();

  const countChange = (current, coinIndex) => {
    const key = current + '+' + coinIndex;

    if (memo.has(key)) return memo.get(key);
    if (current === 0) return 1;
    if (current < 0 || coinIndex < 0) return 0;

    let count = 0;

    if (current - coins[coinIndex] >= 0) {
      count += countChange(current - coins[coinIndex], coinIndex);
    }

    count += countChange(current, coinIndex - 1);
    memo.set(key, count);

    return count;
  };

  return countChange(amount, coins.length - 1);
};

// Dynamic Programming
const change = (amount, coins) => {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
};

// const testAmount = 500;
// const testCoins = [3,5,7,8,9,10,11];

// console.log(change(testAmount, testCoins));