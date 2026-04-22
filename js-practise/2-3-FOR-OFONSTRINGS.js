// Count vowels
// Write countVowels(str) that returns the number of vowels (a, e, i, o, u) in the string. Case-insensitive.
// 2-3-count-vowels.js
// // Examples
// countVowels("Gelephu"); // 3 (e, e, u)
// countVowels("BHUTAN"); // 2 (U, A)
// countVowels("xyz"); // 0
// countVowels(""); // 0
const countVowels = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
};

console.log(countVowels("Gelephu"));
console.log(countVowels("BHUTAN"));
console.log(countVowels("xyz"));
console.log(countVowels(""));
