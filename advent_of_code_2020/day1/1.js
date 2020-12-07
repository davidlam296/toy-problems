const fs = require('fs');

const rawData = fs.readFileSync(__dirname + '/1.txt', 'utf8').split('\n');
const values = rawData.map((num) => Number(num));

// Report Repair

const part1 = (nums, target) => {
  const values = new Set();

  for (const num of nums) {
    const difference = target - num;

    if (values.has(difference)) return num * difference;

    values.add(num);
  }
};

const part2 = (nums, target) => {
  const values = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const difference = target - (nums[i] + nums[j]);

      if (values.has(difference)) {
        return difference * nums[i] * nums[j];
      }
    }
  }
};

console.log(part1(values, 2020)); // Answer: 1007104
console.log(part2(values, 2020)); // Answer: 18847752
