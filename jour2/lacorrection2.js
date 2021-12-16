
// 1
const integer = 102;
const float = 13.9;
console.log(integer, float);

// 2
const basic = 34;
const stringField = basic.toString();
console.log(stringField);

// 3
const num = 1.5;
const rounding = Math.round(num);
console.log(rounding);

// 4
const test = 12;
const bis = 5;

console.log(
	test + bis,
	test - bis,
	test * bis,
	test / bis,
	test ** bis,
	test % bis
);

// 5
const test = 143;
const bis = 219;

console.log(
	test > bis,
	test < bis,
	test >= bis,
	test <= bis,
	test === bis,
	test !== bis
);

// 6
const limit = 50;
const score = 84;
const hasWon = score >= limit; // true

if (!hasWon) {
	// l'inverse de hasWon, donc l'inverse de true = false
	console.log("Oh no");
} else {
	console.log("Ok good");
}
score >= limit ? console.log("Ok good") : console.log("Oh no");
console.log(score >= limit ? "Ok good" : "Oh no");

// 7
const password = "azerty";
if (password.length > 5) {
	console.log("The password is secure");
} else {
	console.log("The password is not secure");
}

// 8
if (score >= limit && password.length > 5) {
	console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
	console.log("Something is good");
} else {
	console.log("Nothing is good");
}

// Bonus 1
const randomNumber = Math.floor(Math.random() * 6) + 1;
console.log("Random number:", randomNumber);

if (randomNumber === 6) {
	console.log("Yes I win!");
} else {
	console.log("So close...");
}

// Bonus 2
const month = "January";

switch (month) {
	case "January":
		console.log("Winter");
		break;
	case "February":
		console.log("Winter");
		break;
}

if (month === "January" || month === "February") {
	console.log("Winter");
} else if (month === "July" || month === "August") {
	console.log("Summer");
}

// Bonus 3
const roundedNumber = 3.6;

if (roundedNumber - Math.floor(roundedNumber) >= 0.5) {
	console.log(Math.ceil(roundedNumber));
} else {
	console.log(Math.floor(roundedNumber));
}

const strNumber = roundedNumber.toString();
const index = strNumber.indexOf(".");
const strNumberSubstr = strNumber.substring(index);

if (strNumberSubstr >= 0.5) {
	console.log(Math.ceil(roundedNumber));
} else {
	console.log(Math.floor(roundedNumber));
}
