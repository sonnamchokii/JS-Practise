// //Exercise 1
// const trainees = [
//   { name: "Karma", vertical: "Dev" },
//   { name: "Sonam", vertical: "QA" },
//   { name: "Tshering", vertical: "Dev" },
//   { name: "Pema", vertical: "BA" }
// ];

// // Your code:
// const devs = trainees.filter(t => t.vertical === "Dev");

// console.log(devs);


// //exercise 2 
// const devs = [
//   { name: "Karma", vertical: "Dev" },
//   { name: "Tshering", vertical: "Dev" }
// ];

// const devNames = devs.map(t => t.name);

// console.log(devNames);

// // Exercise 3
// const devNames = ["Tshering", "Karma"];

// devNames.push("Ashi");

// const sorted = devNames.sort();

// console.log(sorted);

// Exercise 4

const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Sonam", vertical: "QA" },
  { name: "Tshering", vertical: "Dev" },
  { name: "Pema", vertical: "BA" }
];

const result = trainees
  .filter(t => t.vertical === "Dev")
  .map(t => t.name)
  .sort();

console.log(result);

// //Exercise 6
// const response = {
//   id: 42,
//   name: "Karma"

// };

// const email = response.contact?.email || "no email";
// console.log(email)

// // Expected: "no email" (no crash)

