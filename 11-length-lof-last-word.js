/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let myWords = s.trim().split(" ");
    return myWords[myWords.length - 1].length;
};