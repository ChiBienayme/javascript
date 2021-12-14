"use strict";
//01-Hello World
console.log("Hello World");

// 02-String
var test = "My name is Ha Chi";
// let test = "My name is Ha Chi";
// const test = "My name is Ha Chi";
console.log(test);

// 03 - Concatenation
var firstName = "Ha Chi";
console.log("Nice to meet you, " + firstName);
console.log(`Nice to meet you, ${firstName}`);//template string

// 04 - String Length
var test = "I'm very long";
console.log(test.length);

// 05 - Replace
var food = "croissant is meh";
console.log(food.replace("meh", "so good"));

let food = "croissant is meh";
newFood = food.replace("meh", "so good");
console.log(newFood);

// 06 - Up and Down
var basic = "This is Cool";
console.log(basic.toUpperCase());
console.log(basic.toLowerCase());

// 07 - Split
var word = "banana sweet";
var letters = word.split("");
console.log(letters);
var words = word.split(" ")
console.log(words);

var word = "banana";
console.log(word.split("")); 

// 08 - Template
var age = "31";
template = "I am " + age + " years old";
console.log(template);

var age = 31;
console.log(`I am ${age} years old`);


// Bonus
// Creer une variable changed ayant pour valeur "Bonjour", utiliser la doc pour afficher Banjaur
var changed = "Bonjour";
result = changed.replace(/o/g, "a");
console.log(result);

var changed = "Bonjour";
console.log(changed.replace(/o/g, "a"));