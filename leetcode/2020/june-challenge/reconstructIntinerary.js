const findItinerary = (tickets) => {
  const map = new Map();

  for (const [index, ticket] of tickets.entries()) {
    if (!map.has(ticket[0])) {
      map.set(ticket[0], []);
    }
    map.get(ticket[0]).push([index, ticket[1]]);
  }

  const sorter = (a, b) => {
    if (a[1] > b[1]) return 1;
    if (b[1] > a[1]) return -1;
    return 0;
  };

  map.forEach((location) => location.sort(sorter));

  const result = ['JFK'];

  const makeIntinerary = (loc, visited = new Set()) => {
    if (visited.size === tickets.length) return true;
    if (!map.has(loc)) return false;

    const destinations = map.get(loc);

    for (const [idx, dest] of destinations) {
      if (!visited.has(idx)) {
        result.push(dest);

        if (makeIntinerary(dest, new Set([...visited, idx]))) return true;

        result.pop();
      }
    }

    return false;
  };

  makeIntinerary(result[0]);

  return result;
};
