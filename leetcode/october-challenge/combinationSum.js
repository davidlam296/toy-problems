const combinationSum = (candidates, target) => {
  candidates = candidates.sort((a, b) => a - b);
  const result = [];

  const search = (curr, total, index) => {
    if (total === target) {
      result.push(curr);
      return;
    }

    if (total > target) return -1;

    for (let i = index; i < candidates.length; i++) {
      const num = candidates[i];

      if (search([...curr, num], total + num, i) === -1) break;
    }
  };

  for (let i = 0; i < candidates.length; i++) {
    const num = candidates[i];

    if (num > target) break;
    search([num], num, i);
  }

  return result;
};
