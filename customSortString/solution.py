class Solution:
    def customSortString(self, S: str, T: str) -> str:
        order = {v:k for k,v in enumerate(S)}
        tList = list(T)
        tList.sort(key= lambda a : order.get(a,0))
        
        return ''.join(tList)