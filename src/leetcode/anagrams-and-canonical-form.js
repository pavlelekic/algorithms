const cmp = (a, b) => a.localeCompare(b);

export default function(strings) {
    let clone;
    const anagrams = {};
    strings.forEach(s => {
        clone = [...s].sort(cmp);
        if (!Array.isArray(anagrams[clone])) anagrams[clone] = [];
        anagrams[clone].push(s);
    });

    return Object.values(anagrams);
}
