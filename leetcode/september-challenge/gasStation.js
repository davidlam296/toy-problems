const canCompleteCircuit = (gas, cost) => {
  let result = null;
  const starting = [];
  const END = gas.length - 1;

  const checkLoc = (start, gasLeft, loc) => {
    if (gasLeft < 0) return;
    if (loc === start) {
      result = start;
      return;
    }

    const next = loc + 1;

    checkLoc(start, gasLeft + gas[loc] - cost[loc], next > END ? 0 : next);
  };

  for (let i = 0; i <= END; i++) {
    if (gas[i] >= cost[i]) starting.push(i);
  }

  for (const loc of starting) {
    const next = loc + 1;

    if (result === null)
      checkLoc(loc, gas[loc] - cost[loc], next > END ? 0 : next);
    else break;
  }

  return result !== null ? result : -1;
};

const canCompleteCircuit = (gas, cost) => {
  const totalGas = gas.reduce(
    (total, gas, index) => total + gas - cost[index],
    0
  );

  if (totalGas < 0) return -1;

  let currGas = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    const stop = gas[i] - cost[i];

    if (currGas + stop < 0) {
      start = i + 1;
      currGas = 0;
    } else {
      currGas += stop;
    }
  }

  return start;
};
