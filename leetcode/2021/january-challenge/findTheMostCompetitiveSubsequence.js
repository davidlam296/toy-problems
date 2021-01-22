const mostCompetitive = (nums, k) => {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const LIMIT = k - (nums.length - i);

    let index = result.length - 1;

    if (LIMIT === result.length) return [...result, ...nums.slice(i)];

    while (index >= 0 && index >= LIMIT && num < result[index]) {
      index--;
      result.pop();
    }

    if (result.length < k) result.push(num);
  }

  return result;
};
