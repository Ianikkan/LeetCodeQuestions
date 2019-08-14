/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = [];
    var added = {};
    function doPermute(fl, nums){
        if(fl === nums.length - 1){
            let str = nums.join("");
            if(!(str in added)){
                result.push(nums);
                added[str] = "HERE"
            }
        }
        else{
            for (let i = fl; i < nums.length; i++) {
                    if(fl === i || nums[fl] !== nums[i]){
                        let n = [...nums];
                        [n[fl], n[i]] = [n[i], n[fl]];
                        doPermute(fl + 1, n);
                    }
            }
        }
    }
    doPermute(0,nums);
    return result;

};

