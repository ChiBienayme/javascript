// 01 - Array
let fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

// 02 - Access
let ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

//  03 - Add and Remove
//Ajoutez "chair" au début du tableau puis affichez le résultat
let objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);
//[ 'chair', 'pen', 'book', 'lamp' ]

// Enlevez "lamp" puis affichez le résultat
objects.pop();
console.log(objects);
//[ 'chair', 'pen', 'book' ]

// Ajoutez "laptop" à la fin du tableau puis affichez le résultat
objects.push("laptop");
console.log(objects);
//[ 'chair', 'pen', 'book', 'laptop' ]

// Enlevez "chair" puis affichez le résultat
objects.shift();
console.log(objects);
//[ 'pen', 'book', 'laptop' ]

// 04 - Order
const number = [4, 10, 8, 12, 6];
console.log(number.reverse()); //[ 6, 12, 8, 10, 4 ]

const number = [4, 10, 8, 12, 6];
number.sort((a, b) => a - b);//une fonctionne
console.log(number); // donnera [ 4, 6, 8, 10, 12 ]

// 05 - Boucle FOR
let total = 0;
const limit = 10;
for (let i = 1; i <= limit; i++) {
  total += i; //total = total + i
  console.log(total);
}

// 06 - Reverse
// version 1a
let sentence = "Hello Konexio!";
let letters = sentence.split("");
let result = [];

for (let i = letters.length - 1; i >= 0; i--) {
  result.push(letters[i]);
  // console.log(result);
}

console.log(result.join(""));

// version 1b
const sentence = "Hello Konexio!";
let result = "";

for (let i = sentence.length - 1; i >= 0; i--) {
  result += sentence[i];
}

console.log(result);


// version 2
var str = "Hello Konexio!";
console.log(str.split("").reverse().join(" "));

// version 3
var str = "Hello Konexio!";
var slpitStr = str.split("");

for (const strReverse of slpitStr.reverse()) {
  // console.log(strReverse);
}

console.log(slpitStr.join(""));

// version 4
function reverseInPlace(str) {
  var sentence = [];
  sentence = str.split("s+");
  var result = "";
  for (var i = 0; i < sentence.length; i++) {
    return (result += sentence[i].split("").reverse().join(""));
  }
}
{
  console.log(reverseInPlace("Hello Konexio!"));
}

// Bonus 1
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz", i);
  } else if (i % 3 === 0) {
      console.log("fizz", i);
  } else if (i % 5 === 0) {
      console.log("buzz", i);
  } else if (i % 7 === 0) {
      console.log("",i);
      // continue;
  } else {
      console.log(i);
  }
}

for (let i = 1; i <= 100; i++)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz: ", i);
  }
for (let i = 1; i <= 100; i++)
  if (i % 3 === 0) {
    console.log("fizz", i);
  }
for (let i = 1; i <= 100; i++)
  if (i % 5 === 0) {
    console.log("buzz", i);
  }
for (let i = 1; i <= 100; i++)
  if (i % 7 === 0) {
    console.log("", i);
  }

// Bonus 2 - boucle WHILE
const total = 0;
const limit = 10;
const i = 0;
while (i <= limit) {
  total += i;
  i++;
  console.log(total);
}

// Bonus 3
var firstName = [
  "Chi",
  "Jessica",
  "Andrien",
  "Pauline",
  "Andrei",
  "Lysiane",
  "Axel",
  "Anita",
];
var random = Math.floor(Math.random() * firstName.length);
var randomName = firstName[random];
console.log(randomName);

// Bonus 4
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
for (let i = 0; i <= 20; i += 1) {
  console.log(`Random number ${i}: ${getRandomInt(1, 100)}`);
}
console.log(`Le plus grand numero est: ${Math.max(getRandomInt(1, 100))}`);
