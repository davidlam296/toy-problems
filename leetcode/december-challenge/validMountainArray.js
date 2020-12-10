const validMountainArray = (arr) => {
  if (arr.length < 3) return false;

  let direction = 'up';

  for (let i = 1; i < arr.length; i++) {
    if (direction === 'up') {
      if (arr[i] === arr[i - 1] || (arr[i] < arr[i - 1] && i < 2)) return false;
      if (arr[i] < arr[i - 1]) direction = 'down';
    } else {
      if (arr[i] >= arr[i - 1]) return false;
    }
  }

  return direction === 'down' ? true : false;
};
