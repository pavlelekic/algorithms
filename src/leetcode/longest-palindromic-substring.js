
var longestPalindrome = function(str) {
    if (str === '') return '';

    let l, r;
    maxPalindromicSubstring = str[0];
    for (let i = 0; i < str.length; i++) {
        // check odd sequence
        l = r = i;
        while (l > 0 && r + 1 < str.length && str.charAt(l - 1) === str.charAt(r + 1)) {
            l--;
            r++;
        }
        if (l !== r && r - l + 1 > maxPalindromicSubstring.length) {
            maxPalindromicSubstring = str.substring(l, r + 1);
            // console.log('New max reached', {l, r, maxPalindromicSubstring});
        }
        
        // check even sequence
        l = i;
        r = i + 1;
        if (str.charAt(l) === str.charAt(r)) {
            while (l > 0 && r + 1 < str.length && str.charAt(l - 1) === str.charAt(r + 1)) {
                l--;
                r++;
            }
            
            if (r - l + 1 > maxPalindromicSubstring.length) {
                maxPalindromicSubstring = str.substring(l, r + 1);
                // console.log('New max reached', {l, r, maxPalindromicSubstring});
            }
        }
    }

    return maxPalindromicSubstring;
};
