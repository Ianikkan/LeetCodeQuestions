/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tank = 0, startIndex = 0, total = 0
    for(let i = 0; i < gas.length; i++){
        total += gas[i] - cost[i]
        tank += gas[i] - cost[i]
        if(tank < 0){
            tank = 0
            startIndex = i+1
        }
    }
    return total < 0 ? -1 : startIndex;
};