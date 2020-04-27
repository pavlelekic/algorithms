

function minSteps(arr, pos) {
    if (pos === arr.length -1) return true;
    if (arr[pos] === 0) return false;

    for (let i = 1; i <= arr[pos]; i++) {
        if (arr.length > pos + i && minSteps(arr, pos + i)) {
            return true;
        }
    }
    return false;
}

export default function solution(arr) {
    const minSteps = minSteps(arr, 0);
    return !Number.POSITIVE_INFINITY === minSteps;
}



function solution2(arr) {
    const wasCalculated = {};
    const reachablePositions = [0]; // from, amount
    let pos;
    let amount;
    while (reachablePositions.length > 0) {
        pos = reachablePositions.pop();
        amount = arr[pos];
        if (pos + amount === arr.length - 1) return true;
        if (amount !== 0) {
            for (let i = 1; i <= amount; i++) {
                if (pos + i < arr.length && !wasCalculated[pos + i]) {
                    reachablePositions.push(pos + i);
                    wasCalculated[pos + i] === true;
                }
            }
        }
    }

    return false;
}


function solution3(arr) {
    let canReachIndex = 0;
    for (let i = 0; i <= canReachIndex; i++) {
        if (i === arr.length - 1) return true;
        canReachIndex = Math.max(i + arr[i], canReachIndex);
    }
    return false;
}
