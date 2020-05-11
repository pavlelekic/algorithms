/**
 * @param {number[][]} points
 * @return {number}
 */

// b--c
// |  |
// a--d

const X = 0;
const Y = 1;

var minAreaRect = function(points) {
    const xLookup = {};
    const yLookup = {};
    
    points.forEach(point => {
        if (typeof xLookup[point[X]] === 'undefined') {
            xLookup[point[X]] = [];
        }
        if (typeof yLookup[point[Y]] === 'undefined') {
            yLookup[point[Y]] = [];
        }
        xLookup[point[X]].push(point);
        yLookup[point[Y]].push(point);
    });
    
    const usedPoints = {};
    const isUsedAlready = point => usedPoints[`${point[X]}:${point[Y]}`] === true;
    let minArea = Number.POSITIVE_INFINITY;
    let a;
    
    points.forEach(point => {
        if (!isUsedAlready(point)) {
            a = point;
            xLookup[a[X]].forEach(bCandidate => {
                if (bCandidate[Y] !== a[Y] && !isUsedAlready(bCandidate)) {
                    yLookup[bCandidate[Y]].forEach(cCandidate => {
                        if (bCandidate[X] !== cCandidate[X] && !isUsedAlready(cCandidate)) {
                            // check if D exists
                            // D: [cCandidate[X], a[Y]]
                            if (yLookup[a[Y]].some(dCandidate => cCandidate[X] === dCandidate[X])) {
                                // calc area
                                const deltaX = Math.abs(a[X] - cCandidate[X]);
                                const deltaY = Math.abs(a[Y] - bCandidate[Y]);
                                minArea = Math.min(deltaX * deltaY, minArea);
                            }
                        }
                    });
                }
            });
        }
    });
    
    return minArea === Number.POSITIVE_INFINITY ? 0 : minArea;
};
