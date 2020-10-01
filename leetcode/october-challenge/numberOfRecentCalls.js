class RecentCounter {
  constructor(limit = 3000) {
    this.LIMIT = limit;
    this.pings = [];
  }

  ping(t) {
    const MIN = t - this.LIMIT;
    let start = 0;
    let end = this.pings.length;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (this.pings[mid] >= MIN) {
        if (this.pings[mid - 1] < MIN) start = mid;
        end = mid;
      } else {
        if (this.pings[mid + 1] >= MIN) end = mid + 1;
        start = mid + 1;
      }
    }

    this.pings.push(t);
    return this.pings.length - start;
  }
}
