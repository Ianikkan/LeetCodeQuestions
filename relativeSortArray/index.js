/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const comparator = function(a,b){
        const indexA = arr2.indexOf(a);
        const indexB = arr2.indexOf(b);
        
        //both are in there
        if(indexA >= 0 && indexB >= 0){
            return indexA - indexB
        }
        
        //both are not in there
        if(indexA < 0 && indexB < 0){
            return a - b
        }
        
        //a is in there
        if(indexA >= 0 && indexB < 0){
            return -1
        }
        
        //b is in there
        return 1
    }

    return arr1.sort(comparator);
};
