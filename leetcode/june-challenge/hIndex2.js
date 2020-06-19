const hIndex = (citations) => {
  if (citations.length === 0) return 0;

  const LIMIT = citations.length - 1;
  let end = LIMIT;
  let start = 0;
  let result = 0;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    const max = LIMIT - mid + 1;

    if (citations[mid] === max) return max;

    if (citations[mid] > max) {
      result = Math.max(result, max);
      end = mid - 1;
    } else {
      result = Math.max(result, citations[mid]);
      start = mid + 1;
    }
  }

  return result;
};
