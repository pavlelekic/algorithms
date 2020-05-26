// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

const charCompare = (a, b) => a.localeCompare(b);

export default function (strings) {
    const stringsGrouped = {};
    let arr;
    let key;
    strings.forEach(str => {
        arr = str.split('');
        arr.sort(charCompare);
        key = arr.join();
        if (stringsGrouped[key] === undefined) {
            stringsGrouped[key] = [];
        }

        stringsGrouped[key].push(str);
    });

    return Object.values(stringsGrouped);
}
