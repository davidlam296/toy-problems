const containsNearbyDuplicate = (nums, k) => {
  const map = {};

  for (const [i, num] of nums.entries()) {
    if (map[num]) {
      map[num].push(i);
    } else {
      map[num] = [i];
    }
  }

  for (const num in map) {
    let prev = map[num][0];

    for (let i = 1; i < map[num].length; i++) {
      if (map[num][i] - prev <= k) return true;
      else prev = map[num][i];
    }
  }

  return false;
};
