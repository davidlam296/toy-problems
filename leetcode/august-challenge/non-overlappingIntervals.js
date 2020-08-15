const eraseOverlapIntervals = (intervals) => {
  let result = 0;

  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] === prev[0]) {
      result++;
    } else {
      if (intervals[i][0] >= prev[1]) {
        prev = intervals[i];
      } else {
        if (intervals[i][1] < prev[1]) {
          prev = intervals[i];
        }
        result++;
      }
    }
  }

  return result;
};
