class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        count = 0 
        for n in reversed(s):
            if count == 0 and n == ' ':
                continue
            if n == ' ':
                break
            count += 1
        return count
