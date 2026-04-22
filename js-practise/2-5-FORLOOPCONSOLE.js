// Problem 2.5 · for loop + console
// Multiplication table
// Write printTable(n) that prints the n× table from 1 to 10 using console.log.
// 2-5-multiplication-table.js
// // printTable(7) should print:
// // 1 × 7 = 7
// // 2 × 7 = 14
// // 3 × 7 = 21
// // ...
// // 10 × 7 = 70

const printTable = (n) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} × ${n} = ${i * n}`);
    }
};

printTable(7);


