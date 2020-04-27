
export default function solution(root, a, b) {
    if (a === b) return 0;
    let pathA = 0;
    let pathB = 0;
    let foundA = root.value === a;
    let foundB = root.value === b;
    let nodeA = root;
    let nodeB = root;
    while(!foundA && !foundB) {
        if (!foundA) {
            if (a === nodeA.value) {
                foundA = true;
            } else if (a > nodeA.value) {
                nodeA = nodeA.right;
                pathA++;
            } else {
                nodeA = nodeA.left;
                pathA++;
            }
        }
        if (!foundB) {
            if (b === nodeB.value) {
                foundB = true;
            } else if (b > nodeB.value) {
                nodeB = nodeB.right;
                pathB++;
            } else {
                nodeB = nodeB.left;
                pathB++;
            }
        }
        if (nodeA.value === nodeB.value) {
            pathA--;
            pathB--;
        }
    }

    return Math.abs(pathA - pathB) - 1;
}
