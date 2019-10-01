/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let lenA = a.length, lenB = b.length
    let result = ""
    let carry = 0
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")
    for(let i = 0; i < Math.max(lenA, lenB); i++){
        let ad = i < lenA ? parseInt(a[i],10) : 0;
        let bd = i < lenB ? parseInt(b[i],10) : 0;
        result = (ad + bd + carry) % 2 + result
        carry = Math.floor(((ad + bd + carry) / 2))
    }
    if (carry > 0){
        result = carry + result
    }
    return result
};

addBinary('11', '1')