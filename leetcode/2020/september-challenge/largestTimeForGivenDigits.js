const largestTimeFromDigits = (A) => {
  const nums = new Array(10).fill(0);
  const MAX = {
    0: 2,
    1: 9,
    2: 5,
    3: 9,
  };

  for (const num of A) {
    nums[num]++;
  }

  let result = null;
  let found = false;

  const findTime = (curr = []) => {
    if (found) return;
    if (curr.length === 4) {
      found = true;
      result = curr;
    }

    for (let i = MAX[curr.length]; i >= 0; i--) {
      if (nums[i] > 0) {
        if (i === 2) MAX[1] = 3;

        nums[i]--;
        findTime([...curr, i]);
        MAX[1] = 9;
        nums[i]++;
      }
    }
  };

  findTime();

  return result && result.length === 4
    ? `${result[0]}${result[1]}:${result[2]}${result[3]}`
    : '';
};
