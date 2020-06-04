const reverseString = (s) => {
  s.sort((a, b) => -1);
  return s;
};
const reverseString = (s) => {
  return s.reverse();
};
const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left += 1;
    right -= 1;
  }

  return s;
};
