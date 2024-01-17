class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        count = {}
        for num in arr:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1

        seenDict = set()
        for val in count.values():
            if val in seenDict:
                return False
            seenDict.add(val)

        return True
    
sol = Solution()

arr = [1,2,2,1,1,3]
print(sol.uniqueOccurrences(arr))

arr = [1,2]
print(sol.uniqueOccurrences(arr))