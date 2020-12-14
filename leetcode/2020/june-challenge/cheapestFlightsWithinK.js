// Recursion, Time Limit Exceeded
// const findCheapestPrice = (n, flights, src, dst, K) => {
//   const map = new Map();

//   for (const [c, d, p] of flights) {
//     if (!map.has(c)) {
//       map.set(c, new Set())
//     }

//     map.get(c).add([d, p]);
//   }

//   const findRoute = (city, price, stops) => {
//     if (city === dst) return price;
//     if (stops === -1) return Infinity;
//     if (!map.has(city)) return Infinity;

//     let cheapest = Infinity;

//     map.get(city).forEach(([d, p]) => {
//       cheapest = Math.min(cheapest, findRoute(d, price + p, stops - 1));
//     })

//     return cheapest;
//   }

//   const cheapest = findRoute(src, 0, K);
//   return cheapest === Infinity ? -1 : cheapest;
// };

// Attempt at optimizing, using memoization
// const findCheapestPrice = (n, flights, src, dst, K) => {
//   const map = new Map();

//   for (const [c, d, p] of flights) {
//     if (!map.has(c)) {
//       map.set(c, new Set())
//     }

//     map.get(c).add([d, p]);
//   }

//   const findRoute = (city, stops, from) => {
//     if (city === dst) return [0, stops];
//     if (stops === -1) return [Infinity, stops];
//     if (!map.has(city)) return [Infinity, stops];

//     let cheapest = Infinity;

//     map.get(city).forEach(([d, p]) => {
//       if (!from.has(d)) {
//         const [cost, stopsLeft] = findRoute(d, stops - 1, new Set([...from, city]));
//         cheapest = Math.min(cheapest, p + cost);
//       }
//     })

//     return [cheapest, stops];
//   }

//   const [cheapest] = findRoute(src, K, new Set([src]));
//   return cheapest === Infinity ? -1 : cheapest;
// };

const findCheapestPrice = (n, flights, src, dst, K) => {
  const map = new Map();

  for (const [c, d, p] of flights) {
    (map.get(c) || map.set(c, new Set()).get(c)).add([d, p]);
  }

  const queue = [];

  // [price, # of stops, visited]
  queue.push([0, -1, src, new Set([src])]);

  while (queue.length > 0) {
    const [price, stops, location, visited] = queue.pop();

    if (location === dst) return price;
    if (stops === K || !map.has(location)) continue;

    for (const [to, cost] of map.get(location)) {
      if (!visited.has(to)) {
        queue.push([price + cost, stops + 1, to, new Set([...visited, to])]);
      }
    }

    queue.sort(([priceA], [priceB]) => priceB - priceA);
  }

  return -1;
};

console.log(
  findCheapestPrice(
    17,
    [
      [0, 12, 28],
      [5, 6, 39],
      [8, 6, 59],
      [13, 15, 7],
      [13, 12, 38],
      [10, 12, 35],
      [15, 3, 23],
      [7, 11, 26],
      [9, 4, 65],
      [10, 2, 38],
      [4, 7, 7],
      [14, 15, 31],
      [2, 12, 44],
      [8, 10, 34],
      [13, 6, 29],
      [5, 14, 89],
      [11, 16, 13],
      [7, 3, 46],
      [10, 15, 19],
      [12, 4, 58],
      [13, 16, 11],
      [16, 4, 76],
      [2, 0, 12],
      [15, 0, 22],
      [16, 12, 13],
      [7, 1, 29],
      [7, 14, 100],
      [16, 1, 14],
      [9, 6, 74],
      [11, 1, 73],
      [2, 11, 60],
      [10, 11, 85],
      [2, 5, 49],
      [3, 4, 17],
      [4, 9, 77],
      [16, 3, 47],
      [15, 6, 78],
      [14, 1, 90],
      [10, 5, 95],
      [1, 11, 30],
      [11, 0, 37],
      [10, 4, 86],
      [0, 8, 57],
      [6, 14, 68],
      [16, 8, 3],
      [13, 0, 65],
      [2, 13, 6],
      [5, 13, 5],
      [8, 11, 31],
      [6, 10, 20],
      [6, 2, 33],
      [9, 1, 3],
      [14, 9, 58],
      [12, 3, 19],
      [11, 2, 74],
      [12, 14, 48],
      [16, 11, 100],
      [3, 12, 38],
      [12, 13, 77],
      [10, 9, 99],
      [15, 13, 98],
      [15, 12, 71],
      [1, 4, 28],
      [7, 0, 83],
      [3, 5, 100],
      [8, 9, 14],
      [15, 11, 57],
      [3, 6, 65],
      [1, 3, 45],
      [14, 7, 74],
      [2, 10, 39],
      [4, 8, 73],
      [13, 5, 77],
      [10, 0, 43],
      [12, 9, 92],
      [8, 2, 26],
      [1, 7, 7],
      [9, 12, 10],
      [13, 11, 64],
      [8, 13, 80],
      [6, 12, 74],
      [9, 7, 35],
      [0, 15, 48],
      [3, 7, 87],
      [16, 9, 42],
      [5, 16, 64],
      [4, 5, 65],
      [15, 14, 70],
      [12, 0, 13],
      [16, 14, 52],
      [3, 10, 80],
      [14, 11, 85],
      [15, 2, 77],
      [4, 11, 19],
      [2, 7, 49],
      [10, 7, 78],
      [14, 6, 84],
      [13, 7, 50],
      [11, 6, 75],
      [5, 10, 46],
      [13, 8, 43],
      [9, 10, 49],
      [7, 12, 64],
      [0, 10, 76],
      [5, 9, 77],
      [8, 3, 28],
      [11, 9, 28],
      [12, 16, 87],
      [12, 6, 24],
      [9, 15, 94],
      [5, 7, 77],
      [4, 10, 18],
      [7, 2, 11],
      [9, 5, 41],
    ],
    13,
    4,
    13
  )
);
