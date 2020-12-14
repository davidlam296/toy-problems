const fs = require('fs');
const { performance } = require('perf_hooks');

const shuttleInfo = fs.readFileSync(__dirname + '/13.txt', 'utf8').split('\n');
shuttleInfo[1] = shuttleInfo[1].split(',');

const part1 = (shuttleInfo) => {
  const buses = shuttleInfo[1].filter((n) => n !== 'x').map((n) => Number(n));

  let fastestID;
  let waitTime = Infinity;

  for (const id of buses) {
    const wait = id - (shuttleInfo[0] % id);

    if (wait < waitTime) {
      waitTime = wait;
      fastestID = id;
    }
  }

  return fastestID * waitTime;
};

// Brute Force

// const part2 = (departTimes) => {
//   departTimes = departTimes.map((n) => (n === 'x' ? n : Number(n)));

//   const [highestID, index] = departTimes.reduce(
//     (high, curr, idx) =>
//       curr === 'x' ? high : curr > high[0] ? [curr, idx] : high,
//     [-Infinity, -1]
//   );

//   const times = [];
//   let start = -index;

//   for (let i = 0; i < departTimes.length; i++) {
//     if (departTimes[i] !== 'x' && departTimes[i] !== highestID)
//       times.push([departTimes[i], start]);

//     start++;
//   }

//   let found = false;
//   let factor = 1;

//   while (!found) {
//     const time = factor * highestID;
//     let count = 0;

//     for (const [id, diff] of times) {
//       if ((time + diff) % id === 0) count++;
//       else break;
//     }

//     if (count === times.length) return time + -index;

//     factor++;
//   }
// };

const part2 = (departTimes) => {
  const times = departTimes.reduce((list, n, idx) => {
    if (n !== 'x') list.push([BigInt(n), BigInt(idx)]);
    return list;
  }, []);

  // To Handle Negatives
  const modulo = (a, b) => {
    const result = a % b;
    return result < 0 ? result + b : result;
  };

  // Solves each mod part of the equation
  const solveMOD = (remainder, base, mod) => {
    const GOAL = 1n;
    const productExceptSelf = mod / base;
    let x;

    for (let i = 1n; i < base; i++) {
      if ((productExceptSelf * i) % base === GOAL) x = i;
    }

    return remainder * productExceptSelf * x;
  };

  // Mod === Product of all bus IDs
  const mod = times.reduce((mod, time) => mod * time[0], 1n);
  let sum = 0n;

  for (const [id, diff] of times) {
    const remainder = modulo(id - diff, id);

    if (remainder === 0) continue;
    else sum += solveMOD(remainder, id, mod);
  }

  return sum % mod;
};

console.log(part1(shuttleInfo)); // Answer: 3269
console.log(part2(shuttleInfo[1])); // Answer: 672754131923874
