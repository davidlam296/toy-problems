const fs = require('fs');

const instructions = fs
  .readFileSync(__dirname + '/8.txt', 'utf8')
  .split('\n')
  .map((row) => row.split(' '))
  .map(([instruction, amount]) => [
    instruction,
    amount[0] === '-' ? -Number(amount.substr(1)) : Number(amount.substr(1)),
  ]);

// Handheld Halting

const part1 = (instructions) => {
  const visited = new Set();
  const LIMIT = instructions.length;
  let [index, acc] = [0, 0];

  while (index < LIMIT && index >= 0 && !visited.has(index)) {
    const [action, qty] = instructions[index];
    let indexChange = 1;

    visited.add(index);

    if (action === 'jmp') indexChange = qty;
    else if (action === 'acc') acc += qty;

    index += indexChange;
  }

  return [index, acc, visited];
};

const part2 = (instructions) => {
  const visited = part1(instructions)[2];
  let res = -1;

  visited.forEach((idx) => {
    if (res < 0) {
      const [action, qty] = instructions[idx];

      if (action === 'jmp') {
        const [index, acc] = part1([
          ...instructions.slice(0, idx),
          ['nop', qty],
          ...instructions.slice(idx + 1),
        ]);

        if (index === instructions.length) res = acc;
      }
    }
  });

  return res;
};

// const part2 = (instructions) =>
//   instructions.reduce((res, [action, qty], i) => {
//     if (res < 0) {
//       if (action === 'jmp') {
//         const [index, acc] = part1([
//           ...instructions.slice(0, i),
//           ['nop', qty],
//           ...instructions.slice(i + 1),
//         ]);

//         if (index === instructions.length) console.log(i);
//         if (index === instructions.length) return acc;
//       }

//       return -1;
//     } else return res;
//   }, -1);

console.log(part1(instructions)[1]); // Answer: 1941
console.log(part2(instructions)); // Answer: 2096
