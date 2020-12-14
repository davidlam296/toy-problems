const getSkyline = (buildings) => {
  const skyline = [];

  for (const [start, end, height] of buildings) {
    skyline.push([start, height], [end, -height]);
  }

  skyline.sort(([x1, h1], [x2, h2]) => (x1 === x2 ? h2 - h1 : x1 - x2));

  const heights = [];
  const result = [];
  let prevHeight = 0;

  const insert = (height) => {
    let start = 0;
    let end = heights.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (heights[mid] === height) {
        start = mid;
        break;
      }

      if (heights[mid] > height) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    heights.splice(start, 0, height);
  };

  const remove = (height) => {
    let start = 0;
    let end = heights.length - 1;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (heights[mid] === height) {
        start = mid;
        break;
      }

      if (heights[mid] > height) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    heights.splice(start, 1);
  };

  for (const [x, height] of skyline) {
    if (height < 0) {
      remove(-height);
    } else {
      insert(height);
    }

    const currHeight = heights[heights.length - 1] || 0;

    if (prevHeight !== currHeight) {
      result.push([x, currHeight]);
      prevHeight = currHeight;
    }
  }

  return result;
};
