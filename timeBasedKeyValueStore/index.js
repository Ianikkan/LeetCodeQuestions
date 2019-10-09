/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.map = {}
    
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    let obj = {val: value, ts: timestamp}
    if(key in this.map){
        this.map[key].push(obj)
    }
    else{
        this.map[key] = [obj]
    }
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let keyArr = this.map[key]
    if(!keyArr){
        return ""
    }
    let leng = keyArr.length
    let start = 0, end = leng - 1;
    let best = null
    let mid;
    while(start <= end){
        mid = Math.floor((start + end) / 2)
        let testObj = keyArr[mid]
        if(testObj.ts > timestamp){
            end = mid - 1
        }
        else if(testObj.ts < timestamp){
            best = testObj
            start = mid + 1
        }
        else{
            return testObj.val
        }
        
    }
    return best ? best.val : ""
    
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
