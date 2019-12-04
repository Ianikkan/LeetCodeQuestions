function findSubstring(s, words){
    if(!s || !words || s.length ===0 || words.length === 0){
        return []
    }
    let wordMap = {}
    for(let i = 0 ; i < words.length; i += 1){
        if(words[i] in wordMap){
            wordMap[words[i]] += 1
        }
        else{
            wordMap[words[i]] = 1
        }

    }
    let size = words[0].length, result = []
    let extend = sIndex => {
        let wordCount = 0, occuredWords = {}
        for(let i = sIndex; i < s.length - size +1; i += size){
            let cur = s.slice(i, i + size)
            if(cur in wordMap && (!(cur in occuredWords) || occuredWords[cur] < wordMap[cur])){
                wordCount += 1
                if(cur in occuredWords){
                    occuredWords[cur] += 1
                }
                else{
                    occuredWords[cur] = 1
                }
                if(wordCount === words.length){
                    result.push(sIndex)
                    return true
                }
            }
            else{
                return false
            }

        }
    }
    for(let i = 0; i < s.length - size +1; i++){
        extend(i)
    }
    return result
}

findSubstring('barfoothefoobarman', ['foo','bar'])