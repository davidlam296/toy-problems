const calcEquation = (equations, values, queries) => {
  const map = {};

  for (const [dividend, divisor] of equations) {
    map[dividend] = [];
    map[divisor] = [];
  }

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const quotient = values[i];

    map[a].push([b, quotient]);
    map[b].push([a, 1 / quotient]);
  }

  const dfs = (start, curr, end, quotient, visited = new Set()) => {
    if (!map[end] || !map[start]) return -1;
    if (start === end) return 1;
    if (curr === end) return quotient;

    visited.add(curr);

    for (const [nextCurr, weight] of map[curr]) {
      if (!visited.has(nextCurr)) {
        const result = dfs(start, nextCurr, end, quotient * weight, visited);

        if (result !== false) return result;
      }
    }

    return false;
  };

  return queries.map(
    ([dividend, divisor]) => dfs(dividend, dividend, divisor, 1) || -1
  );
};
