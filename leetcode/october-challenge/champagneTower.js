const champagneTower = (poured, query_row, query_glass) => {
  let cups = [poured];

  for (let i = 0; i < query_row; i++) {
    const nextRow = new Array(cups.length + 1).fill(0);

    for (let j = 0; j < cups.length; j++) {
      const extra = Math.max(0, cups[j] - 1);

      nextRow[j] += extra / 2;
      nextRow[j + 1] += extra / 2;
    }

    cups = nextRow;
  }

  return Math.min(1, cups[query_glass]);
};
