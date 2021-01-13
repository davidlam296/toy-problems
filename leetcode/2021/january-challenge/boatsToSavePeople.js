const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);

  const HALF = limit / 2;
  let count = 0;
  let start = 0;
  let end = people.length - 1;

  if (people[start] > HALF) return people.length;

  while (end > start) {
    if (people[end] < HALF) break;
    if (people[start] + people[end] <= limit) start++;

    end--;
    count++;
  }

  count += Math.ceil((end - start + 1) / 2);

  return count;
};
