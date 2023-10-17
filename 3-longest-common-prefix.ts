function longestCommonPrefix(strs: string[]): string {
    let tempStr = '';
    tempStr = strs[0];

    for (let i = 0; i < strs.length; i++) {
        // flower--s flow baina uu check
        while ((strs[i].indexOf(tempStr)) != 0) {
            // temp save str 1 , 1eer bagasgaj while check hiine
            tempStr = tempStr.substring(0, tempStr.length - 1);
        }
    }
    return tempStr;
};