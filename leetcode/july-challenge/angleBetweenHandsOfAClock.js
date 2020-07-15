const angleClock = (hour, minutes) => {
  const minuteHandLoc = Math.floor(minutes / 5) || 12;

  const findDistance = (h1, h2) => {
    const directDistance = Math.abs(h1 - h2);

    if (directDistance > 6) {
      return 12 - Math.max(h1, h2) + Math.min(h1, h2);
    } else {
      return directDistance;
    }
  };

  const distance = findDistance(minuteHandLoc, hour);
  const minDegrees = distance * 30;
  const minAlter = (minutes % 5) * 6;
  const hourAlter = (minutes * 30) / 60;

  if (distance < 6) {
    const minsExpand =
      minuteHandLoc + distance === hour ||
      distance - (12 - minuteHandLoc) === hour
        ? false
        : true;

    if (minsExpand) {
      return Math.abs((minDegrees + minAlter - hourAlter).toFixed(5));
    } else {
      return Math.abs((minDegrees - minAlter + hourAlter).toFixed(5));
    }
  } else {
    return Math.abs(
      Math.min(
        minDegrees + minAlter - hourAlter,
        minDegrees - minAlter + hourAlter
      ).toFixed(5)
    );
  }
};

const angleClock = (hour, minutes) => {
  hour = hour === 12 ? 0 : hour;
  const totalDeg = 360;
  const hourDeg = hour * 30 + (30 * minutes) / 60;
  const minutesDeg = (minutes * totalDeg) / 60;
  const angle = Math.abs(minutesDeg - hourDeg);

  return Math.min(totalDeg - angle, angle);
};
