const fs = require('fs');

let currMask = null;

const instructions = fs
  .readFileSync(__dirname + '/14.txt', 'utf8')
  .split('\n')
  .map((row) => row.split(' = '))
  .reduce((mem, [type, val]) => {
    if (type === 'mask') {
      mem[val] = [];
      currMask = val;
    } else {
      mem[currMask].push([type, val]);
    }
    return mem;
  }, {});

// Docking Data

const part1 = (instructions) => {
  const mem = {};

  for (const mask in instructions) {
    for (const [address, val] of instructions[mask]) {
      const currVal = mask.split('');
      const bitVal = Number(val).toString(2);
      const BIT_LENGTH = bitVal.length;

      let currBit = 35;

      for (let i = BIT_LENGTH - 1; i >= 0; i--) {
        currVal[currBit] =
          currVal[currBit] === 'X' ? bitVal[i] : currVal[currBit];

        currBit--;
      }

      for (let i = 0; i < currVal.length - BIT_LENGTH; i++) {
        if (currVal[i] === 'X') currVal[i] = '0';
      }

      mem[address] = parseInt(currVal.join(''), 2);
    }
  }

  let total = 0;

  for (const address in mem) {
    total += mem[address];
  }

  return total;
};

const part2 = (instructions) => {
  const mem = {};

  for (const mask in instructions) {
    instructions[mask].forEach(([decoder, val]) => {
      decoder = Number(decoder.substr(4).split(']')[0]).toString(2);

      let result = mask.split('');

      for (let i = 36 - decoder.length, dIdx = 0; i < 36; i++, dIdx++) {
        if (result[i] === '0') result[i] = decoder[dIdx];
      }

      let queue = [result.join('')];
      let cycles = result.filter((bit) => bit === 'X').length;

      while (cycles-- > 0) {
        const newQueue = [];

        queue.forEach((bits) => {
          newQueue.push(bits.replace('X', '0'));
          newQueue.push(bits.replace('X', '1'));
        });

        queue = newQueue;
      }

      queue.forEach((bits) => (mem[parseInt(bits, 2)] = Number(val)));
    });
  }

  let total = 0;

  for (const address in mem) {
    total += mem[address];
  }

  return total;
};

console.log(part1(instructions)); // Answer: 4886706177792
console.log(part2(instructions)); // Answer: 3348493585827
