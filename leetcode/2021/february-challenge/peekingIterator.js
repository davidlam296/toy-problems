class PeekingIterator {
  constructor(iterator) {
    this.data = iterator;
    this.val = this.data.hasNext() ? this.data.next() : null;
    this.done = this.val === null ? true : false;
  }

  peek() {
    return this.done ? null : this.val;
  }

  next() {
    if (this.done) return null;
    else {
      const temp = this.val;

      this.val = this.data.hasNext() ? this.data.next() : null;
      this.done = this.val === null ? true : false;

      return temp;
    }
  }

  hasNext() {
    return !this.done;
  }
}
