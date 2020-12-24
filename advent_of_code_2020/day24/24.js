const fs = require('fs');

const directions = fs
  .readFileSync(__dirname + '/24.txt', 'utf8')
  .split('\n')
  .map((row) =>
    row.split('').reduce((finalDirs, char, idx, dirs) => {
      if (dirs[idx - 1] === 's' || dirs[idx - 1] === 'n')
        finalDirs.push(finalDirs.pop() + char);
      else finalDirs.push(char);

      return finalDirs;
    }, [])
  );

// Lobby Layout

const part1 = (dirs) => {
  const tiles = new Map();

  for (const directions of dirs) {
    let [x, y] = [0, 0];

    for (const direction of directions) {
      if (direction === 'nw') {
        x += 1;
        y -= 1;
      } else if (direction === 'ne') {
        x += 1;
        y += 1;
      } else if (direction === 'w') {
        y -= 2;
      } else if (direction === 'e') {
        y += 2;
      } else if (direction === 'sw') {
        x -= 1;
        y -= 1;
      } else if (direction === 'se') {
        x -= 1;
        y += 1;
      }
    }

    const locKey = `${x},${y}`;

    if (tiles.has(locKey)) tiles.set(locKey, tiles.get(locKey) === 1 ? 0 : 1);
    else tiles.set(locKey, 1);
  }

  tiles.forEach((tile, coord) => (tile === 0 ? tiles.delete(coord) : null));

  return [tiles.size, tiles];
};

const getNeighbors = (x, y) => {
  return [
    `${x - 1},${y - 1}`,
    `${x - 1},${y + 1}`,
    `${x},${y - 2}`,
    `${x},${y + 2}`,
    `${x + 1},${y - 1}`,
    `${x + 1},${y + 1}`,
  ];
};

const part2 = (blackTiles, days) => {
  const updateTiles = () => {
    const newTiles = new Map();
    const whiteTiles = new Map();

    blackTiles.forEach((tile, coord) => {
      const [x, y] = coord.split(',').map((n) => Number(n));
      const neighbors = getNeighbors(x, y);

      let blackCount = 0;

      for (const neighbor of neighbors) {
        if (blackTiles.has(neighbor)) blackCount++;
        else whiteTiles.set(neighbor, (whiteTiles.get(neighbor) || 0) + 1);
      }

      if (blackCount === 1 || blackCount === 2) newTiles.set(coord, tile);
    });

    whiteTiles.forEach((count, coord) =>
      count === 2 ? newTiles.set(coord, 1) : null
    );

    blackTiles = newTiles;
  };

  while (days-- > 0) {
    updateTiles();
  }

  return blackTiles.size;
};

const [p1Answer, tiles] = part1(directions);

console.log(p1Answer); // Answer: 326;
console.log(part2(tiles, 100)); // Answer: 3979
