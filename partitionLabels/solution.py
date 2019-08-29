class Solution:
    def partitionLabels(self, S: str) -> List[int]:
        lastChars = {c:i for i,c in enumerate(S)}
        result = []
        lastOccurence = 0
        boundary = -1 
        for i in range(len(S)):
            lastOccurence = max(lastChars[S[i]], lastOccurence)
            if i == lastOccurence:
                result.append(i - boundary)
                boundary = i
        return result
            
