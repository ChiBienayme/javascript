//01 - Number
var integer = 102;
var float = 13.9;
console.log(integer, float);

//02 - Convert
let basic = 34;
stringFied = basic.toString();
console.log(stringFied); 

// 03 - Round
let number = 1.5;
let rounded = Math.round(number);
console.log(rounded);

// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));

// 04 - Arithmetique
let test = 12;
let bis = 5;
console.log(test + bis); //17

// 05 - Comparaison
let test = 143;
let bis = 219
console.log(test > bis); //false

// 06 - Condition 1
let limit = 50;
let score = 64;
if (score >= limit ) {
    console.log("Ok good!");
} else {
    console.log("Oh noo....");
}

// 07 - Condition 2
let password = "azerty";
if (password.length >=5) {
    console.log("The password is secure");
} else {
    console.log("NaN");
}

// 08 - Condition 3
let limit = 50;
let score = 64; 
let password = "azerty";
if (score >= limit && password.length >=5 ) {
    console.log("Everything is good" );
} else if (score >= limit || password.length >=5) {
        console.log("Something is good");
} else {
    console.log("Nothing is good");
}

// Bonus
const n = Math.floor(Math.random() * 6) +1;
console.log(n);
if (n === 6) {
    console.log("Yes I win");
} else {
    console.log("So close....");
}

// Bonus 2
const month = "Novembre";
switch (month) {
    case "December", "January", "February": 
        console.log("Winter");
        break;
    case "March", "April", "May":
        console.log("Spring");
        break;
    case "June", "July" , "August":
        console.log("Summer");
        break;
    default:
        console.log("Fall");
}  

// Bonus 3
const n = "12.4";
if (Math.floor(n) ===  Math.round(n))
{
    console.log(Math.floor(n));
} else {
    console.log(Math.ceil(n));
}
console.log(n.substring(0));


