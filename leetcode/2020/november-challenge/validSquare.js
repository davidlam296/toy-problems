const validSquare = function (p1, p2, p3, p4) {
  const points = [p1, p2, p3, p4].sort(([x1, y1], [x2, y2]) =>
    x1 === x2 ? y1 - y2 : x1 - x2
  );

  const findDist = ([x1, y1], [x2, y2]) => {
    const a = (x1 - x2) ** 2;
    const b = (y1 - y2) ** 2;

    return Math.sqrt(a + b);
  };

  const distances = [
    findDist(points[0], points[1]),
    findDist(points[0], points[2]),
    findDist(points[1], points[3]),
    findDist(points[2], points[3]),
    findDist(points[0], points[3]),
    findDist(points[1], points[2]),
  ];

  for (let i = 0; i < distances.length; i++) {
    if (distances[i] === 0) return false;
  }

  if (
    distances[0] === distances[1] &&
    distances[0] === distances[2] &&
    distances[0] === distances[3] &&
    distances[4] === distances[5]
  )
    return true;

  return false;
};
