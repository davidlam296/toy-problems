const permuteUnique = (nums) => {
  const memo = new Set();
  const result = [];

  const getPermutations = (curr = [], remaining = nums) => {
    const index = JSON.stringify(curr);

    if (memo.has(index)) return;
    if (remaining.length === 0) {
      result.push(curr);
      return;
    }

    memo.add(index);

    for (let i = 0; i < remaining.length; i++) {
      getPermutations(
        [...curr, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
    }
  };

  for (let i = 0; i < nums.length; i++) {
    getPermutations([nums[i]], [...nums.slice(0, i), ...nums.slice(i + 1)]);
  }

  return result;
};
