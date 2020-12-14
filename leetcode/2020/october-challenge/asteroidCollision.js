const asteroidCollision = (asteroids) => {
  const left = [];
  const right = [];

  for (const a of asteroids) {
    let destroyed = false;

    if (a < 0) {
      while (right.length > 0) {
        const collision = right.pop();
        const size = Math.abs(a);

        if (collision === size) {
          destroyed = true;
          break;
        }

        if (collision > size) {
          right.push(collision);
          destroyed = true;
          break;
        }
      }

      if (!destroyed) left.push(a);
    } else {
      right.push(a);
    }
  }

  return [...left, ...right];
};
