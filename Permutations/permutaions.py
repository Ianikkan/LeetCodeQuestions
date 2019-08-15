class PermuteBySwapping:
    def permute(self, str):
        self.doPermute(str,0)

    def doPermute(self, str, fixedLeft):
        length = len(str)
        if fixedLeft == length - 1:
            return str
        for i in range(fixedLeft,length):
            nextStrList = list(str)
            nextStrList[fixedLeft], nextStrList[i] = nextStrList[i], nextStrList[fixedLeft]
            nextStr = "".join(nextStrList)
            self.doPermute(nextStr, fixedLeft + 1)


class PermuteByBreakingDown:
    def permute(self, str):
        perms = [str[0]]
        for i in range(1, len(str)):
            perms = self.generate(str[i],perms)
        print(perms)
        return perms

    def generate(self, c, perms):
        nextPerm = []
        for s in perms:
            for i in range(len(s)):
                nextPerm.append(s[:i] + c + s[i:])
            nextPerm.append(s + c)
        return nextPerm

pbs = PermuteByBreakingDown()
pbs.permute('abcd')