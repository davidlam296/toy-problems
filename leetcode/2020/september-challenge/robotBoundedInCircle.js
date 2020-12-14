const isRobotBounded = (instructions) => {
  if (!instructions.includes('G')) return true;

  const directions = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
  ];
  let x = 0;
  let y = 0;
  let current = 0;

  for (let i = 0; i < 4; i++) {
    for (let move of instructions) {
      if (move === 'G') {
        x += directions[current].x;
        y += directions[current].y;
      } else if (move === 'R') {
        if (current === 3) {
          current = 0;
        } else {
          current++;
        }
      } else {
        if (current === 0) {
          current = 3;
        } else {
          current--;
        }
      }
    }
  }

  if (x === 0 && y === 0) {
    return true;
  }

  return false;
};
