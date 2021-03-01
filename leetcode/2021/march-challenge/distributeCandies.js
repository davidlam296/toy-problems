const distributeCandies = (candyType) => {
  const numTypes = candyType.reduce((types, candy) => {
    types.add(candy);
    return types;
  }, new Set()).size;

  return Math.min(candyType.length / 2, numTypes);
};
