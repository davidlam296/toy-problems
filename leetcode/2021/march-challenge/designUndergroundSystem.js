class UndergroundSystem {
  constructor() {
    this.travelers = new Map();
    this.data = new Map();
  }

  checkIn(id, stationName, t) {
    if (this.travelers.has(id)) return;

    this.travelers.set(id, [stationName, t]);
  }

  checkOut(id, stationName, t) {
    if (!this.travelers.has(id)) return;

    const [startStation, timeEntered] = this.travelers.get(id);
    const startToEnd = `${startStation},${stationName}`;

    this.travelers.delete(id);

    if (!this.data.has(startToEnd)) {
      this.data.set(startToEnd, { totalTime: 0, count: 0 });
    }

    const dataObj = this.data.get(startToEnd);

    dataObj.totalTime += t - timeEntered;
    dataObj.count++;
  }

  getAverageTime(startStation, endStation) {
    const startToEnd = `${startStation},${endStation}`;

    if (this.data.has(startToEnd)) {
      const { totalTime, count } = this.data.get(startToEnd);

      return totalTime / count;
    }
  }
}
