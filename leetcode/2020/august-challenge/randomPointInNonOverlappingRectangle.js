class Solution {
  constructor(rects) {
    this.coords = {};

    let totalPoints = 0;

    for (let i = 0; i < rects.length; i++) {
      const [x1, y1, x2, y2] = rects[i];
      const weight = (x2 - x1 + 1) * (y2 - y1 + 1);

      totalPoints += weight;
      this.coords[totalPoints] = rects[i];
    }

    this.coords.total = totalPoints;
  }

  pick() {
    const randomNum = Math.floor(Math.random() * this.coords.total) + 1;

    for (const range in this.coords) {
      if (randomNum <= range) {
        const [x1, y1, x2, y2] = this.coords[range];
        const randomX = Math.floor(Math.random() * (x2 - x1 + 1)) + x1;
        const randomY = Math.floor(Math.random() * (y2 - y1 + 1)) + y1;

        return [randomX, randomY];
      }
    }
  }
}
