/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let map = {};
    const parsed = paragraph.split(/\b\W*/);
    parsed.forEach((element) => {
        let parsedElement = element.toLowerCase();
        if(!banned.includes(parsedElement)){
            if(!map.hasOwnProperty(parsedElement)){
                map[parsedElement] = 1
            }
            else{
                map[parsedElement] += 1;
            }
        }
    })
    let occuredNumber = 0; 
    let occuredString = "";
    for(let [key, value] of Object.entries(map)){
        if(value > occuredNumber){
            occuredNumber = value;
            occuredString = key;
        }
        
        
    }
    return occuredString;
    
};
mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ['hit']);