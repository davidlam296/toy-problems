const distributeCandies = (candies, num_people) => {
  const result = new Array(num_people).fill(0);

  let index = 0;
  let currentCount = 1;

  while (candies > 0) {
    if (index > num_people - 1) index = 0;
    if (candies > currentCount) {
      result[index] += currentCount;
    } else {
      result[index] += candies;
    }

    candies -= currentCount;
    currentCount++;
    index++;
  }

  return result;
};
