// Problem 2.6 · Comparison with loops
// Palindrome checker
// Write isPalindrome(str) that returns true if the string reads the same forwards and backwards. Make it case-insensitive.
// 2-6-palindrome.js
// // Examples
// isPalindrome("madam"); // true
// isPalindrome("Racecar"); // true
// isPalindrome("hello"); // false
// isPalindrome("a"); // true

const isPalindrome = (str) => {
    const normalizedStr = str.toLowerCase();
    const len = normalizedStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (normalizedStr[i] !== normalizedStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("a"));
