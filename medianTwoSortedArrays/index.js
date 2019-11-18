/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(a, b {
     let getBMid = aMid => (Math.floor((a.length + b.length + 1) / 2) - aMid)
    if(a.length > b.length){
        let temp = b
        b = a
        a = temp
    }
    let aStart = 0,
      aEnd = a.length;
      aMid = Math.floor((aEnd + aStart) / 2),
      bMid = getBMid(aMid),
          alMax = aMid > 0 ? a[aMid-1] : Number.NEGATIVE_INFINITY
          ahMin = aMid < a.length ? a[aMid] : Number.POSITIVE_INFINITY
          blMax = bMid > 0 ? b[bMid-1] : Number.NEGATIVE_INFINITY
          bhMin = bMid < b.length ? b[bMid] : Number.POSITIVE_INFINITY
      while(alMax > bhMin || blMax > ahMin){
          if(alMax > bhMin){
              aEnd = aMid - 1
          }
          else{
              aStart = aMid + 1
          }
          aMid = Math.floor((aEnd + aStart)/2)
          bMid = getBMid(aMid)
          alMax = aMid > 0 ? a[aMid-1] : Number.NEGATIVE_INFINITY
          ahMin = aMid < a.length ? a[aMid] : Number.POSITIVE_INFINITY
          blMax = bMid > 0 ? b[bMid-1] : Number.NEGATIVE_INFINITY
          bhMin = bMid < b.length ? b[bMid] : Number.POSITIVE_INFINITY
      }
      if((a.length + b.length) % 2 === 0){
          return (Math.max(alMax, blMax) + Math.min(ahMin, bhMin)) / 2
      }
      else{
          return Math.max(alMax, blMax)
      }
    
};
console.log(findMedianSortedArrays([3],[-2,-1]))