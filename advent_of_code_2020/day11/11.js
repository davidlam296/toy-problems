const fs = require('fs');

const seats = fs
  .readFileSync(__dirname + '/11.txt', 'utf8')
  .split('\n')
  .map((row) => row.split(''));

// Seating System

const changeSeats = (seats, tolerance, range = 1) => {
  const ROWS = seats.length;
  const COLS = seats[0].length;

  const numAdjacent =
    range === 1
      ? (row, col) => {
          let adj = 0;

          if (row - 1 >= 0 && col - 1 >= 0 && seats[row - 1][col - 1] === '#')
            adj++;
          if (row - 1 >= 0 && seats[row - 1][col] === '#') adj++;
          if (row - 1 >= 0 && col + 1 < COLS && seats[row - 1][col + 1] === '#')
            adj++;
          if (col - 1 >= 0 && seats[row][col - 1] === '#') adj++;
          if (col + 1 < COLS && seats[row][col + 1] === '#') adj++;
          if (row + 1 < ROWS && col - 1 >= 0 && seats[row + 1][col - 1] === '#')
            adj++;
          if (row + 1 < ROWS && seats[row + 1][col] === '#') adj++;
          if (
            row + 1 < ROWS &&
            col + 1 < COLS &&
            seats[row + 1][col + 1] === '#'
          )
            adj++;

          return adj;
        }
      : (row, col) => {
          let count = 0;

          const searchTopLeft = () => {
            let adjust = 1;

            while (row - adjust >= 0 && col - adjust >= 0) {
              if (seats[row - adjust][col - adjust] === '.') adjust++;
              else {
                if (seats[row - adjust][col - adjust] === '#') count++;
                break;
              }
            }
          };
          const searchTop = () => {
            let adjust = 1;

            while (row - adjust >= 0) {
              if (seats[row - adjust][col] === '.') adjust++;
              else {
                if (seats[row - adjust][col] === '#') count++;
                break;
              }
            }
          };
          const searchTopRight = () => {
            let adjust = 1;

            while (row - adjust >= 0 && col + adjust < COLS) {
              if (seats[row - adjust][col + adjust] === '.') adjust++;
              else {
                if (seats[row - adjust][col + adjust] === '#') count++;
                break;
              }
            }
          };
          const searchLeft = () => {
            let adjust = 1;

            while (col - adjust >= 0) {
              if (seats[row][col - adjust] === '.') adjust++;
              else {
                if (seats[row][col - adjust] === '#') count++;
                break;
              }
            }
          };
          const searchRight = () => {
            let adjust = 1;

            while (col + adjust < COLS) {
              if (seats[row][col + adjust] === '.') adjust++;
              else {
                if (seats[row][col + adjust] === '#') count++;
                break;
              }
            }
          };
          const searchBottomLeft = () => {
            let adjust = 1;

            while (row + adjust < ROWS && col - adjust >= 0) {
              if (seats[row + adjust][col - adjust] === '.') adjust++;
              else {
                if (seats[row + adjust][col - adjust] === '#') count++;
                break;
              }
            }
          };
          const searchBottom = () => {
            let adjust = 1;

            while (row + adjust < ROWS) {
              if (seats[row + adjust][col] === '.') adjust++;
              else {
                if (seats[row + adjust][col] === '#') count++;
                break;
              }
            }
          };
          const searchBottomRight = () => {
            let adjust = 1;

            while (row + adjust < ROWS && col + adjust < COLS) {
              if (seats[row + adjust][col + adjust] === '.') adjust++;
              else {
                if (seats[row + adjust][col + adjust] === '#') count++;
                break;
              }
            }
          };

          searchTopLeft();
          searchTop();
          searchTopRight();
          searchLeft();
          searchRight();
          searchBottomLeft();
          searchBottom();
          searchBottomRight();

          return count;
        };

  const toSeat = [];
  const toUnseat = [];

  let numOccupied = 0;
  let numChanged = 0;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (seats[i][j] === 'L') {
        if (numAdjacent(i, j) === 0) {
          toSeat.push([i, j]);
          numChanged++;
          numOccupied++;
        }
      }

      if (seats[i][j] === '#') {
        numOccupied++;

        if (numAdjacent(i, j) >= tolerance) {
          toUnseat.push([i, j]);
          numChanged++;
          numOccupied--;
        }
      }
    }
  }

  toSeat.forEach(([row, col]) => (seats[row][col] = '#'));
  toUnseat.forEach(([row, col]) => (seats[row][col] = 'L'));

  return [numChanged, numOccupied];
};

const part1 = (seats) => {
  seats = seats.map((row) => row.slice());

  while (true) {
    const [changed, occupied] = changeSeats(seats, 4);

    if (changed === 0) return occupied;
  }
};

const part2 = (seats) => {
  seats = seats.map((row) => row.slice());

  while (true) {
    const [changed, occupied] = changeSeats(seats, 5, Infinity);

    if (changed === 0) return occupied;
  }
};

console.log(part1(seats)); // Answer: 2424
console.log(part2(seats)); // Answer: 2208
