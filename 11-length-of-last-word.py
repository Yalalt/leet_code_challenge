class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s = s.rstrip()
        strLength = 0

        for i in range(len(s)-1, -1, -1):
            if s[i] == ' ':
                break
            else:
               strLength += 1

        return strLength
    
    s1 = "Hello World moon world"
    print(lengthOfLastWord(s1))

    s2 = "   fly me   to   the moon  "
    print(lengthOfLastWord(s2))
    