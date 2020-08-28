const findRightInterval = (intervals) => {
  if (intervals.length === 1) return [-1];

  const result = [];
  const available = new Set();
  const map = [];
  let max = -Infinity;

  const getInterval = (target) => {
    let start = 0;
    let end = map.length - 1;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (map[mid][0] === target) {
        result.push(map[mid][1]);
        return;
      } else if (map[mid][0] < target) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    result.push(map[start][1]);
  };

  for (let i = 0; i < intervals.length; i++) {
    const intervalStart = intervals[i][0];

    if (!available.has(intervalStart)) {
      available.add(intervalStart);
      map.push([intervalStart, i]);
    }

    max = Math.max(max, intervalStart);
  }

  map.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] <= max) {
      getInterval(intervals[i][1]);
    } else {
      result.push(-1);
    }
  }

  return result;
};
