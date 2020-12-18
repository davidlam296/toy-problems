const increasingTriplet = (nums) => {
  if (nums.length < 3) return false;

  let oneMore = Infinity;
  let twoMore = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num > oneMore) return true;
    else if (num > twoMore) oneMore = num;
    else twoMore = num;
  }

  return false;
};
