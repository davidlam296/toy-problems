const insert = (intervals, newInterval) => {
  if (intervals.length < 1) {
    if (newInterval.length === 2) intervals.push(newInterval);

    return intervals;
  }

  if (newInterval.length < 2) return intervals;

  let start = null;
  let end = null;

  const interval = [];

  for (let i = 0; i < intervals.length; i++) {
    const int = intervals[i];

    if (start === null) {
      if (int[0] <= newInterval[0]) {
        if (int[1] >= newInterval[0]) {
          if (int[1] > newInterval[1]) {
            start = -1;
          } else {
            start = i;
            interval[0] = int[0];
          }
        }
      } else {
        if (newInterval[1] < int[0]) {
          start = i;
          end = i;
          interval[0] = newInterval[0];
          interval[1] = newInterval[1];
          break;
        } else {
          start = i;
          interval[0] = newInterval[0];

          if (newInterval[1] <= int[1]) {
            end = i + 1;
            interval[1] = int[1];
            break;
          }
        }
      }
    } else {
      if (int[0] > newInterval[1]) {
        end = i;
        interval[1] = newInterval[1];
        break;
      } else {
        if (int[1] >= newInterval[1]) {
          end = i + 1;
          interval[1] = int[1];
          break;
        }
      }
    }
  }

  if (start >= 0 && start !== null) {
    if (end === null) {
      end = intervals.length;
      interval[1] = newInterval[1];
    }
    intervals.splice(start, end - start, interval);
  } else {
    if (start !== -1) intervals.push(newInterval);
  }

  return intervals;
};
