// [-1, 0, 1, 2, -1, -4],

export default function sum3(arr) {
    if (!Array.isArray(arr)) return [];
    arr.sort((a, b) => a - b);
    const dictionary = {};
    let el;
    for (let i = 0; i < arr.length; i++) {
        el = arr[i];
        dictionary[el] = typeof dictionary[el] === 'undefined' ? 1 : dictionary[el] + 1;
    }
    const result = [];
    let sum2;
    const I = arr.length - 2;
    const J = arr.length - 1;
    let r;
    for (let i = 0; i < I; i++) {
        for (let j = i + 1; j < J; j++) {
            sum2 = -(arr[i] + arr[j]);
            r = result.length === 0 ? null : result[result.length - 1];
            if (dictionary[sum2] > 0 && sum2 > arr[j] &&
                (result.length === 0 || (r[0] !== arr[i] || r[1] !== arr[j] || r[2] !== sum2))
            ) {
                result.push([arr[i], arr[j], sum2]);
            }
        }
    }

    return result;
}
