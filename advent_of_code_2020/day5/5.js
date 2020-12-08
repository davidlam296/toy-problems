const fs = require('fs');

const values = fs.readFileSync(__dirname + '/5.txt', 'utf8').split('\n');

// Binary Boarding

const findSeat = (path) => {
  let rowStart = 0;
  let rowEnd = 127;
  let colStart = 0;
  let colEnd = 7;

  for (const char of path) {
    if (char === 'F') {
      rowEnd = Math.floor((rowStart + rowEnd) / 2);
    } else if (char === 'B') {
      rowStart = Math.ceil((rowStart + rowEnd) / 2);
    } else if (char === 'L') {
      colEnd = Math.floor((colStart + colEnd) / 2);
    } else if (char === 'R') {
      colStart = Math.ceil((colStart + colEnd) / 2);
    }
  }

  return rowStart * 8 + colStart;
};

const getSeatIDs = (directions) => directions.map((path) => findSeat(path));

const part1 = () =>
  getSeatIDs(values).reduce((highest, id) => Math.max(highest, id), -Infinity);

const part2 = () => {
  const seats = getSeatIDs(values);
  seats.sort((a, b) => a - b);

  const MIN_ID = 85;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] !== i + MIN_ID) return i + MIN_ID;
  }

  return -1;
};

console.log(part1()); // Answer: 883
console.log(part2()); // Answer: 532
