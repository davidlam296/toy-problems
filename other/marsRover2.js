const DIRECTIONS = ['N', 'E', 'S', 'W'];

class Robot {
  constructor(x, y, direction) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.isLost = false;
    this.direction = DIRECTIONS.indexOf(direction);
  }

  moveForward(m, n) {
    let newX = this.x;
    let newY = this.y;

    const direction = DIRECTIONS[this.direction];

    if (direction === 'N') newY += 1;
    if (direction === 'E') newX += 1;
    if (direction === 'S') newY -= 1;
    if (direction === 'W') newX -= 1;

    if (this.isOutOfBounds(newX, newY, m, n)) {
      this.isLost = true;
    } else {
      this.x = newX;
      this.y = newY;
    }
  }

  turnLeft() {
    const newDirection = this.direction - 1;
    this.direction = newDirection < 0 ? 3 : newDirection;
  }

  turnRight() {
    const newDirection = this.direction + 1;
    this.direction = newDirection > 3 ? 0 : newDirection;
  }

  isOutOfBounds(x, y, m, n) {
    return x < 0 || y < 0 || x > m || y > n;
  }

  logStatus() {
    console.log(
      `(${this.x}, ${this.y}, ${DIRECTIONS[this.direction]})${
        this.isLost ? ' LOST' : ''
      }`
    );
  }
}

const marsRover = (size, ...robotInputs) => {
  const robots = [];
  const [m, n] = size.split(' ');

  robotInputs.forEach((input) => {
    const [position, ops] = input.split(') ');
    const [x, y, direction] = position.substring(1).split(', ');
    const operations = ops.split('');

    const robot = new Robot(x, y, direction);

    operations.forEach((operation) => {
      // Don't do anything if the rover is lost
      if (robot.isLost) return;

      // Look left
      if (operation === 'L') robot.turnLeft();

      // Look right
      if (operation === 'R') robot.turnRight();

      // Move robot
      if (operation === 'F') robot.moveForward(m, n);
    });

    robots.push(robot);
  });

  robots.forEach((robot) => robot.logStatus());
};

marsRover('4 8', '(2, 3, E) LFRFF', '(0, 2, N) FFLFRFF');
marsRover('4 8', '(2, 3, N) FLLFR', '(1, 0, S) FFRLF');
