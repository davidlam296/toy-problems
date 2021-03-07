class MyHashMap {
  constructor() {
    this.storage = new Array();
  }

  /**
   * value will always be non-negative.
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    this.storage[key] = value;
  }

  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
   * @param {number} key
   * @return {number}
   */
  get(key) {
    return this.storage[key] !== undefined ? this.storage[key] : -1;
  }

  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    this.storage[key] = undefined;
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
