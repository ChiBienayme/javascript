//01 - Number
const integer = 102;
const float = 13.9;
console.log(integer, float);

//02 - Convert
let basic = 34;
let stringField = basic.toString();
console.log(stringField);

const basic = 34;
console.log(basic.toString());

// 03 - Round
const number = 1.5;
const rounded = Math.round(number);
console.log(rounded);

// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));

// 04 - Arithmetique
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

// 05 - Comparaison
const test = 143;
const bis = 219;
console.log(
  test > bis,
  test < bis,
  test >= bis,
  test <= bis,
  test === bis,
  test != bis
);

// 06 - Condition 1
const limit = 50;
const score = 64;
if (score >= limit) {
  console.log("Ok good!");
} else {
  console.log("Oh noo....");
}

const limit = 50;
const score = 64;
console.log(score >= limit ? "Oh good" : "Oh no");
score >= limit ? console.log("Oh good") : console.log("Oh no");

const limit = 50;
const score = 64;
const hasWon = limit >= score;
if (hasWon) {
  console.log("Ok good!");
} else {
  console.log("Oh noo....");
}

const limit = 50;
const score = 64;
const hasWon = limit >= score; //true
if (!hasWon) {
  //! donne l'inverse de hasWon, donc l'inverse de true = false
  console.log("Oh noo....");
} else {
  console.log("Ok good!");
}

// 07 - Condition 2
let password = "azerty";
if (password.length > 5) {
  console.log("The password is secure");
} else {
  console.log("NaN");
}

// 08 - Condition 3
const limit = 50;
const score = 64;
const password = "azerty";
if (score >= limit && password.length > 5) {
  console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
  console.log("Something is good");
} else {
  console.log("Nothing is good");
}

// Bonus 1
const n = Math.floor(Math.random() * 6) + 1; //+1 pour eviter 0
console.log(n);
if (n === 6) {
  console.log("Yes I win");
} else {
  console.log("So close....");
}

// Bonus 2
const month = "January";
switch (month) {
  case ("December", "January", "February"):
    console.log("Winter");
    break;
  case ("March", "April", "May"):
    console.log("Spring");
    break;
  case ("June", "July", "August"):
    console.log("Summer");
    break;
  default:
    console.log("Fall");
}

// Bonus 3
const n = 3.6;
if (n - Math.floor(n) >= 0.5) {
  console.log(Math.ceil(n));
} else {
  console.log(Math.floor(n));
}

const strNumber = n.toString();
const index = strNumber.indexOf(".");
const strNumberSubstr = strNumber.substring(index);
if (strNumberSubstr >= 0.5) {
  console.log(Math.ceil(n));
} else {
  console.log(Math.floor(n));
}
