const getPermutation = (n, k) => {
  let count = 0;
  let result = '';

  const nums = new Set();
  for (let i = 1; i <= n; i++) {
    nums.add(i);
  }

  const find = (curr, available) => {
    if (curr.length === n) {
      if (++count === k) {
        result = curr.join('');
      }
    }

    for (const num of available) {
      const tempAvail = new Set([...available]);
      tempAvail.delete(num);

      find([...curr, num], tempAvail);
    }
  };

  find([], nums);

  return result;
};

const getPermutation = (n, k) => {
  const result = [];
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  const factorial = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return n * factorial(n - 1);
  };

  while (nums.length > 0) {
    if (nums.length === 1) {
      result.push(nums[0]);
      break;
    }
    const size = factorial(nums.length - 1);
    const section = Math.ceil(k / size) - 1;

    k = k - section * size;

    result.push(nums.splice(section, 1)[0]);
  }

  return result.join('');
};
