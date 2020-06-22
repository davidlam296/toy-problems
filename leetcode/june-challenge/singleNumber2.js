const singleNumber = (nums) => {
  const count = new Map();

  for (const num of nums) {
    count.set(num, (count.has(num) ? count.get(num) : 0) + 1);
    if (count.get(num) === 3) count.delete(num);
  }

  return count.keys().next().value;
};

const singleNumber = (nums) => {
  const count = new Map();

  for (const num of nums) {
    count.set(num, (count.has(num) ? count.get(num) : 0) + 1);
  }

  for (const [num, c] of count) {
    if (c === 1) return num;
  }
};

const singleNumber = (nums) => {
  let once = 0;
  let twice = 0;

  for (const num of nums) {
    once = ~twice & (once ^ num);
    twice = ~once & (twice ^ num);
  }

  return once;
};
