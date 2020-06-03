// Sort by cost difference between A and B
const twoCitySchedCost = (costs) => {
  let result = 0;
  let destA = 0;
  let destB = 0;

  costs.sort(([a1, a2], [b1, b2]) => Math.abs(b1 - b2) - Math.abs(a1 - a2));
  // console.log(costs);

  for (const [a, b] of costs) {
    if (a < b && destA < costs.length / 2) {
      if (destA < costs.length / 2) {
        destA++;
        result += a;
      } else result += b;
    } else {
      if (destB < costs.length / 2) {
        destB++;
        result += b;
      } else result += a;
    }
  }

  return result;
};

// Lowest cost difference for A is the first half of the array
const twoCitySchedCost = (costs) => {
  const TOTAL_PEOPLE = costs.length;
  let result = 0;

  costs.sort(([a1, a2], [b1, b2]) => a1 - a2 - (b1 - b2));
  // console.log(costs);

  for (let i = 0; i < TOTAL_PEOPLE / 2; i++) {
    result += costs[i][0];
  }

  for (let i = TOTAL_PEOPLE / 2; i < TOTAL_PEOPLE; i++) {
    result += costs[i][1];
  }

  return result;
};
