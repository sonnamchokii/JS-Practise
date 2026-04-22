// Count trainees per vertical
// Given an array of trainees, count how many are in each vertical (Dev, QA, BA) and print a single line like "Dev: 2, QA: 2, BA: 1".
// 4-6-count-per-vertical.js
// const trainees = [
//   { name: "Karma", vertical: "Dev" },
//   { name: "Dorji", vertical: "QA" },
//   { name: "Sonam", vertical: "BA" },
//   { name: "Pema", vertical: "Dev" },
//   { name: "Tshering",vertical: "QA" }
// ];

// // Expected output:
// // "Dev: 2, QA: 2, BA: 1"

function countTraineesPerVertical(trainees) {
    const counts = trainees.reduce((acc, trainee) => {
        acc[trainee.vertical] = (acc[trainee.vertical] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(counts)
        .map(([vertical, count]) => `${vertical}: ${count}`)
        .join(', ');
}
const trainees = [
    { name: "Karma", vertical: "Dev" },
    { name: "Dorji", vertical: "QA" },
    { name: "Sonam", vertical: "BA" },
    { name: "Pema", vertical: "Dev" },
    { name: "Tshering", vertical: "QA" }
];
console.log(countTraineesPerVertical(trainees));

