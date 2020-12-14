const minCostToMoveChips = (position) => {
  if (position.length <= 1) return 0;

  const location = new Map();
  let odd = 0;
  let even = 0;

  for (const chip of position) {
    location.set(chip, location.has(chip) ? location.get(chip) + 1 : 1);

    if (chip % 2 === 0) even++;
    else odd++;
  }

  if (location.size === 1) return 0;
  else return Math.min(odd, even);
};
