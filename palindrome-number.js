/**
 * @param {number} x
 * @return {boolean}
 */

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

// var isPalindrome = function (x) {
//   let reverse = 0;
//   let originX = x;
//   while (x > 0) {
//     reverse = reverse * 10 + (x % 10);
//     x = Math.floor(x / 10);
//   }
//   return originX === reverse;
// };

var isPalindrome = function (x) {
  let reverse = 0;
  let originX = x;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return originX === reverse;
};

console.log(isPalindrome(-121));
