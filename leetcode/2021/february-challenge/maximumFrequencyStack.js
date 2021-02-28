class FreqStack {
  constructor() {
    this.counts = new Map();
    this.freqs = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.counts.set(x, (this.counts.get(x) || 0) + 1);

    const freq = this.counts.get(x);

    if (this.freqs[freq]) this.freqs[freq].push(x);
    else this.freqs[freq] = [x];
  }

  /**
   * @return {number}
   */
  pop() {
    const highestFreq = this.freqs[this.freqs.length - 1];
    const result = highestFreq.pop();

    if (this.counts.get(result) === 1) this.counts.delete(result);
    else this.counts.set(result, this.counts.get(result) - 1);

    if (highestFreq.length === 0) this.freqs.pop();

    return result;
  }
}
