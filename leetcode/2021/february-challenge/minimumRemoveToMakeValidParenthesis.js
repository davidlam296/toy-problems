const minRemoveToMakeValid = (s) => {
  let count = 0;
  let index = 0;

  while (index < s.length) {
    const char = s[index];

    if (char === '(') {
      count--;
    } else if (char === ')') {
      if (count + 1 > 0) {
        if (index > 0) {
          s = s.slice(0, index) + s.slice(index + 1);
        } else {
          s = s.slice(index + 1);
        }

        continue;
      } else {
        count++;
      }
    }

    index++;
  }

  index = s.length - 1;

  while (count < 0) {
    const char = s[index];

    if (char === '(') {
      if (index === 0) {
        s = s.slice(index + 1);
      } else {
        s = s.slice(0, index) + s.slice(index + 1);
      }

      count++;
    }

    index--;
  }

  return s;
};
