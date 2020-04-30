
function lcs(cache, text1, index1, text2, index2) {
    if (index1 < 0 || index2 < 0 || text1.length === 0 || text2.length === 0) {
        return 0;
    }

    const cacheKey = `${index1}:${index2}`;
    
    if (typeof cache[cacheKey] === 'undefined') {
        if (text1.charAt(index1) === text2.charAt(index2)) {
            cache[cacheKey] = lcs(cache, text1, index1 - 1, text2, index2 - 1) + 1;
        } else {
            cache[cacheKey] = Math.max(
                lcs(cache, text1, index1 - 1, text2, index2),
                lcs(cache, text1, index1, text2, index2 - 1)
            );
        }
    }

    return cache[cacheKey];
}

export default function solution(text1, text2) {
    const cache = {};
    return lcs(cache, text1, text1.length - 1, text2, text2.length - 1);
}


const cacheKey = (index1, index2) => `${index1}:${index2}`;

function lcsIterative(text1, text2) {
    if (text1.length === 0 || text2.length === 0) {
        return 0;
    }

    const cache = {};
    const readCache = (index1, index2) => typeof cache[cacheKey(index1, index2)] === 'undefined' ? Number.NEGATIVE_INFINITY : cache[cacheKey(index1, index2)];
    let index1 = 0;
    let index2 = 0;

    while (index1 < text1.length && index2 < text2.length) {
        const ck = cacheKey(index1, index2);
    
        if (typeof cache[ck] === 'undefined') {
            const prevValue =  Math.max(
                readCache(index1, index2 - 1),
                readCache(index1 - 1, index2),
                readCache(index1 - 1, index2 - 1)
            );
            if (text1.charAt(index1) === text2.charAt(index2)) {
                cache[ck] = prevValue + 1;
            } else {
                cache[ck] = prevValue;
            }
        }
    }

    return cache[ck];
}



function lcsIterative2(text1, text2) {
    if (text1.length === 0 || text2.length === 0) {
        return 0;
    }

    const cache = {};
    const readCache = (index1, index2) => typeof cache[cacheKey(index1, index2)] === 'undefined' ? 0 : cache[cacheKey(index1, index2)];


    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1.charAt(i) === text2.charAt(j)) {
                cache[cacheKey(i + 1, j + 1)] = 1 + readCache(i, j);
            } else {
                cache[cacheKey(i + 1, j + 1)] = Math.max(
                    readCache(i + 1, j),
                    readCache(i, j + 1)
                );
            }
        }
    }

    return readCache(text1.length, text2.length);
}
