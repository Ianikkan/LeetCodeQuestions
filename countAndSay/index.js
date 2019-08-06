/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  let str = "1";
  for (let i = 1; i < n; i++) {
    str = generateNext(str);
  }
  return str;
};

/**
 * @param {string} str
 * @return {string}
 */
const generateNext = function(str) {
  let next = "";
  let i,j;
  for(i = 0; i < str.length; i++){
      for(j = i+1; j < str.length; j++){
          if(str[i] !== str[j]){
              break;
          }
      }
      next += "" + j - i  + str[i];
      i = j - 1

  }
  return next;
};

