
const numCompare = (a, b) => a - b;

/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {number[]}
 */
export default function(source, target) {
    debugger;
    const targetSorted = target.slice();
    targetSorted.sort(numCompare);

    source.sort(numCompare);

    const pairs = {};
    const fillerElements = [];
    
    let indexSource = 0;
    let indexTarget = 0;
    
    while (indexTarget < targetSorted.length && indexSource < source.length) {
        if (source[indexSource] > targetSorted[indexTarget]) {
            pairs[targetSorted[indexTarget++]] = source[indexSource++];
        } else {
            fillerElements.push(source[indexSource++]);
        }
    }
    
    const result = new Array(target.length);
    
    for (let i = 0; i < target.length; i++) {
        if (typeof pairs[target[i]] !== 'undefined') {
            result[i] = pairs[target[i]];
        } else {
            result[i] = fillerElements.pop();
        }
    }
    
    return result;
};
