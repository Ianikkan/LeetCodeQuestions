/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let kinds = new Set()
    for(let candy of candies){
        kinds.add(candy);
    }
    return Math.min(candies.length / 2, kinds.size)
};