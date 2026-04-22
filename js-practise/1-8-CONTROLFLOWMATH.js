// roblem 1.8 · Control flow + math
// BMI classifier
// Write classifyBMI(weightKg, heightM) that computes Body Mass Index (weight / height²) and returns a category.
// 1-8-bmi.js
// // Categories
// // below 18.5 → "Underweight"
// // 18.5 – 24.9 → "Normal"
// // 25.0 – 29.9 → "Overweight"
// // 30.0 and up → "Obese"

// // Examples
// classifyBMI(55, 1.70); // "Normal"
// classifyBMI(95, 1.75); // "Obese

const classifyBMI = (weightKg, heightM) => {
    const bmi = weightKg / (heightM * heightM);
    if (bmi < 18.5) {
        return "Underweight";
    }


    else if (bmi < 25) {


        return "Normal";
    }
    else if (bmi < 30) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}

console.log(classifyBMI(55, 1.70));
console.log(classifyBMI(95, 1.75));

