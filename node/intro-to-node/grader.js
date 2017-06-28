let scores = [90, 98, 89, 100, 100, 86, 94];
let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

// Accumulator Pattern
const average = (arr) => {
	let averageScore = 0;
	arr.forEach(score => averageScore += score)
	return Math.round(averageScore / arr.length);
}

console.log(`Science Score: ${average(scores)}`);
console.log(`Math Score: ${average(scores2)}`);



// in console ->  node grader.js
// prints to terminal







let scores3 = [90, 98, 89, 100, 100, 86, 94];
let scores4 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

const averager = (arr) => {
	let avg = 0;
	arr.forEach(score => avg += score);
	return Math.round(avg / arr.length);
}

console.log(`This is the average for scores 3: ${averager(scores3)}`)