/*
Input Example 1:
4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF

Output Example 1:
(4, 4, E)
(0, 4, W) LOST
*/

/*
Input Example 2:
4 8
(2, 3, N) FLLFR
(1, 0, S) FFRLF

Output Example 2:
(2, 3, W)
(1, 0, S) LOST
*/

// Robot = {
//   x: Number,
//   y: Number,
//   isLost: Boolean,
//   direction: 'N' | 'E' | 'S' | 'W'
// }

const DIRECTIONS = ['N', 'E', 'S', 'W'];

const getDirection = (current) => DIRECTIONS.indexOf(current);

// Turn the robot to the left
const lookLeft = (robot) => {
  const currentDirection = getDirection(robot.direction);
  const newDirection = currentDirection - 1;

  robot.direction =
    newDirection === -1 ? DIRECTIONS[3] : DIRECTIONS[newDirection];
};

// Turn the robot to the right
const lookRight = (robot) => {
  const currentDirection = getDirection(robot.direction);
  const newDirection = currentDirection + 1;

  robot.direction =
    newDirection === 4 ? DIRECTIONS[0] : DIRECTIONS[newDirection];
};

// Check if robot is out of bounds
const isOutOfBounds = (m, n, x, y) => {
  return x < 0 || y < 0 || x > m || y > n;
};

const moveRobot = (m, n, robot) => {
  let currentX = robot.x;
  let currentY = robot.y;

  // Move north
  if (robot.direction === 'N') currentY = robot.y + 1;

  // Move east
  if (robot.direction === 'E') currentX = robot.x + 1;

  // Move south
  if (robot.direction === 'S') currentY = robot.y - 1;

  // Move west
  if (robot.direction === 'W') currentX = robot.x - 1;

  // Check if rover is out of bounds
  if (isOutOfBounds(m, n, currentX, currentY)) {
    robot.isLost = true;
  } else {
    robot.x = currentX;
    robot.y = currentY;
  }
};

// Log robot location
const logRobotLocations = (robots) => {
  robots.forEach((robot) => {
    console.log(
      `(${robot.x}, ${robot.y}, ${robot.direction})${
        robot.isLost ? ' LOST' : ''
      }`
    );
  });
};

const marsRover = (size, ...robotInputs) => {
  const robots = [];
  const [m, n] = size.split(' ');

  robotInputs.forEach((input) => {
    const [position, ops] = input.split(') ');
    const [x, y, direction] = position.substring(1).split(', ');
    const operations = ops.split('');

    const robot = {
      x: parseInt(x),
      y: parseInt(y),
      direction,
      isLost: false,
    };

    operations.forEach((operation) => {
      // Don't do anything if the rover is lost
      if (robot.isLost) return;

      // Look left
      if (operation === 'L') lookLeft(robot);

      // Look right
      if (operation === 'R') lookRight(robot);

      // Move robot
      if (operation === 'F') moveRobot(m, n, robot);
    });

    robots.push(robot);
  });

  logRobotLocations(robots);
};

marsRover('4 8', '(2, 3, E) LFRFF', '(0, 2, N) FFLFRFF');
marsRover('4 8', '(2, 3, N) FLLFR', '(1, 0, S) FFRLF');
