const kWeakestRows = (mat, k) => {
  const rows = mat
    .map((row, index) => {
      return [row.filter((n) => n === 1).length, index];
    })
    .sort(([s1, i1], [s2, i2]) => (s1 === s2 ? i1 - i2 : s1 - s2));

  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(rows[i][1]);
  }

  return result;
};
