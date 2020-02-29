/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m === 0){
        for(let i = 0; i < nums2.length;i++){nums1[i] = nums2[i]}
    }
    let toInsert = m + n -1
    while( m >= 1 && n >= 1){
        if(nums1[m-1] > nums2[n-1]){
            nums1[toInsert] = nums1[m-1]
            m--
        }
        else{
            nums1[toInsert] = nums2[n-1]
            n--
        }
        toInsert--
    }
    while(m >=1){
        nums1[toInsert] = nums1[m-1]
        m--
        toInsert--
    }
    while(n >= 1){
        nums1[toInsert] = nums2[n-1]
        n--
        toInsert--
    }
};