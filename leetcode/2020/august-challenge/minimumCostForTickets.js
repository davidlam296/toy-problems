const mincostTickets = (days, costs) => {
  let cheapest = Infinity;
  const map = new Set();

  const findCheapestPlan = (currCost = 0, dayIdx = 0, paidUntil = 0) => {
    const index = `${currCost}+${dayIdx}+${paidUntil}`;

    if (map.has(index)) return;

    if (dayIdx === days.length || paidUntil >= days[days.length - 1]) {
      cheapest = Math.min(cheapest, currCost);
      return;
    }

    let nextIndex;
    let tripEnd = true;

    for (let i = dayIdx; i < days.length; i++) {
      if (days[i] > paidUntil) {
        tripEnd = false;
        nextIndex = i + 1;
        break;
      }
    }

    if (tripEnd) {
      findCheapestPlan(currCost, days.length, 0);
    } else {
      findCheapestPlan(currCost + costs[0], nextIndex, days[nextIndex - 1]);
      findCheapestPlan(currCost + costs[1], nextIndex, days[nextIndex - 1] + 6);
      findCheapestPlan(
        currCost + costs[2],
        nextIndex,
        days[nextIndex - 1] + 29
      );
    }

    map.add(index);
  };

  findCheapestPlan();

  return cheapest;
};

const mincostTickets = (days, costs) => {
  const dp = new Array(days[days.length - 1] + 1);
  const travelingDays = new Set(days);

  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    if (!travelingDays.has(i)) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        (dp[i - 7] || 0) + costs[1],
        (dp[i - 30] || 0) + costs[2]
      );
    }
  }

  return dp[dp.length - 1];
};
