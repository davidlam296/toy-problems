const combinationSum3 = (k, n) => {
  if (k > 9) return [];
  if (n > 45) return [];

  const result = [];

  const search = (curr = 1, target = n, count = k, nums = []) => {
    if (target === 0 && count === 0) return result.push(nums);
    if (count < 0) return;
    if (target < 0) return;
    if (curr > 9) return;

    nums.push(curr);
    search(curr + 1, target - curr, count - 1, [...nums]);
    nums.pop();
    search(curr + 1, target, count, [...nums]);
  };

  search();

  return result;
};
