
export default function(tree) {
    if (!Array.isArray(tree) || tree.length < 4) return 0; // no grandparents

    const n = Math.floor(tree.length / 4);
    tree.unshift(null);
    
    const readVal = (index) => tree[index] === null ? 0 : tree[index];

    let sum = 0;
    let ci;
    // console.log(JSON.stringify(tree));
    for (let i = 1; i <= n; i++) {
        if (tree[i] % 2 === 0) {
            ci = i * 4;
            // console.log({i, ci}, readVal(ci), readVal(ci + 1), readVal(ci + 2), readVal(ci + 3));
            sum += readVal(ci);
            sum += readVal(ci + 1);
            sum += readVal(ci + 2);
            sum += readVal(ci + 3);
            // console.log(sum);
        }
    }
    return sum;
};
