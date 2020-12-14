
class RandomizedSet {
  /**
  * Initialize your data structure here.
  */
  constructor() {
    this.set = {};
  }
  
  /**
  * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
  * @param {number} val
  * @return {boolean}
  */
  insert(val) {
    if (this.set[val]) return false;
    else {
      this.set[val] = true;
      return this.set[val];
    }
  };

  /**
  * Removes a value from the set. Returns true if the set contained the specified element. 
  * @param {number} val
  * @return {boolean}
  */
  remove(val) {
    if (!this.set[val]) return false;
    else {
      delete this.set[val];
      return true;
    }
  };

  /**
  * Get a random element from the set.
  * @return {number}
  */
  getRandom() {
    const values = Object.keys(this.set);
    const random = Math.floor(Math.random() * values.length);
    return Number(values[random]);
  };
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


 