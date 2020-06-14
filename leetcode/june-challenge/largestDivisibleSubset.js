const largestDivisibleSubset = (nums) => {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const subset = [nums[i]];

    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      let compatible = true;

      for (let s = 0; s < subset.length; s++) {
        if (nums[j] % subset[s] !== 0 && subset[s] % nums[j] !== 0) {
          compatible = false;
          break;
        }
      }

      if (compatible) subset.push(nums[j]);
    }

    if (subset.length > result.length) result = subset;
  }

  return result;
};
