const largestRectangleArea = (heights) => {
  heights = [0, ...heights, 0];

  const stack = [];

  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const index = stack.pop();
      const width = i - stack[stack.length - 1] - 1;

      max = Math.max(max, width * heights[index]);
    }

    stack.push(i);
  }

  return max;
};
