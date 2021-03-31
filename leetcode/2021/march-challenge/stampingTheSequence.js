const movesToStamp = (stamp, target) => {
  if (stamp.length === target.length) return stamp === target ? [0] : [];

  const T = target.split('');
  const S = stamp.split('');
  const S_LEN = S.length;

  const isMatching = (start) => {
    let stampIndex = 0;

    for (let i = start; i < S_LEN + start; i++) {
      if (T[i] !== 0 && T[i] !== S[stampIndex]) return false;
      stampIndex++;
    }

    return true;
  };

  const mask = (start) => {
    for (let i = start; i < S_LEN + start; i++) {
      T[i] = 0;
    }
  };

  const stamped = new Set();
  const result = [];
  let unchanged = false;

  while (!unchanged) {
    unchanged = true;

    for (let i = 0; i <= T.length - S_LEN; i++) {
      if (stamped.has(i)) continue;
      if (isMatching(i)) {
        stamped.add(i);
        result.unshift(i);
        mask(i);
        unchanged = false;
      }
    }
  }

  return T.filter((c) => c !== 0).length === 0 ? result : [];
};
