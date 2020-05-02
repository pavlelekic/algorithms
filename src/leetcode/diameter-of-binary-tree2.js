
export default class DBT {
    __dfs(node) {
        if (node === null) return {diam: 0, depth: 0};
        const left = this.__dfs(node.left);
        const right = this.__dfs(node.right);

        return {
            diam: Math.max(left.diam, right.diam, left.depth + right.depth),
            depth: Math.max(left.depth, right.depth) + 1
        };
    }

    solution(root) {
        const {diam} = this.__dfs(root);
        return diam;
    }
}