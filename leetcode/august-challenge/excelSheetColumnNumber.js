const titleToNumber = (s) => {
  let result = 0;
  let multiplier = s.length - 1;

  //'A'.charCodeAt(0) + 1 = 64

  for (const char of s) {
    result += 26 ** multiplier * (char.charCodeAt(0) - 64);
    multiplier--;
  }

  return result;
};
