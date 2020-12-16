const fs = require('fs');

const rawData = fs.readFileSync(__dirname + '/16.txt', 'utf8').split('\n\n');

const validRanges = rawData[0]
  .split('\n')
  .map((row) => row.split(': '))
  .reduce((validRanges, [type, ranges]) => {
    ranges = ranges.split(' or ').forEach((range) => {
      if (validRanges[type])
        validRanges[type].push(range.split('-').map((n) => Number(n)));
      else validRanges[type] = [range.split('-').map((n) => Number(n))];
    });

    return validRanges;
  }, {});

const myTicket = rawData[1]
  .split('\n')[1]
  .split(',')
  .map((n) => Number(n));

const nearbyTickets = rawData[2].split('\n').reduce((nearbyTickets, ticket) => {
  if (ticket.includes('nearby tickets:')) return nearbyTickets;
  else {
    nearbyTickets.push(ticket.split(',').map((n) => Number(n)));
    return nearbyTickets;
  }
}, []);

// Ticket Translation

const part1 = (validRanges, nearbyTickets) => {
  const validNumbers = new Set();

  for (const type in validRanges) {
    validRanges[type].forEach(([start, end]) => {
      for (let i = start; i <= end; i++) {
        validNumbers.add(i);
      }
    });
  }

  const invalidTickets = new Set();
  let errorRate = 0;

  nearbyTickets.forEach((ticket, index) => {
    for (const num of ticket) {
      if (!validNumbers.has(num)) {
        invalidTickets.add(index);
        errorRate += num;
        break;
      }
    }
  });

  return [errorRate, invalidTickets];
};

const part2 = (validRanges, myTicket, nearbyTickets, invalidTickets) => {
  nearbyTickets = nearbyTickets.filter(
    (t, index) => !invalidTickets.has(index)
  );

  /* Create set of valid nums for every type for constant lookup
  Example: {
    departure location: Set(32,32,33,...615, 626,627,...955),
    ...
  } */
  const validNums = {};

  for (const type in validRanges) {
    validNums[type] = validRanges[type].reduce((range, [start, end]) => {
      for (let i = start; i <= end; i++) {
        range.add(i);
      }
      return range;
    }, new Set());
  }

  /* Set up object for lookup to narrow down possible indicies of each type
  Example: {
    departure location: Set(0,1,2...19),
    ...
  } */
  const possibilities = {};
  const oneToTwenty = new Array(20).fill(0).map((v, idx) => idx);

  for (const type in validRanges) {
    possibilities[type] = new Set(oneToTwenty);
  }

  nearbyTickets.forEach((ticket) => {
    for (const [i, num] of ticket.entries()) {
      for (const type in possibilities) {
        if (possibilities[type].has(i)) {
          if (!validNums[type].has(num)) possibilities[type].delete(i);
        }
      }
    }
  });

  // Filter out possibilties through process of elimination to match types to index (number on ticket).
  // There is at least one type that has only a single valid option.

  const correctTypes = new Map();
  const taken = new Set();
  let currSize = 1;

  while (correctTypes.size < 20) {
    for (const type in possibilities) {
      if (possibilities[type].size === currSize) {
        for (const num of possibilities[type]) {
          if (!taken.has(num)) {
            taken.add(num);
            correctTypes.set(type, num);
            break;
          }
        }

        break;
      }
    }
    currSize++;
  }

  const indiciesOfDeparture = new Set();

  correctTypes.forEach((loc, type) => {
    if (type.includes('departure')) indiciesOfDeparture.add(loc);
  });

  return myTicket.reduce(
    (result, num, index) =>
      (result *= indiciesOfDeparture.has(index) ? num : 1),
    1
  );
};

const [p1Answer, invalidEntries] = part1(validRanges, nearbyTickets);

console.log(p1Answer); // Answer: 26053
console.log(part2(validRanges, myTicket, nearbyTickets, invalidEntries)); // Answer: 1515506256421
