/**
 * 
 * @param {number[]} nums 
 * @return {number[][]}
 */

var permute = function(nums){
    var result = [];    
   function doPermute(fl, nums){
        if(fl === nums.length -1){
            result.push(nums)
        }
        else{
            for(let i = fl; i < nums.length; i++){
                let temp = [...nums];
                [temp[fl], temp[i]] = [temp[i],temp[fl]];
                doPermute(fl+1, temp)
            }
        }

    }
    doPermute(0,nums);
    return result;
}
console.log(permute([1,2,3]))