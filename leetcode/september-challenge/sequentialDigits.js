const sequentialDigits = (low, high) => {
  const result = [];
  const digits = [];
  const queue = [];

  const getNums = (numDigits) => {
    const start = 1;
    const end = 10 - numDigits;

    for (let i = start; i <= end; i++) {
      const nums = [i];
      let next = i + 1;

      while (nums.length < numDigits) {
        nums.push(next);
        next++;
      }

      queue.push(Number(nums.join('')));
    }
  };

  const lowLength = low.toString().length;
  const highLength = high.toString().length;

  for (let i = lowLength; i < highLength + 1; i++) {
    digits.push(i);
  }

  for (const num of digits) {
    getNums(num);
  }

  for (const num of queue) {
    if (num >= low) {
      if (num <= high) {
        result.push(num);
      } else {
        return result;
      }
    }
  }

  return result;
};
