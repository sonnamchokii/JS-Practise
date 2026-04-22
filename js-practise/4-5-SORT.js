// Given an array of { name, score } objects, return the trainee with the highest score.
// 4-5-top-scorer.js
// const trainees = [
//   { name: "Karma", score: 82 },
//   { name: "Dorji", score: 91 },
//   { name: "Sonam", score: 74 },
//   { name: "Pema", score: 88 }
// ];

// // Expected: { name: "Dorji", score: 91 }
function getTopScorer(trainees) {
    return trainees.reduce((topScorer, trainee) => {
        return (trainee.score > topScorer.score) ? trainee : topScorer;
    }, trainees[0]);
}
const trainees = [
    { name: "Karma", score: 82 },
    { name: "Dorji", score: 91 },
    { name: "Sonam", score: 74 },
    { name: "Pema", score: 88 }
];
console.log(getTopScorer(trainees));
