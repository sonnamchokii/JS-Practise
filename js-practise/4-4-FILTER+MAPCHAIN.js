// Names of all Devs
// Given an array of trainees, return an array of just the names of trainees in the Dev vertical. Chain .filter() and .map() in a single expression.
// 4-4-dev-names.js
// const trainees = [
//   { name: "Karma", vertical: "Dev" },
//   { name: "Dorji", vertical: "QA" },
//   { name: "Sonam", vertical: "Dev" },
//   { name: "Pema", vertical: "BA" }
// ];

// // Expected: ["Karma", "Sonam"]
function getDevNames(trainees) {
    return trainees
        .filter(trainee => trainee.vertical === "Dev")
        .map(trainee => trainee.name);
}
const trainees = [
    { name: "Karma", vertical: "Dev" },
    { name: "Dorji", vertical: "QA" },
    { name: "Sonam", vertical: "Dev" },
    { name: "Pema", vertical: "BA" }
];
console.log(getDevNames(trainees));
