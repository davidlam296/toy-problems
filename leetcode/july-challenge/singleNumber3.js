const singleNumber = (nums) => {
  // Use XOR to get remaining 2 non-duplicate digits;
  const singlesSum = nums.reduce((total, n) => total ^ n, 0);

  // Get the length of the sum of the digits in binary form minus one to identify
  const digitsCut = singlesSum.toString(2).length - 1;

  // Find one of the matching digits by filtering out numbers using the digitsCut and then checking against the singlesSum
  const firstNum = nums
    .filter((x) => (x >> digitsCut) & 1)
    .reduce((total, n) => total ^ n, singlesSum);

  // return the identified digit and use XOR to get the second digit from the sum
  return [firstNum, singlesSum ^ firstNum];
};

const singleNumber = (nums) => {
  const map = new Set();
  nums.forEach((n) => (map.has(n) ? map.delete(n) : map.add(n)));
  return [...map];
};
