/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    let unvisited = new Array(N+1).fill(1);
    let dist = new Array(N+1).fill(Number.MAX_VALUE)
    dist[K] = 0
    let nodeMap = {}
    for(let t of times){
        if(t[0] in nodeMap){
            nodeMap[t[0]].push([t[1],t[2]])
        }
        else{
            nodeMap[t[0]] = [[t[1],t[2]]]
        }
    }
    let getCur = function(){
        let curTime = Number.MAX_VALUE, curNode = -1
        for(let i = 1; i < unvisited.length; i++){
            if(unvisited[i] === 1 && dist[i] < curTime){
                curNode = i; 
                curTime = dist[i]
            }
        }
        return curNode;
    }
    while(true){
        let cur = getCur();
        if(cur === -1){
            break
        }
        unvisited[cur] = 0 
        if(cur in nodeMap){
            for(let edge of nodeMap[cur]){
                if(unvisited[edge[0]] === 1 && dist[cur] + edge[1] < dist[edge[0]]){
                    dist[edge[0]] = dist[cur] + edge[1]
                }
            }
        }
    }
    let maxDist = 0
    for(let i = 1; i < unvisited.length; i++){
        if(unvisited[i] === 1){
            return -1
        }
        maxDist = Math.max(dist[i], maxDist)
    }
    return maxDist
};