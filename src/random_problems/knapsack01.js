
export default class Knapsack01 {
    __maxValue(usedItemsIndex, weightSoFar) {
        if (usedItemsIndex === this.__values.length) return 0;
    
        const ck = `${usedItemsIndex}:${weightSoFar}`;
        if (typeof this.__cache[ck] === 'undefined') {
            this.__cache[ck] = this.__maxValue(usedItemsIndex + 1, weightSoFar);

            if (weightSoFar + this.__weights[usedItemsIndex] < 10) {
                this.__cache[ck] = Math.max(
                    this.__maxValue(usedItemsIndex + 1, weightSoFar + this.__weights[usedItemsIndex]),
                    this.__cache[ck]
               );
            }
        }
    
        return this.__cache[ck];
    }

    solve(values, weights) {
        this.__cache = {};
        this.__values = values;
        this.__weights = weights;
        return this.__maxValue(0, 0);
    }
}
