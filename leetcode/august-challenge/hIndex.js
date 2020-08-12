const hIndex = (citations) => {
  if (citations.length < 1) return 0;
  if (citations.length === 1) return citations[0] > 0 ? 1 : 0;

  citations = citations.sort((a, b) => a - b);

  let h = 0;
  let start = 0;
  let end = citations.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const score = citations[mid];
    const count = citations.length - mid;

    if (score === count) return score;

    if (score > count) {
      h = Math.max(h, count);
      end = mid - 1;
    } else {
      h = Math.max(h, score);
      start = mid + 1;
    }
  }

  const count = citations.length - start;

  return Math.max(h, citations[start] > count ? count : citations[start]);
};
