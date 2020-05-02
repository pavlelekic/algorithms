
export default function solution(num) {
    const visited = {};
    while(!visited[num]) {
        visited[num] = true;
        let sum = 0;
        for (let remainder; num > 0; num = Math.floor(num / 10)) {
            remainder = num % 10;
            sum += remainder * remainder;
        }
        if (sum === 1) return true;
        num = sum;
    }

    return false;
}
