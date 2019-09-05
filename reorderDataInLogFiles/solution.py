class Solution:
    def reorderLogFiles(self, logs ):
        letters = []
        digits = []
        for l in logs:
            if l.split()[1].isdigit():
                digits.append(l)
            else:
                letters.append(l)
        letters.sort(key = lambda l: str(l.split()[1:]) + str(l.split()[0]) )
        return letters + digits
            