const summaryRanges = (nums) => {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums[0].toString()];

  const result = [];
  let start = nums[0];
  let end = nums[0];

  const save = (s, e) => {
    if (s === e) result.push(s.toString());
    else result.push(`${start}->${end}`);
  };

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end = nums[i];
    } else {
      save(start, end);
      start = nums[i];
      end = nums[i];
    }
  }

  save(start, end);

  return result;
};
