const fs = require('fs');

const nums = fs
  .readFileSync(__dirname + '/9.txt', 'utf8')
  .split('\n')
  .map((n) => Number(n));

const twoSum = (nums, target) => {
  const values = new Set();

  for (const num of nums) {
    const difference = target - num;

    if (values.has(difference)) return true;

    values.add(num);
  }
};

// Encoding Error

const part1 = (nums, limit) => {
  const preamble = [...nums.slice(0, limit)];

  for (let i = limit; i < nums.length; i++) {
    if (twoSum(preamble, nums[i])) {
      preamble.shift();
      preamble.push(nums[i]);
    } else return nums[i];
  }
};

const part2 = (nums, target) => {
  let start = 0;
  let end = 0;
  let curr = 0;

  while (end < nums.length) {
    if (curr === target) break;
    else if (curr < target) curr += nums[end++];
    else curr -= nums[start++];
  }

  const range = nums.slice(start, end).sort((a, b) => a - b);
  return range[0] + range[range.length - 1];
};

console.log(part1(nums, 25)); // Answer: 85848519
console.log(part2(nums, 85848519)); // Answer: 13414198
