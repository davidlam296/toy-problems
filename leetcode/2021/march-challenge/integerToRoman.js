const intToRoman = (num) => {
  const romans = [
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ];

  let rIdx = romans.length - 1;
  let result = '';

  while (num > 0) {
    const romanValue = romans[rIdx][0];

    if (num - romanValue >= 0) {
      result += romans[rIdx][1];
      num -= romanValue;
    } else {
      rIdx--;
    }
  }

  return result;
};
