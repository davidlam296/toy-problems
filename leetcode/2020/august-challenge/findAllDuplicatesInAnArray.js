const findDuplicates = (nums) => {
  const res = [];
  const uniq = new Set();

  for (const num of nums) {
    if (uniq.has(num)) res.push(num);
    else uniq.add(num);
  }

  return res;
};

const findDuplicates = (nums) => {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 1) res.push(Math.abs(nums[i]));

    nums[index] *= -1;
  }

  return res;
};
