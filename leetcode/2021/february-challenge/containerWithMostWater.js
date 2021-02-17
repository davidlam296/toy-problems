const maxArea = (height) => {
  let max = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const h = Math.min(height[start], height[end]);
    const w = end - start;

    max = Math.max(max, h * w);

    if (height[start] > height[end]) end--;
    else start++;
  }

  return max;
};
