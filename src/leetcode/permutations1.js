
function permute(numbers, used, result, path) {
    if (path.length === numbers.length) {
        const pathClone = path.slice(0);
        result.push(pathClone);
        return;
    }

    numbers.forEach((num, index) => {
        if (!used[index]) {
            used[index] = true;
            path.push(num);
            permute(numbers, used, result, path);
            path.pop();
            used[index] = false;
        }
    });
}

export default function solution(arr) {
    const result = [];
    const used = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        used[i] = false;
    }
    permute(arr, used, result, []);
    return result;
}
