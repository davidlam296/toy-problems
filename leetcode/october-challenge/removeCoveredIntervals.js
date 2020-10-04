const removeCoveredIntervals = (intervals) => {
  if (intervals.length === 1) return 1;

  intervals.sort(([a1, a2], [b1, b2]) => {
    if (a1 - b1 === 0) return b2 - a2;
    return a1 - b1;
  });

  let max = 0;
  let removed = 0;

  for (const [a, b] of intervals) {
    if (b <= max) removed++;
    else max = b;
  }

  return intervals.length - removed;
};
