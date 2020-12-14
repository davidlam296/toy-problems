const compareVersion = (version1, version2) => {
  const v1 = version1.split('.');
  const v2 = version2.split('.');

  const removeLeadingZeros = (num) => {
    if (!num) return 0;

    let index = 0;
    while (num[index] === '0') {
      index++;
    }

    return Number(num.slice(index)) || 0;
  };

  const end = Math.max(v1.length, v2.length);

  for (let i = 0; i < end; i++) {
    const v1Num = removeLeadingZeros(v1[i]);
    const v2Num = removeLeadingZeros(v2[i]);

    if (v1Num < v2Num) return -1;
    if (v1Num > v2Num) return 1;
  }

  return 0;
};
