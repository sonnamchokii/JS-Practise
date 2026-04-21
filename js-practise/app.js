const name = "sonam";
let age = 24;
age = 25;

console.log(name)
console.log(age)

function greet(name) {
    return `Hello, ${name}!`;
}

let full_name = greet("Sonam");

console.log(full_name);

function isAdult(age) {
    if (age >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isAdult(20);

//exercise 3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function getGrade(score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 70) {
    return "Good";
  } else {
    return "Keep going";
  }
}

console.log(getGrade(95));
console.log(getGrade(82)); 
console.log(getGrade(55)); 

let currentNumber = 1;

while (currentNumber <= 1000) {
  console.log(currentNumber);
  currentNumber = currentNumber * 2;
}
// print
   


