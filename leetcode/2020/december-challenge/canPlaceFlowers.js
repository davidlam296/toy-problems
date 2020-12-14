const canPlaceFlowers = (flowerbed, n) => {
  const END = flowerbed.length;

  let index = 0;

  while (index < END && n > 0) {
    if (flowerbed[index] === 0) {
      if (
        (index - 1 < 0 || flowerbed[index - 1] === 0) &&
        (index + 1 >= END || flowerbed[index + 1] === 0)
      ) {
        flowerbed[index] = 1;
        n--;
      }
    }

    index++;
  }

  return n > 0 ? false : true;
};
