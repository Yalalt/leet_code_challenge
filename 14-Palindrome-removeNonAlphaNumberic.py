class Solution:
    def isPalindrome(self, s: str) -> bool:
        inStrLower = s.lower()
        # Regular expression used to remove all non-alphanumeric characters
        cleanStr = re.sub(r'[^a-zA-Z0-9]', '', inStrLower)

        # isPalindrome function is recursive
        if len(cleanStr) < 2:
            return True
        if cleanStr[0] == cleanStr[-1]:
            return True and Solution().isPalindrome(cleanStr[1:len(cleanStr)-1])
        else:
            return False