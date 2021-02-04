const findLHS = (nums) => {
  const counts = new Map();
  let result = 0;

  nums.forEach((num) => counts.set(num, (counts.get(num) || 0) + 1));

  counts.forEach((count, num) => {
    const minusOne = counts.has(num - 1) ? count + counts.get(num - 1) : 0;
    const plusOne = counts.has(num + 1) ? count + counts.get(num + 1) : 0;

    result = Math.max(result, minusOne, plusOne);
  });

  return result;
};
