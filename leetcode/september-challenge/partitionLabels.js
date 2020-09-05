const partitionLabels = (S) => {
  const last = new Array(26).fill(0);

  for (let i = 0; i < S.length; i++) {
    const charIndex = S.charCodeAt(i) - 'a'.charCodeAt(0);
    last[charIndex] = i;
  }

  const result = [];
  let startOfPartition = 0;
  let charsInPartition = new Set();

  for (let i = 0; i < S.length; i++) {
    const charIndex = S.charCodeAt(i) - 'a'.charCodeAt(0);
    charsInPartition.add(charIndex);

    if (i === last[charIndex]) {
      let validPartition = true;

      for (const charIndex of charsInPartition) {
        if (last[charIndex] > i) {
          validPartition = false;
          break;
        }
      }

      if (validPartition) {
        result.push(i - startOfPartition + 1);
        startOfPartition = i + 1;
        charsInPartition = new Set();
      }
    }
  }

  return result;
};
