const fs = require('fs');

const rawData = fs.readFileSync(__dirname + '/3.txt', 'utf8').split('\n');
const map = rawData;

const paths = [
  { r: 1, d: 1 },
  {
    r: 3,
    d: 1,
  },
  {
    r: 5,
    d: 1,
  },
  { r: 7, d: 1 },
  { r: 1, d: 2 },
];

// Toboggan Trajectory

const part1 = (map, right, down) => {
  let trees = 0;
  let index = right;

  for (let i = down; i < map.length; i += down) {
    const row = map[i];
    if (row[index] === '#') trees++;

    index = (index + right) % map[0].length;
  }

  return trees;
};

const part2 = (paths) => {
  const results = [];

  paths.forEach((path) => results.push(part1(map, path.r, path.d)));

  return results.reduce((acc, result) => acc * result, 1);
};

console.log(part1(map, 3, 1)); // Answer: 272 Trees
console.log(part2(paths)); // Answer: 3898725600

// Right 1, down 1. 85 Trees
// Right 3, down 1. 272 trees
// Right 5, down 1. 66 Trees
// Right 7, down 1. 73 Trees
// Right 1, down 2. 35 Trees
