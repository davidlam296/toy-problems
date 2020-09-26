const findPoisonedDuration = (timeSeries, duration) => {
  if (timeSeries.length < 1 || duration === 0) return 0;

  let poisonedTime = 0;

  for (let i = 1; i < timeSeries.length; i++) {
    const diff = timeSeries[i] - timeSeries[i - 1];

    if (diff > duration) poisonedTime += duration;
    else poisonedTime += diff;
  }

  return poisonedTime + duration;
};
