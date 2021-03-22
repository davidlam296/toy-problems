const reorderedPowerOf2 = (N) => {
  const possible = {
    1: [1, 2, 4, 8],
    2: [16, 32, 64],
    3: [128, 256, 512],
    4: [1024, 2048, 4096, 8192],
    5: [16384, 32768, 65536],
    6: [131072, 262144, 524288],
    7: [1048576, 2097152, 4194304, 8388608],
    8: [16777216, 33554432, 67108864],
    9: [134217728, 268435456, 536870912],
  };

  const compare = (num) => {
    const numStr = num.toString();
    const numObj = {};

    for (const n of numStr) {
      numObj[n] = (numObj[n] || 0) + 1;
    }

    for (const c in numObj) {
      if (nObj[c] !== numObj[c]) return false;
    }

    return true;
  };

  const nStr = N.toString();
  const nObj = {};

  for (const n of nStr) {
    nObj[n] = (nObj[n] || 0) + 1;
  }

  for (const pos of possible[nStr.length]) {
    if (compare(pos)) return true;
  }

  return false;
};
