/**
 * @param {string} s
 * @return {number}
 *******************************************************************************
 Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*****************************************************************************************             
 */
var lengthOfLongestSubstring = function(s) {
    let occured = {};
    let longest = 0;
    let left = 0;
    for(let i = 0; i < s.length; i++){
        let curr = s.charAt(i);
        if(!(curr in occured) || occured[curr] < left){
            occured[curr] = i
            if(i + 1 - left  > longest){
                longest = i + 1 - left 
            }
        }
        else{
            left = occured[curr] + 1
            occured[curr] = i
        }
    }
    return longest;
};
