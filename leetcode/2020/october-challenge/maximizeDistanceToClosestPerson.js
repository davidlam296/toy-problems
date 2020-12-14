const maxDistToClosest = (seats) => {
  const seating = new Array(seats.length).fill(Infinity);

  let seated = -1;
  let furthest = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      seated = i;
      seating[i] = -1;
    } else {
      if (seated >= 0) seating[i] = i - seated;
    }
  }

  seated = -1;

  for (let i = seats.length - 1; i >= 0; i--) {
    if (seats[i] === 1) {
      seated = i;
    } else {
      const distance = seated >= 0 ? seated - i : Infinity;
      seating[i] = Math.min(seating[i], distance);
    }

    furthest = Math.max(furthest, seating[i]);
  }

  return furthest;
};
