// Palindrome Number
function isPalindrome(x: number): boolean {
    let result = x;
    let modToo;
    let sum = 0;

    while(x >= 1) {
        modToo = x % 10;
        sum = (sum * 10) + modToo;
        x = Math.floor(x / 10);
    }

    return result === sum;
};