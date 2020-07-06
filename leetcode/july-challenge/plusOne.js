const plusOne = (digits) => {
  let carry = false;
  let i = digits.length - 1;

  const increment = (index) => {
    if (digits[index] + 1 === 10) {
      carry = true;
      digits[index] = 0;
    } else {
      carry = false;
      digits[index] += 1;
    }
  };

  increment(i);

  while (carry && i > 0) {
    i--;
    increment(i);
  }

  if (carry) digits.unshift(1);

  return digits;
};

const plusOne = (digits, idx = digits.length - 1) => {
  if (idx < 0) {
    digits.unshift(1);
    return digits;
  }

  if (digits[idx] === 9) {
    digits[idx] = 0;
    return plusOne(digits, idx - 1);
  }

  digits[idx] += 1;
  return digits;
};
