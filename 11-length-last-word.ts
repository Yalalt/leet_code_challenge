function lengthOfLastWord(s: string): number {
    s = s.trim();
    let strLength = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            break;
        } else {
            strLength++;
        }
    }

    return strLength;
};