const largestMultipleOfThree = (digits) => {
  if (digits.length === 1) {
    return Number(digits[0] % 3 === 0) ? '' + digits[0] : '';
  }

  digits.sort((a, b) => b - a);

  if (digits[0] === 0) return '0';

  const total = digits.reduce((total, n) => Number(n) + total, 0);
  const remainder = total % 3;
  const removeOne = new Set([1, 4, 7]);
  const removeTwo = new Set([2, 5, 8]);
  let removeSet = null;

  if (remainder === 1) {
    removeSet = removeOne;
  }

  if (remainder === 2) {
    removeSet = removeTwo;
  }

  const originalLength = digits.length;

  if (remainder !== 0) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (removeSet.has(digits[i])) {
        digits.splice(i, 1);
        break;
      }
    }

    if (digits.length === originalLength) {
      if (removeSet === removeOne) {
        removeSet = removeTwo;
      } else {
        removeSet = removeOne;
      }

      let removed = 0;

      for (let i = digits.length - 1; i >= 0; i--) {
        if (removed === 2) break;
        if (removeSet.has(digits[i])) {
          digits.splice(i, 1);
          removed++;
        }
      }
    }
  }

  return digits.length < 1 ? '' : digits.join('');
};
