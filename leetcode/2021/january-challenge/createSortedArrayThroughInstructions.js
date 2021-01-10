const createSortedArray = (instructions) => {
  const nums = [];
  const freq = new Map();

  const insert = (num) => {
    freq.set(num, (freq.get(num) || 0) + 1);

    if (nums.length < 1) {
      nums.push(num);
      return 0;
    }

    let start = 0;
    let end = nums.length;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (num <= nums[mid]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    nums.splice(start, 0, num);

    return Math.min(start, nums.length - start - freq.get(num));
  };

  const mod = 10 ** 9 + 7;
  let minCost = 0;

  for (const ins of instructions) {
    minCost += insert(ins);
    minCost %= mod;
  }

  return minCost;
};
