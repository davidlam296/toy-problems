const originalDigits = (s) => {
  // z - zero
  // x - six
  // w - two
  // u - four
  // g - eight
  // h - three
  // o - one
  // f - five
  // s - seven
  // nine

  const nums = new Array(10).fill();
  const charMap = new Map();

  for (const char of s) {
    charMap.set(char, (charMap.has(char) ? charMap.get(char) : 0) + 1);
  }

  const oNums = [0, 2, 4, 6, 8, 3, 1, 5, 7, 9];
  const order = [
    'zero',
    'two',
    'four',
    'six',
    'eight',
    'three',
    'one',
    'five',
    'seven',
    'nine',
  ];
  const keyChar = ['z', 'w', 'u', 'x', 'g', 'h', 'o', 'f', 's', 'i'];
  let index = 0;

  while (charMap.size > 0 && index < order.length) {
    const count = charMap.get(keyChar[index]) || 0;

    for (const char of order[index]) {
      if (charMap.get(char) - count === 0) charMap.delete(char);
      else charMap.set(char, charMap.get(char) - count);
    }

    nums[oNums[index]] = count;
    index++;
  }

  return nums.reduce(
    (res, count, index) =>
      count > 0 ? res + new Array(count).fill(index).join('') : res,
    ''
  );
};
