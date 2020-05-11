/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
export default function(hand, W) {
    const remainingCards = {};
    hand.forEach(num => {
        remainingCards[num] = typeof remainingCards[num] === 'undefined' ? 1 : 1 + remainingCards[num];
    });

    const numCompare = (a, b) => a - b;
    hand.sort(numCompare);

    let usedCards = 0;
    let card;
    
    while(usedCards < hand.length) {
        for (let i = 0; i < hand.length; i++) {
            card = hand[i];
            if (remainingCards[card] > 0) {
                remainingCards[card]--;
                usedCards++;
                // are there w consecutive cards?
                for (let j = 1; j < W; j++) {
                    if (typeof remainingCards[card + j] === "undefined" || remainingCards[card + j] === 0) {
                        return false;
                    }
                    remainingCards[card + j]--;
                    usedCards++;
                }
                i--;
            }
        }
    }

    return true;
};
