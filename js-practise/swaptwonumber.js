// Write a function to swap two numbers without using a third/temporary variable.

const swap = (a, b) => {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
};

let a = 5;
let b = 10;
console.log(`Before swap: a = ${a}, b = ${b}`);
[a, b] = swap(a, b);
console.log(`After swap: a = ${a}, b = ${b}`);

