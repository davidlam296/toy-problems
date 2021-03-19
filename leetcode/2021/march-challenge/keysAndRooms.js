const canVisitAllRooms = (rooms) => {
  const visited = new Set();
  const queue = [0];

  while (queue.length > 0) {
    const loc = queue.shift();

    if (visited.has(loc)) continue;

    visited.add(loc);

    for (const key of rooms[loc]) {
      queue.push(key);
    }
  }

  return visited.size === rooms.length;
};
