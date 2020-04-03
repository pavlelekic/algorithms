
export default function solution(arr) {
    const prevMaxSubarray = 0;
    const totalMax = 0;

    for (let i = 0; i < arr.length; i++) {
        prevMaxSubarray = Math.max(arr[i], prevMaxSubarray + arr[i]);
        totalMax = Math.max(totalMax, prevMaxSubarray);
    }

    return totalMax;
}
