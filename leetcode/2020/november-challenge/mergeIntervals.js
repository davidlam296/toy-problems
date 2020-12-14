const merge = function (intervals) {
  intervals.sort(([a1, b1], [a2, b2]) => (a1 === a2 ? b1 - b2 : a1 - a2));

  const result = [];
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [x, y] = intervals[i];

    if (y <= end) continue;
    else {
      if (x > end) {
        result.push([start, end]);
        start = x;
        end = y;
      } else {
        end = y;
      }
    }
  }

  result.push([start, end]);

  return result;
};
