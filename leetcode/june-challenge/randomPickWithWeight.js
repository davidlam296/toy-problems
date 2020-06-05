class Solution {
  constructor(w) {
    this.weights = [];
    this.total = 0;

    for (const weight of w) {
      this.total += weight;
      this.weights.push(this.total);
    }
  }

  pickIndex() {
    const pick = Math.floor(Math.random() * this.total) + 1;
    let start = 0;
    let end = this.weights.length - 1;

    while (start < end) {
      const curr = Math.floor((end + start) / 2);
      if (this.weights[curr] === pick) {
        return curr;
      } else if (this.weights[curr] > pick) {
        if (this.weights[curr - 1] < pick) {
          return curr;
        } else {
          end = curr - 1;
        }
      } else {
        start = curr + 1;
      }
    }

    return start;
  }
}
