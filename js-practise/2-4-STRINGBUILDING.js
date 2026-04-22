// Reverse a string
// Write reverseString(str). Use a loop — do not use .reverse() or .split().reverse().join().
// 2-4-reverse-string.js
// // Examples
// reverseString("hello"); // "olleh"
// reverseString("Bhutan"); // "natuhB"
// reverseString("a"); // "a"
// reverseString(""); // ""
const reverseString = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

console.log(reverseString("hello"));
console.log(reverseString("Bhutan"));
console.log(reverseString("a"));
console.log(reverseString(""));