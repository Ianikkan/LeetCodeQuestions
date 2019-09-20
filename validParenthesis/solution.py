class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mappings = {'(': ')', '{' : '}', '[': ']' }
        left = '([{'
        for c in s:
            if c in left:
                stack.append(c)
            else:
                if len(stack) == 0 or mappings[stack.pop()] != c:
                    return False
        return len(stack) == 0
s = Solution()
s.isValid('()')
        