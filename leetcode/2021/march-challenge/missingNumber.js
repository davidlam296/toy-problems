const missingNumber = (nums) => {
  const expected = (nums.length * (nums.length + 1)) / 2;
  const sum = nums.reduce((total, num) => total + num, 0);

  return expected - sum;
};
