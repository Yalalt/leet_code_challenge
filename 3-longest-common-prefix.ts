function longestCommonPrefix(strs: string[]): string {
    let tempStr = '';
    tempStr = strs[0];

    for (let i = 0; i < strs.length; i++) {
        while ((strs[i].indexOf(tempStr)) != 0) {
            tempStr = tempStr.substring(0, tempStr.length - 1);
        }
    }
    return tempStr;
};