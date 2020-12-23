const fs = require('fs');

const data = fs
  .readFileSync(__dirname + '/15.txt', 'utf8')
  .split('\n')[0]
  .split(',');

// Rambunctious Recitation

// Note: Can use Map or other data structure to drastically reduce runtime

const findNum = (nums, target) => {
  const END = target;
  const mem = {};

  nums.forEach((num, idx) => {
    mem[num] = idx + 1;
  });

  let prev = 0;
  if (!mem[prev]) mem[prev] = nums.length + 1;

  for (let turn = nums.length + 2; turn <= END; turn++) {
    if (mem[prev] === turn - 1) {
      prev = 0;
    } else {
      const curr = turn - 1 - mem[prev];

      mem[prev] = turn - 1;
      prev = curr;

      if (!mem[curr]) mem[curr] = turn;
    }
  }

  return prev;
};

const part1 = (nums) => {
  return findNum(nums, 2020);
};

const part2 = (nums) => {
  return findNum(nums, 30000000);
};

console.log(part1(data)); // Answer: 257
console.log(part2(data)); // Answer: 8546398
