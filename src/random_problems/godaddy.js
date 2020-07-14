'use strict';

const  areAllCoinLettersPresent = (coinsCount, coinLetters) => coinLetters.every(letter => coinsCount[letter] > 0);

export default function fewestCoins(coinsStr) {
    const coins = coinsStr.split('');
    if (coins.length === 0) return 0;
    const coinsCount = {};
    coins.forEach(c => {
        if (coinsCount[c] === undefined) {
            coinsCount[c] = 0;
        }

        coinsCount[c]++;
    });

    const coinLetters = Object.keys(coinsCount);

    let minSubstringLength = coins.length;
    let ch;
    for (let l = 0; l + coinLetters.length < coins.length; l++) {
        const currentCoinsCount = {
            [coins[l]]: 1
        };
        let r = l;
        while (r < coins.length && !areAllCoinLettersPresent(currentCoinsCount, coinLetters)) {
            r++;
            ch = coins[r];
            if (currentCoinsCount[ch] === undefined) currentCoinsCount[ch] = 0;
            currentCoinsCount[ch]++;
        }
        if (r + 1 < coins.length || areAllCoinLettersPresent(currentCoinsCount, coinLetters)) {
          minSubstringLength = Math.min(r - l + 1, minSubstringLength);
        }
    }
    return minSubstringLength;
}
