const poorPigs = (buckets, minutesToDie, minutesToTest) => {
  const factor = minutesToTest / minutesToDie + 1;
  let pigs = 0;
  let checked = 1;

  while (checked < buckets) {
    checked *= factor;
    pigs++;
  }

  return pigs;
};
