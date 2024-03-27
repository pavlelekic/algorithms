/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 let cache;
 var wordBreak = function (s, wordDict) {
     cache = {};
     const result = canItBeSegmented(s, 0, wordDict);
     return result;
 };
 
 const matchWord = (currentWord, s, startingIndex) => {
     // console.log('Calling matchWord()', currentWord, startingIndex, s);
     if (currentWord.length > s.length - startingIndex) {
         return false;
     }
 
     const len = Math.min(s.length, startingIndex + currentWord.length);
     for (let i = startingIndex; i < len; i++) {
         if (currentWord.charAt(i - startingIndex) !== s.charAt(i)) {
             return false;
         }
     }
 
     return true;
 };
 
 const canItBeSegmented = (s, startingIndex, wordDict) => {
     // console.log('Calling canItBeSegmented()', s, startingIndex, cache);
     if (startingIndex > s.length) return false;
     if (startingIndex === s.length) return true;
     if (cache[startingIndex] === false) return false;
 
     // console.log('Trying loop');
 
     for (let i = 0; i < wordDict.length; i++) {
         const currentWord = wordDict[i];
         if (
             matchWord(currentWord, s, startingIndex) &&
             canItBeSegmented(s, startingIndex + currentWord.length, wordDict)
         ) {
             return true;
         }
     }
 
     cache[startingIndex] = false;
     return false;
 };
 