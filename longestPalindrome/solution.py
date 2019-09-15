class Solution:
    def longestPalindrome(self, s: str) -> int:
        letters = {}
        result = 0
        single = 0
        for c in s:
            if c in letters:
                letters[c] += 1
            else:
                letters[c] = 1
        for n in letters.values():
            result += (n // 2) * 2
            if single == 0 and n % 2 == 1:
                single = 1
                
        return result + single
                    