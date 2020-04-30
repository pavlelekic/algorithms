
export default class PairCache {
    __cache = {};

    constructor(initialValue = 0) {
        super();
        this.__undefinedEl = initialValue;
    }

    initializeWith = (el) => this.__undefinedEl = el;

    __cacheKey = (x, y) => `${x}:${y}`;

    get = (x, y) => {
        const ck = this.__cacheKey(x, y);
        return typeof this.__cache[ck] === 'undefined' ? this.__undefinedEl : this.__cache[ck];
    }

    set = (x, y, value) => this.__cache[this.__cacheKey(x, y)] = value;
}
