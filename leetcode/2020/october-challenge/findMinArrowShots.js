const findMinArrowShots = (points) => {
  if (points.length <= 1) return points.length;

  let result = 0;

  points.sort(([a1, a2], [b1, b2]) => {
    if (a1 === b1) {
      return a2 - b2;
    } else {
      return a1 - b1;
    }
  });

  let lowest = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > lowest) {
      result++;
      lowest = points[i][1];
    } else {
      lowest = Math.min(lowest, points[i][1]);
    }
  }

  return result + 1;
};
