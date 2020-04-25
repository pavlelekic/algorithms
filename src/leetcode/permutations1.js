
function dfs(numbers, used, result, path) {
    if (path.length === numbers.length) {
        const pathClone = path.slice(0);
        result.push(pathClone);
    } else {
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
}

export default function solution(arr) {
    const result = [];
    dfs(arr, {}, result, []);
    return result;
}
