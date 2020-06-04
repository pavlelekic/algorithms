/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.nums = [];
    this.indexLookup = {};
    this.length = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // console.log('Inserting', val);
    // console.log(this.length, this.nums, this.indexLookup);
    if (this.indexLookup[val] !== undefined) return false;

    if (this.nums.length === this.length) {
        this.nums.push();
    }
    
    this.indexLookup[val] = this.length;
    this.nums[this.length++] = val;
    // console.log(this.length, this.nums, this.indexLookup);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // console.log('Removing', val);
    // console.log(this.length, this.nums, this.indexLookup);
    const index = this.indexLookup[val];
    if (index === undefined) return false;
    this.nums[index] = this.nums[this.length - 1];
    this.indexLookup[this.nums[index]] = index;

    this.length--;
    this.nums[this.length] = undefined;
    this.indexLookup[val] = undefined;
    // console.log(this.length, this.nums, this.indexLookup);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    // console.log(this.length, JSON.stringify(this.nums));
    return this.nums[Math.floor(this.length * Math.random())];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */