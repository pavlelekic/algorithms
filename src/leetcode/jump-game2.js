
function canReach(jumpLengths, index, reached) {
    if (reached[index] === true) return false;
    if (index === jumpLengths.length - 1) return true;

    reached[index] = true;

    for (let jumpLength = jumpLengths[index]; jumpLength > 0; jumpLength--) {
        if (index + jumpLength < jumpLengths.length && canReach(jumpLengths, index + jumpLength, reached)) {
            return true;
        }
    }

    return false;
}

export default function(jumpLengths) {
    const reached = {};
    return canReach(jumpLengths, 0, reached);
}
