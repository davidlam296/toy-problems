const largestNumber = (nums) => {
  const result = nums
    .sort((a, b) => {
      const aStr = a.toString();
      const bStr = b.toString();

      if (aStr.concat(bStr) > bStr.concat(aStr)) return -1;
      return 1;
    })
    .join('');

  return result.charAt(0) === '0' ? '0' : result;
};
