import collections 
class Solution:
    def firstUniqChar(self, s: str) -> int:
        letters = collections.Counter(s)
        for i, c in enumerate(s):
            if letters[c] == 1:
                return i
        return -1
            