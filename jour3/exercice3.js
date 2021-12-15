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
objects.pop(3);
console.log(objects);
//[ 'chair', 'pen', 'book' ]

// Ajoutez "laptop" à la fin du tableau puis affichez le résultat
objects.push("laptop");
console.log(objects);
//[ 'chair', 'pen', 'book', 'laptop' ]

// Enlevez "chair" puis affichez le résultat
objects.shift(1);
console.log(objects);
//[ 'pen', 'book', 'laptop' ]

// 04 - Order
var number = [4, 10, 8, 12, 6];
console.log(number.reverse());

var number = [4, 10, 8, 12, 6];
number.sort((a, b) => a - b);
console.log(number); // donnera [ 4, 6, 8, 10, 12 ]

// 05 - Boucle FOR
var total = 0;
var limit = 10;
for (var i = 1; i <= limit; i++) {
  total = total + i;
  console.log(total);
}

// 06 - Reverse
var str = "Hello Konexio!";
console.log(str.split("").reverse().join(" "));


var str = "Hello Konexio!";
var slpitStr = str.split("");
for (const strReverse of slpitStr.reverse()) {
    console.log(strReverse);
}

function reverseInPlace(str) {
  var sentence = [];
  sentence = str.split("\s+");
  var result = "";
  for (var i = 0; i < sentence.length; i++) {
      return result += sentence[i].split('').reverse().join('');
  }
}
{console.log(reverseInPlace("Hello Konexio!"))
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
    console.log("", i);
  } else {
    console.log(i);
  }
}

// Bonus 2 - boucle WHILE
var n = 0;
var x = 10;
while (n < x) {
  x += n;
  n++;
  console.log(n);
}


var total = 0;
var limit = 10;
for (var i = 1; i <= limit; i++) {
  total = total + i;
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
var random = Math.floor(Math.random()*firstName.length);
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
 


