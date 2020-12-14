const topKFrequent = (nums, k) => {
  const count = new Map();
  const arr = [];
  const result = [];

  for (const num of nums) {
    if (count.has(num)) count.set(num, count.get(num) + 1);
    else count.set(num, 1);
  }

  for (const freq of count) {
    arr.push(freq);
  }

  arr.sort((a, b) => b[1] - a[1]);

  for (const [num] of arr) {
    if (result.length < k) result.push(num);
    else break;
  }

  return result;
};

const topKFrequent = (nums, k) => {
  const count = {};

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  const arr = Object.entries(count).sort((a, b) => a[1] - b[1]);
  const res = [];

  while (res.length < k) {
    res.push(arr.pop()[0]);
  }

  return res;
};
