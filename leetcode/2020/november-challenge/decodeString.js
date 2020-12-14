const decodeString = (s, multiple = 1) => {
  let result = [];
  let index = 0;

  while (index < s.length) {
    const charCode = s.charCodeAt(index);

    if (charCode >= 97) {
      result.push(s[index++]);
    } else {
      let multiplier = [s[index++]];
      let phrase = [];

      let xFound = false;
      let numBraces = 1;

      while (!xFound) {
        if (s.charCodeAt(index) === 91) xFound = true;
        else multiplier.push(s[index]);
        index++;
      }

      while (numBraces > 0) {
        if (s.charCodeAt(index) === 91) {
          numBraces++;
          phrase.push(s[index]);
        } else if (s.charCodeAt(index) === 93) {
          if (numBraces - 1 > 0) phrase.push(s[index]);
          numBraces--;
        } else phrase.push(s[index]);

        index++;
      }

      result.push(decodeString(phrase.join(''), Number(multiplier.join(''))));
    }
  }

  return multiple > 1 ? result.join('').repeat(multiple) : result.join('');
};
