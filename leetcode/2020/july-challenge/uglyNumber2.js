const nthUglyNumber = (n) => {
  if (n <= 1) return n;

  const nums = new Set([1]);
  const queue = [];
  let num = 1;

  const insert = (x) => {
    let start = 0;
    let end = queue.length;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (queue[mid] < x) start = mid + 1;
      if (queue[mid] > x) end = mid;
    }

    queue.splice(start, 0, x);
  };

  while (n-- > 1) {
    const two = num * 2;
    const three = num * 3;
    const five = num * 5;

    if (!nums.has(two)) {
      nums.add(two);
      insert(two);
    }

    if (!nums.has(three)) {
      nums.add(three);
      insert(three);
    }

    if (!nums.has(five)) {
      nums.add(five);
      insert(five);
    }

    num = queue.shift();
  }

  return num;
};

const nthUglyNumber = (n) => {
  if (n <= 6) return n;

  const dp = [1, 2, 3, 4, 5, 6];

  let two = 3;
  let three = 2;
  let five = 1;

  while (dp.length < n) {
    dp[dp.length] = Math.min(dp[two] * 2, dp[three] * 3, dp[five] * 5);

    if (dp[dp.length - 1] === dp[two] * 2) two++;
    if (dp[dp.length - 1] === dp[three] * 3) three++;
    if (dp[dp.length - 1] === dp[five] * 5) five++;
  }

  return dp[dp.length - 1];
};
