const fourSumCount = (A, B, C, D) => {
  const sumsAB = new Map();

  for (const a of A) {
    for (const b of B) {
      const sum = a + b;

      sumsAB.set(sum, (sumsAB.get(sum) || 0) + 1);
    }
  }

  let result = 0;

  for (const c of C) {
    for (const d of D) {
      const target = 0 - (c + d);

      if (sumsAB.has(target)) result += sumsAB.get(target);
    }
  }

  return result;
};
