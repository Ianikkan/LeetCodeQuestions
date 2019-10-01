class Solution:
    def addBinary(self, a: str, b: str) -> str:
        carry = 0 
        i = 1 
        result = ""
        while i <= len(a) and i <= len(b):
            ia = int(a[-i])
            ib = int(b[-i])
            
            rNext = ia + ib + carry
            if rNext == 3:
                result = '1' + result
            elif rNext == 2:
                result = '0' + result
                carry = 1
            elif rNext == 1:
                result = '1' + result
                carry = 0
            else:
                result = '0' + result
            i+= 1
        while i <= len(a):
            rNext = int(a[-i]) + carry
            if rNext == 2:
                result = '0' + result
            elif rNext == 1:
                result = '1' + result
            else:
                result = '0' + result
            i += 1
        while i <= len(b):
            rNext = int(b[-i]) + carry
            if rNext == 2:
                result = '0' + result
            elif rNext == 1:
                result = '1' + result
            else:
                result = '0' + result
            i += 1    
        if carry == 1:
            result = '1' + result 
        return result
    
s = Solution()
s.addBinary('101111', '10')