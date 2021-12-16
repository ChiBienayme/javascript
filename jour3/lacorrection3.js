// 1
const fruits = ["mango", "lemon", "blueberry"];

console.log(fruits);
console.table(fruits);

// 2
const ingredients = ["eggs", "milk", "butter"];

console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 3
const objects = ["pen", "book", "lamp"];

objects.unshift("chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

// 4
const numbers = [4, 10, 8, 12, 6];

numbers.reverse();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

// 5
let total = 0;
const limit = 10;

for (let i = 1; i <= limit; i++) {
	total += i;
	console.log(total);
}

// 6
const sentence = "Hello Konexio!";
let result = "";

for (let i = sentence.length - 1; i >= 0; i--) {
	result += sentence[i];
}

console.log(result);

// FizzBuzz

for (let i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("fizz buzz");
	} else if (i % 3 === 0) {
		console.log("fizz");
	} else if (i % 5 === 0) {
		console.log("buzz");
	} else if (i % 7 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

// Bonus II
var total = 0;
var limit = 10;

var i = 0;

while (i <= limit) {
    total += i;

    i++;
}

console.log(total);

// Bonus III
var students = ["Amir", "Asma", "Sabrina", "Fasulu", "Ikram", "Karim"]; // 6

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);
// console.log(students[5]);

var min = 0;
var max = students.length - 1;

var random = Math.random(); // 0 inclus et 1 exclu

var indexRandom = Math.floor(random * (max + 1));

console.log(students[indexRandom])

// var students = ["Amir", "Asma", "Sabrina", "Fasulu", "Ikram", "Karim"]; // 6

// var min = 0;
// var max = students.length - 1;

// var i = 1;

// while (students[i] !== "Amir") {
//     i = Math.floor(Math.random() * (max + 1));

//     console.log(students[i]);
// }

// Bonus IV
var array = [];
var min = 0;
var max = 100;
var numRandom = 0;

for (var i = 1; i <= 20; i++) {
    numRandom = Math.floor(Math.random() * (max - min + 1));

    // console.log(numRandom);

    if (array.indexOf(numRandom) === -1) {
        array.push(numRandom);
    } else {
        i--;
    }
}

console.table(array);

var numMax = array[0]; 

for (var i = 1; i < array.length; i++) {
    var item = array[i];

    if (item > numMax) {
        numMax = item;
    }
}

console.log(numMax);
