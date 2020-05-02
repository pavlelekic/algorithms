class Coins {
    __minCoins(sum) {
        if (sum < 0) return Number.POSITIVE_INFINITY;
        if (sum === 0) return 0;
        if (typeof this.__cache[sum] === 'undefined') {
            let min = Number.POSITIVE_INFINITY;
            this.__coins.forEach(this.__findMin, this);
            this.__cache[sum] = min + 1;
        }
        return this.__cache[sum];
    }

    __findMin = c => {
        min = Math.min(
            min,
            this.__minCoins(sum - c)
        );
    }

    solution(coins, targetSum) {
        this.__coins = coins;
        this.__cache = {};
        const m = this.__minCoins(targetSum);
        if (m === Number.POSITIVE_INFINITY) return -1;
        
        return m;
    }
}