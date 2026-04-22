// Cities playground
// Start with const cities = ["Gelephu", "Thimphu", "Paro"]. Do all four, printing cities after each:
// (a) add "Punakha" at the end · (b) remove "Thimphu" · (c) find the index of "Paro" · (d) check if "Bumthang" is in the list.
// 3-3-cities.js
// // Methods you'll need:
// // .push() .splice() .indexOf() .includes()
const cities = ["Gelephu", "Thimphu", "Paro"];

// (a) add "Punakha" at the end
cities.push("Punakha");
console.log(cities);

// (b) remove "Thimphu"
const thimphuIndex = cities.indexOf("Thimphu");
if (thimphuIndex !== -1) {
    cities.splice(thimphuIndex, 1);
}
console.log(cities);

// (c) find the index of "Paro"
const paroIndex = cities.indexOf("Paro");
console.log(`Index of Paro: ${paroIndex}`);

// (d) check if "Bumthang" is in the list
const hasBumthang = cities.includes("Bumthang");
console.log(`Is Bumthang in the list? ${hasBumthang}`);


