/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = (num1, num2) => {
    let l1 = num1.length,
      l2 = num2.length;
    product = new Array(l1+ l2);
    l1--
    l2--
    product.fill(0);
    for (let i = l1 ; i >= 0; i--) {
      for (let j = l2 ; j >= 0; j--) {
        let pos = l2 - j + l1 - i
        product[pos] += num1[i] * num2[j];
        product[pos + 1] += Math.floor(product[pos] / 10);
        product[pos] %= 10;
      }
    }
    let result = product.reverse()
    let pointer = 0
    while (result[pointer] == '0'){
        pointer ++
    }
    return result.slice(pointer).join("") || "0"
  };
multiply('9','9')