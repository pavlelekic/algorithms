
function dfs(numbers, used, result, path) {
    if (path.length === numbers.length) {
        const pathClone = path.slice(0);
        result.push(pathClone);
        return;
    }

    numbers.forEach((num, index) => {
        if (!used[index]) {
            used[index] = true;
            path.push(num);
            dfs(numbers, used, result, path);
            path.pop();
            used[index] = false;
        }
    });
}

export default function solution(arr) {
    const result = [];
    arr.sort((a, b) => a - b); // is this necessary?
    dfs(arr, {}, result, []);
    return result;
}
