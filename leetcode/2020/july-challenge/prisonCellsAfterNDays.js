const prisonAfterNDays = (cells, N) => {
  const memo = new Map();
  const map = new Map();
  const occupancy = cells.join('');

  memo.set(occupancy, 0);
  map.set(0, occupancy);

  const changeDay = () => {
    let prev = cells[0];

    for (let i = 1; i < cells.length - 1; i++) {
      const temp = cells[i];

      if (prev === cells[i + 1]) {
        cells[i] = 1;
      } else {
        cells[i] = 0;
      }

      prev = temp;
    }

    cells[0] = 0;
    cells[cells.length - 1] = 0;
  };

  for (let i = 1; i <= N; i++) {
    changeDay();

    const c = cells.join('');

    if (i === N) return cells;

    if (memo.has(c)) {
      console.log(map);

      const cycleLength = i - memo.get(c);
      const nonCycle = memo.get(c);
      const cycleIndex = (N - nonCycle) % cycleLength;

      return map
        .get(nonCycle + cycleIndex)
        .split('')
        .map((n) => Number(n));
    }

    memo.set(c, i);
    map.set(i, c);
  }
};

const prisonAfterNDays = (cells, N) => {
  const MAX = 2 * cells.length - 2;
  const cycleIndex = N % MAX;

  N = cycleIndex === 0 ? MAX : cycleIndex;

  const changeDay = () => {
    let prev = cells[0];

    for (let i = 1; i < cells.length - 1; i++) {
      const temp = cells[i];

      cells[i] = prev === cells[i + 1] ? 1 : 0;
      prev = temp;
    }

    cells[0] = 0;
    cells[cells.length - 1] = 0;
  };

  while (N > 0) {
    changeDay();
    N--;
  }

  return cells;
};
