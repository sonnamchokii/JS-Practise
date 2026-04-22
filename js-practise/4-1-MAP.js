// Double every number
// Given an array of numbers, return a new array where every value is doubled. Use .map().
// 4-1-double.js
// const nums = [1, 2, 3, 4, 5];

// // Expected: [2, 4, 6, 8, 10]

const double = (nums) => {
    return nums.map(num => num * 2);
};
const nums = [1, 2, 3, 4, 5];
console.log(double(nums));


