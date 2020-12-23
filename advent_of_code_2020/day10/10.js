wconst fs = require('fs');

const jolts = fs
  .readFileSync(__dirname + '/10.txt', 'utf8')
  .split('\n')
  .map((n) => Number(n))
  .sort((a, b) => a - b);

jolts.unshift(0);

// Adapter Array

const part1 = (jolts) => {
  const diffs = [];
  let prev = jolts[0];

  for (let i = 1; i < jolts.length; i++) {
    const diff = jolts[i] - jolts[i - 1];

    diffs[diff] = (diffs[diff] || 0) + 1;
    prev = jolts[i];
  }

  return diffs[1] * (diffs[3] + 1);
};

// Brute Force -- Too Slow

// const part2 = (jolts) => {
//   const exists = new Set(jolts);
//   const END = 155;

//   let count = 1;

//   const bruteForce = (jolt) => {
//     if (jolt === END) {
//       count++;
//       return;
//     }

//     if (exists.has(jolt + 1)) bruteForce(jolt + 1);
//     if (exists.has(jolt + 2)) bruteForce(jolt + 2);
//     if (exists.has(jolt + 3)) bruteForce(jolt + 3);
//   }

//   bruteForce(0);

//   return count;
// };

const part2 = (jolts) => {
  const dp = new Array(jolts.length - 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i < jolts.length; i++) {
    let count = 0;

    for (let j = 1; i - j >= 0; j++) {
      if (j > 3) break;
      if (jolts[i] - jolts[i - j] <= 3) count += dp[i - j];
      dp[i] = count;
    }
  }

  return dp[jolts.length - 1];
};

console.log(part1(jolts)); // Answer: 2040
console.log(part2(jolts)); // Answer: 28346956187648
