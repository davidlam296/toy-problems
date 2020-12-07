const fs = require('fs');

const rawData = fs.readFileSync(__dirname + '/2.txt', 'utf8').split('\n');
const charCounts = [];
const charKeys = [];
const passwords = [];

rawData.forEach((row) => {
  const rowData = row.split(' ');

  charCounts.push(rowData[0].split('-').map((num) => Number(num)));
  charKeys.push(rowData[1][0]);
  passwords.push(rowData[2]);
});

// Password Philosophy

const part1 = (counts, reqs, passwords) => {
  let result = 0;

  for (let i = 0; i < counts.length; i++) {
    const [min, max] = counts[i];
    const required = reqs[i];
    let count = 0;

    for (const char of passwords[i]) {
      if (char === required) count++;
    }

    if (count >= min && count <= max) result++;
  }

  return result;
};

const part2 = (counts, reqs, passwords) => {
  let result = 0;

  for (let i = 0; i < counts.length; i++) {
    const [idx1, idx2] = counts[i];
    const required = reqs[i];
    let count = 0;

    if (passwords[i][idx1 - 1] === required) count++;
    if (passwords[i][idx2 - 1] === required) count++;

    if (count === 1) result++;
  }

  return result;
};

console.log(part1(charCounts, charKeys, passwords)); // Answer: 640
console.log(part2(charCounts, charKeys, passwords)); // Answer: 472
