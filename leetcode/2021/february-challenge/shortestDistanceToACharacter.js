const shortestToChar = (s, c) => {
  const result = new Array(s.length);
  const locs = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) locs.push(i);
  }

  let curr = 0;

  for (let i = 0; i < s.length; i++) {
    const distance = Math.abs(i - locs[curr]);

    if (curr + 1 < locs.length && i > locs[curr]) {
      const nextClosest = Math.abs(i - locs[curr + 1]);

      if (nextClosest < distance) {
        curr++;
        result[i] = nextClosest;
        continue;
      }
    }
    result[i] = distance;
  }

  return result;
};
