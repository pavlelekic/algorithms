
// We have a set of items: the i-th item has value values[i] and label labels[i].

// Then, we choose a subset S of these items, such that:

// |S| <= num_wanted
// For every label L, the number of items in S with label L is <= use_limit.
// Return the largest possible sum of the subset S.


export default function solution(labels, values, numsWanted, useLimit) {
    const items = [];
    
    for (let i = 0; i < values.length; i++) {
        items.push({
            label: labels[i],
            value: values[i]
        });
    }

    items.sort((a, b) => b.value - a.value); // desc sort

    let maxSum = 0;
    const itemsCount = 0;
    const labelCounts = {};
    let ithItem;

    for (let i = 0; i < labels.length && itemsCount <= numsWanted; i++) {
        ithItem = items[i];
        while(labelCounts[ithItem.label] <= useLimit) {
            itemsCount++;
            maxSum += ithItem.value;
            labelCounts[ithItem.label] = typeof labelCounts[ithItem.label] === 'undefined' ? 1 : labelCounts[ithItem.label] + 1;
        }
    }

    return maxSum;
}
