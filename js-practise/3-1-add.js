// Create an object trainee with keys name, age, city, vertical. Then: (1) update vertical to "Dev", (2) add a new email property, (3) delete age. Print the final object.
// 3-1-build-trainee.js
// // Starter
// const trainee = {
//   name: "Karma",
//   age: 24,
//   city: "Gelephu",
//   vertical: "QA"
// };

// // Expected final shape:
// // { name: "Karma", city: "Gelephu",
// // vertical: "Dev", email: "karma@selisegroup.com" }

const trainee = {
    name: "Karma",
    age: 24,
    city: "Gelephu",
    vertical: "QA"
};
trainee.vertical = "Dev";
trainee.email = "karma@selisegroup.com";
delete trainee.age;
console.log(trainee);

