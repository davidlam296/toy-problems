const scoreOfParentheses = (S) => {
  const eval = (str) => {
    if (str === '()') return 1;

    const segments = [];

    let start = 0;
    let left = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') left++;
      else left--;

      if (left === 0) {
        segments.push(str.slice(start, i + 1));
        start = i + 1;
      }
    }

    if (segments.length > 1) {
      return segments.reduce(
        (score, seg) => (seg === '()' ? score + 1 : score + eval(seg)),
        0
      );
    } else {
      return 2 * eval(segments[0].slice(1, segments[0].length - 1));
    }
  };

  return eval(S);
};
