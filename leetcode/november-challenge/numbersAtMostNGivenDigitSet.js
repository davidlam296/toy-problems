const atMostNGivenDigitSet = (digits, n) => {
  let result = 0;

  digits.sort();
  n = n.toString();

  const NUM_DIGITS = n.length;

  for (let i = 1; i < NUM_DIGITS; i++) {
    result += digits.length ** i;
  }

  for (let i = 0; i < NUM_DIGITS; i++) {
    const valid = digits.filter((digit) => digit < n[i]);

    result += valid.length * digits.length ** (NUM_DIGITS - i - 1);

    if (!digits.includes(n[i])) break;
    if (i === NUM_DIGITS - 1) result++;
  }

  return result;
};
