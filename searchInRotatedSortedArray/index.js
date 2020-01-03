var search = function(nums, target) {
  var findPivot = (low, high) => {
    if (high < low) {
      return -1;
    }
    let mid = Math.floor((low + high) / 2);
    if (mid < high && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    if (mid > low && nums[mid] < nums[mid - 1]) {
      return mid - 1;
    }
    if (nums[low] >= nums[mid]) {
      return findPivot(low, mid - 1);
    }
    return findPivot(mid + 1, high);

  };
  var findTarget = (low, high) => {
      if(low > high){
          return -1
      }
      let mid = Math.floor((low + high) / 2)
      if(nums[mid] === target){
          return mid
      }
      if(nums[mid] < target){
          return findTarget(mid+1, high)
      }
      return findTarget(low, mid-1)
  }
    let pivot = findPivot(0, nums.length - 1);
    if(pivot === -1){
        return findTarget(0, nums.length-1)
    }
    if(nums[pivot] === target){
        return pivot
    }
    if(nums[nums.length-1] >= target){
        return findTarget(pivot + 1, nums.length-1)
    }
    return findTarget(0, pivot - 1)

};
console.log(search([1,3,5], 1));
