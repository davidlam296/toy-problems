const romanToInt = (s) => {
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let value = 0;

  for (let i = 0; i < s.length; i++) {
    const one = s[i];
    const two = i + 1 < s.length ? s[i] + s[i + 1] : null;

    if (two && roman[two]) {
      value += roman[two];
      i++;
    } else {
      value += roman[one];
    }
  }

  return value;
};
