
// We have a set of items: the i-th item has value values[i] and label labels[i].

// Then, we choose a subset S of these items, such that:

// |S| <= num_wanted
// For every label L, the number of items in S with label L is <= use_limit.
// Return the largest possible sum of the subset S.

 

const set = {
    // labelCounts: {
    //     1: 24,
    //     4: 2
    // },
    // indexes: [1, 2, 3, 4],
    // maxSum: -infinity,
    // prevSum
};

function permutations(state, labels, values, numsWanted, useLimit) {
    if (set.indexes.length <= numsWanted) {
        state.maxSum = Math.max(
            state.prevSum,
            state.maxSum
        );
        for (let i = 0; i < values.length; i++) {
            if (state.labelsCount[labels[i]] <= useLimit) {
                state.labelsCount[labels[i]]++;
                state.indexes.push(i);
                state.prevSum += values[i];
                permutations(state, labels, values, numsWanted, useLimit)
                state.labelsCount[labels[i]]--;
                state.indexes.pop();
                state.prevSum -= values[i];
            }
        }
    }
}

export default function solution(labels, values, numsWanted, useLimit) {
    const state = {
        labelCounts: {},
        indexes: [],
        maxSum: 0,
        prevSum: 0
    };
    permutations(state, labels, values, numsWanted, useLimit);
    return state.maxSum;
}