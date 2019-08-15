/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
   const sorted = points.sort((a,b) => {
        return (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2)
    })
   return sorted.slice(0,K)
};



let x = ["a12 123", "b123 ab", "123 cff", "123 456" ];

let y = x.filter(word => word.match(/^.*\s\d/));

console.log(y);