class Solution:
    def intToRoman(self, num: int) -> str:
        ans = [] 
        arabicNums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
        romanNums = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L' ,'XC', 'C', 'CD', 'D', 'CM', 'M']

        for i in range(len(romanNums)-1, -1, -1):
            toAppend = num // arabicNums[i]
            ans.append(romanNums[i]* toAppend)
            
            num %= arabicNums[i]

        return ''.join(ans)
