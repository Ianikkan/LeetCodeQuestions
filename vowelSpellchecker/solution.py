import re
class Solution:
    def spellchecker(self, wordlist: list, queries: list) -> list:
        regWords = {v: '' for v in wordlist}
        lowerWords = {str.lower(v): v for v in reversed(wordlist)}
        vowelsRemovedWords = {re.sub('[aeiou]', '*', str.lower(v)): v for v in reversed(wordlist)}
        
        result = []
        for q in queries:
            if q in regWords:
                result.append(q)
            elif str.lower(q) in lowerWords:
                result.append(lowerWords[str.lower(q)])
            elif re.sub('[aeiou]', '*', str.lower(q))  in vowelsRemovedWords:
                result.append(vowelsRemovedWords[re.sub('[aeiou]', '*', str.lower(q))])
            else:
                result.append('')
        return result 